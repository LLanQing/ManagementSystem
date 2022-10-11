<template>
	<!-- 
  el-table表格组件 
  data:表格组件将来需要展示的数据------数组
  border：是给表格添加边框
  stripe：可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。
  highlight-current-row：是否要高亮当前行	boolean	—默认	false
  height：Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；
          如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
          只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。

  注意1：elmentUI当中的table组件，展示的数据是以一列一列进行展示数据
-->
	<el-table
		style="width: 100%"
		border
		:data="list"
		stripe
		highlight-current-row
	>
		<!-- 
    el-table-column属性：
      label：显示标题
      width：列的宽度，不设置时，会根据列数平均分配宽度
      align：标题的对齐方式，可选值：	left/center/right ，默认left
      prop：对应列内容的字段名，也可以使用 property 属性
      type：对应列的类型。如果设置了 selection 则显示多选框；
            如果设置了 index 则显示该行的索引（从 1 开始计算）；
            如果设置了 expand 则显示为一个可展开的按钮
      index：如果设置了 type=index，可以通过传递 index 属性来自定义索引
    -->
		<el-table-column type="index" label="序号" width="80px" align="center">
		</el-table-column>

		<!-- 
  当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据
 -->
		<el-table-column prop="tmName" label="品牌名称"> </el-table-column>
		<el-table-column prop="logoUrl" label="品牌LOGO">
			<!-- 
        Table-column Scoped Slot 自定义列 封装好的，相当于el
        通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
        	自定义列的内容，参数为 { row, column, $index }
          header	自定义表头的内容. 参数为 { column, $index }
       -->
			<template slot-scope="{ row, $index }">
				<img :src="row.logoUrl" alt="" style="width: 100px; height: 100px" />
			</template>
		</el-table-column>
		<el-table-column prop="prop" label="操作">
			<template slot-scope="{ row, $index }">
				<el-button
					type="warning"
					icon="el-icon-edit"
					size="mini"
					@click="updateTradeMark(row)"
					>修改</el-button
				>
				<el-button
					type="danger"
					icon="el-icon-delete"
					size="mini"
					@click="deleteTradeMark(row)"
					>删除</el-button
				>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: 'TradeMark',
		data() {
			//自定义校验规则
			var validateTmName = (rule, value, callback) => {
				//自定义校验规则
				if (value.length < 2 || value.length > 10) {
					callback(new Error('品牌名称2-10位'));
				} else {
					callback();
				}
			};

			return {
				//代表的分页器第几页
				page: 1,
				//当前页数展示数据条数
				limit: 3,
				//总共数据条数
				total: 0,
				//列表展示的数据
				list: [],
				//对话框显示与隐藏控制的属性
				dialogFormVisible: false,
				//收集品牌信息:对象身上的属性，不能瞎写，需要看文档的
				tmForm: {
					tmName: '',
					logoUrl: '',
				},
				//表单验证规则
				rules: {
					//品牌名称的验证规则
					//require:必须要校验字段（前面五角星有关系）  message 提示信息    trigger:用户行为设置（事件的设置:blur、change）
					tmName: [
						{ required: true, message: '请输入品牌名称', trigger: 'blur' },
						//自定义校验规则
						{ validator: validateTmName, trigger: 'change' },
					],
					//品牌的logo验证规则
					logoUrl: [{ required: true, message: '请选择品牌的图片' }],
				},
			};
		},
		//组件挂载完毕发请求
		mounted() {
			//获取列表数据方法
			this.getPageList();
		},
		methods: {
			//获取品牌列表的数据
			async getPageList(pager = 1) {
				this.page = pager;
				//解构出参数
				const { page, limit } = this;
				//获取品牌列表的接口
				//当你向服务器发请求的时候，这个函数需要带参数，因此老师在data当中初始化两个字段，代表给服务器传递参数
				let result = await this.$API.trademark.reqTradeMarkList(page, limit);
				//分别是展示数据总条数与列表展示的数据
				this.total = result.data.total;
				this.list = result.data.records;
			},
			//当分页器某一页需要展示数据条数发生变化的时候会触发
			handleSizeChange(limit) {
				//整理参数
				this.limit = limit;
				this.getPageList();
			},

			//点击添加品牌的按钮
			showDialog() {
				//显示对话框
				this.dialogFormVisible = true;
				//清除数据
				this.tmForm = { tmName: '', logoUrl: '' };
			},
			//修改某一个品牌
			updateTradeMark(row) {
				//row：当前用户选中这个品牌信息
				//显示对话框
				this.dialogFormVisible = true;
				//将已有的品牌信息赋值给tmForm进行展示
				//将服务器返回品牌的信息，直接赋值给了tmForm进行展示。
				//也就是tmForm存储即为服务器返回品牌信息
				this.tmForm = { ...row };
			},

			//图片上传成功
			handleAvatarSuccess(res, file) {
				//res：上传成功之后返回前端数据
				//file:上传成功之后服务器返回前端数据
				//收集品牌图片数据，因为将来需要带给服务器
				this.tmForm.logoUrl = res.data;
			},
			//图片上传之前
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			//添加按钮（添加品牌|修改品牌）
			addOrUpdateTradeMark() {
				//当全部验证字段通过，再去书写业务逻辑
				this.$refs.ruleForm.validate(async success => {
					//如果全部字段符合条件
					if (success) {
						this.dialogFormVisible = false;
						//发请求（添加品牌|修改品牌）
						let result = await this.$API.trademark.reqAddOrUpdateTradeMark(
							this.tmForm
						);
						if (result.code == 200) {
							//弹出信息:添加品牌成功、修改品牌成功
							this.$message({
								type: 'success',
								message: this.tmForm.id ? '修改品牌成功' : '添加品牌成功',
							});
							//添加或者修改品牌成功以后，需要再次获取品牌列表进行展示
							//如果添加品牌： 停留在第一页，修改品牌应该留在当前页面
							this.getPageList(this.tmForm.id ? this.page : 1);
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			//删除品牌的操作
			deleteTradeMark(row) {
				//弹框
				this.$confirm(`你确定删除${row.tmName}?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				})
					.then(async () => {
						//当用户点击确定按钮的时候会出发
						//向服务器发请求
						let result = await this.$API.trademark.reqDeleteTradeMark(row.id);
						//如果删除成功
						if (result.code == 200) {
							this.$message({
								type: 'success',
								message: '删除成功!',
							});
							//再次获取品牌列表数据
							this.getPageList(
								this.list.length > 1 ? this.page : this.page - 1
							);
						}
					})
					.catch(() => {
						//当用户点击取消按钮的时候会触发
						this.$message({
							type: 'info',
							message: '已取消删除',
						});
					});
			},
		},
	};
</script>

<style></style>
