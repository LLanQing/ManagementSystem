//引入登录|退出登录|获取用户信息的接口函数
import { login, logout, getInfo } from '@/api/user';
// 获取token|设置token|删除token的函数
import { getToken, setToken, removeToken } from '@/utils/auth';
//路由模块当中重置路由的方法
import { resetRouter, constantRoutes, asyncRoutes } from '@/router';
import router from '@/router';
import cloneDeep from 'lodash/cloneDeep';

// 将state初始化数据写成函数，方便清空数据
const getDefaultState = () => {
	return {
		//获取token
		token: getToken(),
		//存储用户名
		name: '',
		//存储用户头像
		avatar: '',
		//服务器返回的菜单信息【根据不同的角色：返回的标记信息，数组里面的元素是字符串】
		routes: [],
		//角色信息
		roles: [],
		//按钮权限的信息
		buttons: [],
		//对比之后【项目中已有的异步路由，与服务器返回的标记信息进行对比最终需要展示的理由】
		resultAsyncRoutes: [],
		//用户最终需要展示全部路由
		resultAllRoutes: [],
	};
};

const state = getDefaultState();

const mutations = {
	//重置state
	RESET_STATE: state => {
		Object.assign(state, getDefaultState());
	},

	//存储token
	SET_TOKEN: (state, token) => {
		state.token = token;
	},

	//存储用户信息
	SET_USERINFO: (state, userInfo) => {
		//用户名
		state.name = userInfo.name;
		//用户头像
		state.avatar = userInfo.avatar;
		//菜单权限标记
		state.routes = userInfo.routes;
		//按钮权限标记
		state.buttons = userInfo.buttons;
		//角色
		state.roles = userInfo.roles;
	},

	// 最终计算出来的异步路由
	SET_RESULTASYNCROUTES: (state, resultAsyncRoutes) => {
		//vuex保存当前用户的异步路由，注意，一个用户需要展示完整的路由包括：常量、异步、任意路由
		state.resultAsyncRoutes = resultAsyncRoutes;
		//计算出当前用户需要展示所有路由
		//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
		state.resultAllRoutes = constantRoutes.concat(resultAsyncRoutes);
		//给路由器添加新的路由
		// 添加路由之前先重置路由
		resetRouter();
		router.addRoutes(resultAsyncRoutes);
	},
};

//定义一个函数：两个数组进行对比，对比出当前用户到底显示哪些异步路由
const computedAsyncRoutes = (asyncRoutes, routes) => {
	//过滤出当前用户【超级管理|普通员工】需要展示的异步路由
	// Array.filter()过滤数组，返回一个新数组，元素由回调函数返回true的元素组成
	return asyncRoutes.filter(item => {
		//数组当中没有这个元素返回-1，如果有这个元素则返回索引值
		if (routes.indexOf(item.name) !== -1) {
			//递归:别忘记还有2、3、4、5、6级路由
			if (item.children && item.children.length) {
				// 如果子路由匹配上，这添加到最终结果的路由数组里面
				item.children = computedAsyncRoutes(item.children, routes);
			}
			return true;
		}
	});
};

const actions = {
	// user login
	async login({ commit }, userInfo) {
		const { username, password } = userInfo;
		const { data } = await login({
			username: username.trim(),
			password: password,
		});
		//vuex存储token
		commit('SET_TOKEN', data.token);
		//本地持久化存储token
		setToken(data.token);
	},

	// get user info
	async getInfo({ commit, state }) {
		const { data } = await getInfo(state.token);
		//获取用户信息:返回数据包含：用户名name、用户头像avatar、routes[返回的标志:不同的用户应该展示哪些菜单的标记]、roles（用户角色信息）、buttons【按钮的信息：按钮权限用的标记】
		if (!data) {
			return Promise.reject('Verification failed, please Login again.');
		}
		//vuex存储用户全部的信息
		commit('SET_USERINFO', data);
		//vuex存储用户全部的异步路由，需要将asyncRoutes深拷贝出来，以免computedAsyncRoutes修改原数组
		commit(
			'SET_RESULTASYNCROUTES',
			computedAsyncRoutes(cloneDeep(asyncRoutes), data.routes)
		);
	},

	// user logout
	logout({ commit, state }) {
		return new Promise((resolve, reject) => {
			logout(state.token)
				.then(() => {
					removeToken(); // must remove  token  first
					resetRouter();
					commit('RESET_STATE');
					resolve();
				})
				.catch(error => {
					reject(error);
				});
		});
	},

	// remove token
	resetToken({ commit }) {
		return new Promise(resolve => {
			removeToken(); // must remove  token  first
			commit('RESET_STATE');
			resolve();
		});
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
};
