# 1项目简介







# 2:模板介绍

简洁版: https://github.com/PanJiaChen/vue-admin-template
加强版: https://github.com/PanJiaChen/vue-element-admin
模板的文件与文件夹认知【简洁版】

>build
>     ----index.js webpack配置文件【很少修改这个文件】
>mock
>    ----mock数据的文件夹【模拟一些假的数据mockjs实现的】，因为咱们实际开发的时候，利用的是真是接口
>
>node_modules
>     ------项目依赖的模块
>
>public
>     ------ico图标,静态页面，publick文件夹里面经常放置一些静态资源，而且在项目打包的时候webpack不会编译这个文件夹，原封不动的打包到dist文件夹里面
>
>src
>    -----程序员源代码的地方
>    ------api文件夹:涉及请求相关的
>    ------assets文件夹：里面放置一些静态资源（一般共享的），放在aseets文件夹里面静态资源，在webpack打包的时候，会进行编译
>    ------components文件夹：一般放置非路由组件获取全局组件
>    ------icons这个文件夹的里面放置了一些svg矢量图
>    ------layout文件夹：他里面放置一些组件与混入
>    ------router文件夹：与路由相关的
>    -----store文件夹：一定是与vuex相关的
>    -----style文件夹：与样式相关的
>    ------utils文件夹：request.js是axios二次封装文件****
>    ------views文件夹：里面放置的是路由组件
>
>App.vue:根组件
>main.js：入口文件
>permission.js:与导航守卫相关、
>settings：项目配置项文件
>
>下面三个文件是提供给webpack的环境变量文件，可以通过NodeJS的对象process.env访问到
>
>.env.development	开发环境
>.env.producation	生产环境
>.env.staging		测试环境
>
>postcss.config.js：css相关配置文件
>
>





## 后台管理系统API接口在线文档：

用户信息和权限接口：

http://39.98.123.211:8170/swagger-ui.html

商品业务接口:

http://39.98.123.211:8510/swagger-ui.html

# 3:完成登录业务

  -----静态组件完成
  -----书写API（换成真实的接口）
  -----axios二次封装
  -----换成真实接口之后需要解决代理跨域问题(解决代理跨域问题)





# 4)退出登录业务





# 5)项目路由的搭建

按照模板的路由书写路由规则

```js
	{
		path: '/product',
		component: Layout,
		name: 'Product',
		meta: { title: '商品管理', icon: 'el-icon-goods' },
		children: [
			{
				path: 'trademark',
				name: 'TradeMark',
				component: () => import('@/views/TradeMark/index'),
				meta: { title: '品牌管理' },
			},
			{
				path: 'attr',
				name: 'Attr',
				component: () => import('@/views/Attr/index'),
				meta: { title: '售卖属性' },
			},
			{
				path: 'spu',
				name: 'Spu',
				component: () => import('@/views/Spu/index'),
				meta: { title: 'Spu管理' },
			},
			{
				path: 'sku',
				name: 'Sku',
				component: () => import('@/views/Sku/index'),
				meta: { title: 'Sku管理' },
			},
		],
	},
```



# 6)完成品牌管理静态组件

使用Element—UI组件库

[ElementUI官网地址](https://element.eleme.cn/#/zh-CN/component/)

> el-button
>
> el-table
>
> el-pagination





# 7)完成品牌管理列表的展示

---书写相关的API接口

> 获取品牌列表接口：
>
> /admin/product/baseTrademark/{page}/{limit}
>
> 
>

业务没什么难的，就是ElementUI不熟练，在此分析一下使用的组件

## el-button

[Button 按钮](https://element.eleme.cn/#/zh-CN/component/button)

> ```html
> <!-- 按钮 使用type、plain、round和circle属性来定义 Button 的样式。-->
> <el-button
>            type="primary"				//primary是蓝色的按钮，因为饿了么主题是蓝色
>            icon="el-icon-plus"	
>            style="margin: 10px 0px"	
>            @click="showDialog"	//原生click事件
>            >添加</el-button
>   >
> ```
>
> | 参数        | 说明           | 类型    | 可选值                                            | 默认值 |
> | ----------- | -------------- | ------- | ------------------------------------------------- | ------ |
> | size        | 尺寸           | string  | medium / small / mini                             | —      |
> | type        | 类型           | string  | primary / success  warning / danger / info / text | —      |
> | plain       | 是否朴素按钮   | boolean | —                                                 | false  |
> | round       | 是否圆角按钮   | boolean | —                                                 | false  |
> | circle      | 是否圆形按钮   | boolean | —                                                 | false  |
> | loading     | 是否加载中状态 | boolean | —                                                 | false  |
> | disabled    | 是否禁用状态   | boolean | —                                                 | false  |
> | icon        | 图标类名       | string  | —                                                 | —      |
> | autofocus   | 是否默认聚焦   | boolean | —                                                 | false  |
> | native-type | 原生 type 属性 | string  | button / submit / reset                           | button |
>
> 使用`<el-button-group>`标签来嵌套你的按钮。
>
> ```html
> <el-button-group>
>   <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
>   <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
> </el-button-group>
> <el-button-group>
>   <el-button type="primary" icon="el-icon-edit"></el-button>
>   <el-button type="primary" icon="el-icon-share"></el-button>
>   <el-button type="primary" icon="el-icon-delete"></el-button>
> </el-button-group>
> ```
>
> 

## el-table



> ```html
> 	<!-- 
>   el-table表格组件 
>   data:表格组件将来需要展示的数据------数组
>   border：是给表格添加边框
>   stripe：可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。
>   highlight-current-row：是否要高亮当前行	boolean	—默认	false
>   height：Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；
>           如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
>           只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。
> 
>   注意1：elmentUI当中的table组件，展示的数据是以一列一列进行展示数据
> -->
> 	<el-table
> 		style="width: 100%"
> 		border
> 		:data="list"
> 		stripe
> 		highlight-current-row
> 	>
> 		<!-- 
>     el-table-column属性：
>       label：显示标题
>       width：列的宽度，不设置时，会根据列数平均分配宽度
>       align：标题的对齐方式，可选值：	left/center/right ，默认left
>       prop：对应列内容的字段名，也可以使用 property 属性
>       type：对应列的类型。如果设置了 selection 则显示多选框；
>             如果设置了 index 则显示该行的索引（从 1 开始计算）；
>             如果设置了 expand 则显示为一个可展开的按钮
>       index：如果设置了 type=index，可以通过传递 index 属性来自定义索引
>     -->
> 		<el-table-column type="index" label="序号" width="80px" align="center">
> 		</el-table-column>
> 
> 		<!-- 
>   当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据
>  -->
> 		<el-table-column prop="tmName" label="品牌名称"> </el-table-column>
> 		<el-table-column prop="logoUrl" label="品牌LOGO">
> 			<!-- 
> 				需要展示图片就必须使用img标签，prop="logoUrl"展示出来的是url地址，不是图片。所以需要作用域插槽，将img插入到el-table-column中
>         Table-column Scoped Slot 自定义列 封装好的，相当于el
>         通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据
> 					row：当前行所有数据，
> 					column：当前列的所有配置信息，注意不是当前列的数据
> 					$index：当前行的索引，从0开始
> 					store：store组件实例
> 					
>         	自定义列的内容，参数为 { row, column, $index }
>           header	自定义表头的内容. 参数为 { column, $index }
>        -->
> 			<template slot-scope="{ row, $index }">
> 				<img :src="row.logoUrl" alt="" style="width: 100px; height: 100px" />
> 			</template>
> 		</el-table-column>
> 		<el-table-column prop="prop" label="操作">
> 			<template slot-scope="{ row, $index }">
> 				<el-button
> 					type="warning"
> 					icon="el-icon-edit"
> 					size="mini"
> 					@click="updateTradeMark(row)"
> 					>修改</el-button
> 				>
> 				<el-button
> 					type="danger"
> 					icon="el-icon-delete"
> 					size="mini"
> 					@click="deleteTradeMark(row)"
> 					>删除</el-button
> 				>
> 			</template>
> 		</el-table-column>
> 	</el-table>
> ```
>
> 



## el-pagination

>```html
><!-- 
> 分页器 
> 当前第几页、数据总条数、每一页展示条数、连续页码数
> @size-change="handleSizeChange"
> @current-change="handleCurrentChange"
>
> current-page:代表的是当前第几页
> total：代表分页器一共需要展示数据条数
> page-size：代表的是每一页需要展示多少条数据
> page-sizes：代表可以设置每一页展示多少条数据
> layout：可以实现分页器布局，prev表示上一页，next为下一页，pager表示页码列表，除此以外还提供了jumper和total，sizes和特殊的布局符号->，->后的元素会靠右显示，jumper表示跳页元素，total表示总条目数，sizes用于设置每页显示的页码数量。
> pager-count:需要展示按钮的数量  如果 9  连续页码是7
>	
>
>-->
>		<el-pagination
>			style="margin-top: 20px; text-align: center"
>			:current-page="page"
>			:total="total"
>			:page-size="limit"
>			:pager-count="7"
>			:page-sizes="[3, 5, 10]"
>			@current-change="getPageList"
>			@size-change="handleSizeChange"
>			layout="prev, pager, next, jumper,->,sizes,total"
>		>
>		</el-pagination>
>```
>
>| 参数                | 说明                                     | 类型     | 可选值                                                       | 默认值                                 |
>| ------------------- | ---------------------------------------- | -------- | ------------------------------------------------------------ | -------------------------------------- |
>| small               | 是否使用小型分页样式                     | boolean  | —                                                            | false                                  |
>| background          | 是否为分页按钮添加背景色                 | boolean  | —                                                            | false                                  |
>| page-size           | 每页显示条目个数，支持 .sync 修饰符      | number   | —                                                            | 10                                     |
>| total               | 总条目数                                 | number   | —                                                            | —                                      |
>| pager-count         | 页码按钮的数量，当总页数超过该值时会折叠 | number   | 大于等于 5 且小于等于 21 的奇数                              | 7                                      |
>| current-page        | 当前页数，支持 .sync 修饰符              | number   | —                                                            | 1                                      |
>| layout              | 组件布局，子组件名用逗号分隔             | String   | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'prev, pager, next, jumper, ->, total' |
>| page-sizes          | 每页显示个数选择器的选项设置             | number[] | —                                                            | [10, 20, 30, 40, 50, 100]              |
>| prev-text           | 替代图标显示的上一页文字                 | string   | —                                                            | —                                      |
>| next-text           | 替代图标显示的下一页文字                 | string   | —                                                            | —                                      |
>| disabled            | 是否禁用                                 | boolean  | —                                                            | false                                  |
>| hide-on-single-page | 只有一页时是否隐藏                       | boolean  | —                                                            | -                                      |
>|                     |                                          |          |                                                              |                                        |
>| 事件名称            | 说明                                     | 回调参数 |                                                              |                                        |
>| size-change         | pageSize 改变时会触发                    | 每页条数 |                                                              |                                        |
>| current-change      | currentPage 改变时会触发                 | 当前页   |                                                              |                                        |
>| prev-click          | 用户点击上一页按钮改变当前页后触发       | 当前页   |                                                              |                                        |
>| next-click          | 用户点击下一页按钮改变当前页后触发       | 当前页   |                                                              |                                        |
>
>```js
>//获取品牌列表的数据
>async getPageList(pager = 1) {
>  this.page = pager;
>  //解构出参数
>  const { page, limit } = this;
>  //获取品牌列表的接口
>  //当你向服务器发请求的时候，这个函数需要带参数，因此老师在data当中初始化两个字段，代表给服务器传递参数
>  let result = await this.$API.trademark.reqTradeMarkList(page, limit);
>  //分别是展示数据总条数与列表展示的数据
>  this.total = result.data.total;
>  this.list = result.data.records;
>},
> 
>//当分页器某一页需要展示数据条数发生变化的时候会触发
>handleSizeChange(limit) {
>    //整理参数
>    this.limit = limit;
>    this.getPageList();
>  },
>```
>
>



# 8)添加品牌与修改品牌的静态组件

修改和添加品牌使用带有表单的对话框实现的。

## el-dialog

[el-dialog官网](https://element.eleme.cn/#/zh-CN/component/dialog)

> 首先要明白一个事情，ElementUI封装的组件，我们是作为当前组件的子组件使用的，所以传递数据都是父子通信
>
> ```html
> <!--
> 对话框
> :visible.sync:控制对话框显示与隐藏用的
> Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
> -->
> <el-dialog
>         :title="tmForm.id ? '修改品牌' : '添加品牌'"
>         :visible.sync="dialogFormVisible"
>         >
> <!-- form表单 :model属性，这个属性的作用是,把表单的数据收集到那个对象的身上 ，将来表单验证，也需要这个属性-->
> <el-form style="width: 80%" :model="tmForm" :rules="rules" ref="ruleForm">
>  <el-form-item label="品牌名称" label-width="100px" prop="tmName">
>    <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
>  </el-form-item>
>  <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
>    <!--这里收集数据：不能使用v-model，因为不是表单元素
> action:设置图片上传的地址
> :on-success:可以检测到图片上传成功，当图片上传成功，会执行一次
> :before-upload：可以在上传图片之前，会执行一次
> 
> -->
>    <el-upload
>               class="avatar-uploader"
>               action="/dev-api/admin/product/fileUpload"
>               :show-file-list="false"
>               :on-success="handleAvatarSuccess"
>               :before-upload="beforeAvatarUpload"
>               >
>      <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar" />
>      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
>      <div slot="tip" class="el-upload__tip">
>        只能上传jpg/png文件，且不超过500kb
>      </div>
>    </el-upload>
>  </el-form-item>
> </el-form>
> <div slot="footer" class="dialog-footer">
>  <el-button @click="dialogFormVisible = false">取 消</el-button>
>  <el-button type="primary" @click="addOrUpdateTradeMark"
>             >确 定</el-button
>    >
> </div>
> </el-dialog>
> ```
>
> 1.visible 是否显示 Dialog，支持 .sync 修饰符
>
> ​	`:visible.sync="dialogFormVisible" 相当于给el-dialog 传递了一个props 			:visible='dialogFormVisible'，并且绑定了自定义事件 @update:visible='dialogFormVisible = $event'`
>
> ​	其中父级组件监听这个事件的时候，我们可以通过 $event 访问到被抛出的这个值(el-dialog组件触发\$emit('update:visible',value)传递的value值)
>
> 2.slot="footer"，使用具名插槽，控制Dialog 按钮操作区的内容
>
> ​	el-dialog组件封装的操作区有<slot name="footer"></slot>的具名插槽，使用的时候按照规则使用就行

```js
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
```



## el-form

> el-form 
>
> | 参数        | 说明                                                         | 类型                                          | 可选值 | 默认值 |
> | ----------- | ------------------------------------------------------------ | --------------------------------------------- | ------ | ------ |
> | model       | 表单数据对象，把表单的数据收集到那个对象的身上               | object                                        | —      | —      |
> | rules       | 表单验证规则                                                 | object                                        | —      | —      |
> | label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string                                        | —      | —      |
> | 方法：      |                                                              |                                               |        |        |
> | validate    | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |        |        |
> |             |                                                              |                                               |        |        |
>
> el-form-item
>
> | 参数        | 说明                                                         | 类型    | 可选值                            | 默认值 |
> | ----------- | ------------------------------------------------------------ | ------- | --------------------------------- | ------ |
> | prop        | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 `model` 中的字段 | —      |
> | label       | 标签文本                                                     | string  | —                                 | —      |
> | required    | 是否必填，如不设置，则会根据校验规则自动生成                 | boolean | —                                 | false  |
> | rules       | 表单验证规则                                                 | object  | —                                 | —      |
> | error       | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string  | —                                 | —      |
> | label-width | 表单域标签的宽度，例如 '50px'。支持 `auto`。                 | string  | —                                 | —      |
>
> ```js
> //表单验证规则
> rules: {
> //品牌名称的验证规则
> //require:必须要校验字段（前面五角星有关系）  message 提示信息    trigger:用户行为设置（事件的设置:blur、change）
> tmName: [
>  { required: true, message: '请输入品牌名称', trigger: 'blur' },
>  //自定义校验规则
>  { validator: validateTmName, trigger: 'change' },
> ],
>  //品牌的logo验证规则
>  logoUrl: [{ required: true, message: '请选择品牌的图片' }],
> },
> 
> //自定义校验规则
> var validateTmName = (rule, value, callback) => {
>  //自定义校验规则
>  if (value.length < 2 || value.length > 10) {
>    callback(new Error('品牌名称2-10位'));
>  } else {
>    callback();
>  }
> };
>   
> //添加按钮（添加品牌|修改品牌）
> addOrUpdateTradeMark() {
>     //当全部验证字段通过，再去书写业务逻辑
>     this.$refs.ruleForm.validate(async success => {
>       //如果全部字段符合条件
>       if (success) {
>         this.dialogFormVisible = false;
>         //发请求（添加品牌|修改品牌）
>         let result = await this.$API.trademark.reqAddOrUpdateTradeMark(
>           this.tmForm
>         );
>         if (result.code == 200) {
>           //弹出信息:添加品牌成功、修改品牌成功
>           this.$message({
>             type: 'success',
>             message: this.tmForm.id ? '修改品牌成功' : '添加品牌成功',
>           });
>           //添加或者修改品牌成功以后，需要再次获取品牌列表进行展示
>           //如果添加品牌： 停留在第一页，修改品牌应该留在当前页面
>           this.getPageList(this.tmForm.id ? this.page : 1);
>         }
>       } else {
>         console.log('error submit!!');
>         return false;
>       }
>     });
>   },
> ```
>
> 

### async-validator表单验证（重点）

[async-validator表单验证](https://github.com/yiminghe/async-validator)

#### validate

```js
function(source, [options], callback): Promise
```

> - `source`：要验证的对象（必需）。
> - `options`：描述验证处理选项的对象（可选）。
> - `callback`：验证完成时调用的回调函数（可选）。

> elementUI封装了这个对象：
>
> this.$refs.ruleForm.validate(success => {})
>
> - this.$refs.ruleForm就是 source
> - success => {}是callback，验证成功就返回成功



#### Rules

执行验证的函数。

```js
function(rule, value, callback, source, options)
```

> - `rule`：源描述符中的验证规则，对应于正在验证的字段名称。它总是被分配一个`field`带有被验证字段名称的属性。
> - `value`：正在验证的源对象属性的值。
> - `callback`：验证完成后调用的回调函数。它期望传递一个`Error`实例数组来指示验证失败。如果检查是同步的，可以直接返回一个`false`or`Error`或`Error Array`。
> - `source`：传递给`validate`方法的源对象。
> - `options`： 附加选项。
> - `options.messages`：包含验证错误消息的对象，将与 defaultMessages 深度合并。

## el-input

见 25）详解

## el-upload

```html
<!--el-upload这里收集数据：不能使用v-model，因为不是表单元素
action:设置图片上传的地址
:on-success:可以检测到图片上传成功，当图片上传成功，会执行一次
:before-upload：可以在上传图片之前，会执行一次
-->
<el-upload
           class="avatar-uploader"
           action="/dev-api/admin/product/fileUpload"
           :show-file-list="false"
           :on-success="handleAvatarSuccess"
           :before-upload="beforeAvatarUpload"
           >
  <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar" />
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  <div slot="tip" class="el-upload__tip">
    只能上传jpg/png文件，且不超过500kb
  </div>
</el-upload>
```

| 参数           | 说明                                                         | 类型                               | 可选值                    | 默认值 |
| -------------- | ------------------------------------------------------------ | ---------------------------------- | ------------------------- | ------ |
| action         | 必选参数，上传的地址                                         | string                             | —                         | —      |
| show-file-list | 是否显示已上传文件列表                                       | boolean                            | —                         | true   |
| on-success     | 文件上传成功时的钩子                                         | function(response, file, fileList) | —                         | —      |
| on-error       | 文件上传失败时的钩子                                         | function(err, file, fileList)      | —                         | —      |
| on-progress    | 文件上传时的钩子                                             | function(event, file, fileList)    | —                         | —      |
| before-upload  | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。 | function(file)                     | —                         | —      |
| before-remove  | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。 | function(file, fileList)           | —                         | —      |
| list-type      | 文件列表的类型                                               | string                             | text/picture/picture-card | text   |
| file-list      | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array                              | —                         | []     |
| slot="tip"     | 提示说明文字                                                 |                                    |                           |        |



```js
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
```



# 9)完成添加品牌功能

见 8）

----书写先关的API请求接口
----前台需要收集数据，给服务器提交数据（发请求）





# 10)完成品牌修改功能

见 8）



# 11)表单验证功能

见 8）

elementUI提供表单验证功能（自定义校验规则---重点）





# 12)删除品牌的操作

elementUI当中组件：有时间的时候多翻看看。

> 使用MessageBox 弹框提示用户删除操作:
>
> ​	调用`$confirm`方法即可打开消息提示，它模拟了系统的 `confirm`。Message Box 组件也拥有极高的定制性，我们可以传入`options`作为第三个参数，它是一个字面量对象。`type`字段表明消息类型，可以为`success`，`error`，`info`和`warning`，无效的设置将会被忽略。注意，第二个参数`title`必须定义为`String`类型，如果是`Object`，会被理解为`options`。在这里我们用了 Promise 来处理后续响应。
>
> 删除成功后再次获取列表，当前页有数据就留在当前页，没有数据就显示上一页。this.list.length > 1 ? this.page : this.page - 1

```js
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

```

## Message 消息提示

> ### 全局方法
>
> Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 `Message`。
>
> ### Options
>
> | 参数    | 说明     | 类型           | 可选值                     | 默认值 |
> | ------- | -------- | -------------- | -------------------------- | ------ |
> | message | 消息文字 | string / VNode | —                          | —      |
> | type    | 主题     | string         | success/warning/info/error | info   |
>
> 

## MessageBox 弹框

> 从场景上说，MessageBox 的作用是美化系统自带的 `alert`、`confirm` 和 `prompt`，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。
>
> ### 全局方法
>
> 如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法：\$msgbox, ​\$alert, $confirm 和 ​\$prompt。因此在 Vue instance 中可以采用本页面中的方式调用 `MessageBox`。调用参数为：
>
> - `$msgbox(options)`
> - `$alert(message, title, options)` 或 `$alert(message, options)`
> - `$confirm(message, title, options)` 或 `$confirm(message, options)`
> - `$prompt(message, title, options)` 或 `$prompt(message, options)`

### Options

| 参数              | 说明                    | 类型           | 可选值 | 默认值                                          |
| ----------------- | ----------------------- | -------------- | ------ | ----------------------------------------------- |
| title             | MessageBox 标题         | string         | —      | —                                               |
| message           | MessageBox 消息正文内容 | string / VNode | —      | —                                               |
| showCancelButton  | 是否显示取消按钮        | boolean        | —      | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton | 是否显示确定按钮        | boolean        | —      | true                                            |
| cancelButtonText  | 取消按钮的文本内容      | string         | —      | 取消                                            |
| confirmButtonText | 确定按钮的文本内容      | string         | —      | 确定                                            |



# 13)平台属性管理的三级联动静态静态组件

使用el-card布局，上面是三级联动，下面是展示属性的表格

```html
<el-card style="margin: 20px 0px">
  <CategorySelect
                  @getCategoryId="getCategoryId"
                  :disabled="!isShowTable"
                  ></CategorySelect>
</el-card>
<el-card>
  <div v-show="isShowTable">
    <el-button
               type="primary"
               icon="el-icon-plus"
               :disabled="!category3Id"
               @click="addAttr"
               >添加属性</el-button
      >
    <!-- 表格:展示平台属性 -->
    <el-table style="width: 100%" border :data="attrList">
      <el-table-column type="index" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column prop="attrName" label="属性名称" width="150">
      </el-table-column>
      <el-table-column prop="prop" label="属性值列表" width="width">
        <template slot-scope="{ row, $index }">
          <el-tag
                  type="success"
                  v-for="(attrValue, index) in row.attrValueList"
                  :key="attrValue.id"
                  style="margin: 0px 20px"
                  >{{ attrValue.valueName }}</el-tag
            >
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="150">
        <template slot-scope="{ row, $index }">
          <el-button
                     type="warning"
                     icon="el-icon-edit"
                     size="mini"
                     @click="updateAttr(row)"
                     ></el-button>
          <el-button
                     type="danger"
                     icon="el-icon-delete"
                     size="mini"
                     ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- 添加属性|修改属性的结构 -->
  <div v-show="!isShowTable">
    <el-form :inline="true" ref="form" label-width="80px" :model="attrInfo">
      <el-form-item label="属性名">
        <el-input
                  placeholder="请输入属性名"
                  v-model="attrInfo.attrName"
                  ></el-input>
      </el-form-item>
    </el-form>
    <el-button
               type="primary"
               icon="el-icon-plus"
               @click="addAttrValue"
               :disabled="!attrInfo.attrName"
               >添加属性值</el-button
      >
    <el-button @click="isShowTable = true">取消</el-button>
    <el-table
              style="width: 100%; margin: 20px 0px"
              border
              :data="attrInfo.attrValueList"
              >
      <el-table-column align="center" type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column width="width" prop="prop" label="属性值名称">
        <template slot-scope="{ row, $index }">
          <!-- 这里结构需要用到span与input进行来回的切换,频繁切换使用v-show
不能使用autofocus属性代替上面的获取焦点方案。因为input渲染需要时间，可能来不及渲染，聚焦就失效了
-->
          <el-input
                    v-model="row.valueName"
                    placeholder="请输入属性值名称"
                    size="mini"
                    v-show="row.flag"
                    @blur="toLook(row)"
                    @keyup.native.enter="toLook(row)"
                    :ref="$index"
                    ></el-input>
          <span
                v-show="!row.flag"
                @click="toEdit(row, $index)"
                style="display: block"
                >{{ row.valueName }}</span
            >
        </template>
      </el-table-column>
      <el-table-column width="width" prop="prop" label="操作">
        <template slot-scope="{ row, $index }">
          <!-- 气泡确认框 -->
          <el-popconfirm
                         :title="`确定删除${row.valueName}?`"
                         @onConfirm="deleteAttrValue($index)"
                         >
            <el-button
                       type="danger"
                       icon="el-icon-delete"
                       size="mini"
                       slot="reference"
                       ></el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-button
               type="primary"
               @click="addOrUpdateAttr"
               :disabled="attrInfo.attrValueList.length < 1"
               >保存</el-button
      >
    <el-button @click="isShowTable = true">取消</el-button>
  </div>
</el-card>
```



## el-card

| 参数   | 说明             | 类型   | 可选值                 | 默认值 |
| ------ | ---------------- | ------ | ---------------------- | ------ |
| shadow | 设置阴影显示时机 | string | always / hover / never | alway  |



> 三级联动封装成全局组件CategorySelect
>
> 使用el-form和el-select实现

```html
<!-- inline:代表的是行内表单，代表一行可以放置多个表单元素 -->
<el-form :inline="true" class="demo-form-inline" :model="cForm">
  <el-form-item label="一级分类">
    <el-select
               placeholder="请选择"
               v-model="cForm.category1Id"
               @change="handler1"
               :disabled="disabled"
               >
      <el-option
                 :label="c1.name"
                 :value="c1.id"
                 v-for="(c1, index) in list1"
                 :key="c1.id"
                 ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="二级分类">
    <el-select
               placeholder="请选择"
               v-model="cForm.category2Id"
               @change="handler2"
               :disabled="disabled"
               >
      <el-option
                 :label="c2.name"
                 :value="c2.id"
                 v-for="(c2, index) in list2"
                 :key="c2.id"
                 ></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="三级分类">
    <el-select
               placeholder="请选择"
               v-model="cForm.category3Id"
               @change="handler3"
               :disabled="disabled"
               >
      <el-option
                 :label="c3.name"
                 :value="c3.id"
                 v-for="(c3, index) in list3"
                 :key="c3.id"
                 ></el-option>
    </el-select>
  </el-form-item>
</el-form>
```

## el-select

el-select

| 参数            | 说明                                        | 类型                      | 可选值 | 默认值 |
| --------------- | ------------------------------------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值                                      | boolean / string / number | —      | —      |
| multiple        | 是否多选                                    | boolean                   | —      | false  |
| disabled        | 是否禁用                                    | boolean                   | —      | false  |
| placeholder     | 占位符                                      | string                    | —      | 请选择 |
| @change         | 选中值发生变化时触发,回调参数：目前的选中值 |                           |        |        |

el-option

| 参数     | 说明                                      | 类型                 | 可选值 | 默认值 |
| -------- | ----------------------------------------- | -------------------- | ------ | ------ |
| value    | 选项的值                                  | string/number/object | —      | —      |
| label    | 选项的标签，若不设置则默认与 `value` 相同 | string/number        | —      | —      |
| disabled | 是否禁用该选项                            | boolean              | —      | false  |

>el-option的value选项的值会传递给el-select的value / v-model绑定值的对象

# 14)获取数据动态的展示三级联动

> 使用自定义事件将选择的下拉框内容传递给父组件
>
> this.$emit('getCategoryId', { categoryId: category1Id, level: 1 });
>
> 使用props传递disabled参数，控制三级联动是否可选。当在添加和修改页面时，三级联动不可选
>
> ```html
> <CategorySelect
>                 @getCategoryId="getCategoryId"
>                 :disabled="!isShowTable"
> ></CategorySelect>
> ```
>
> 

```js
//获取一级分类数据的方法
async getCategory1List() {
  //获取一级分类的请求：不需要携带参数
  let result = await this.$API.attr.reqCategory1List();
  if (result.code == 200) {
    this.list1 = result.data;
  }
},
  //一级分类的select事件回调（当一级分类的option发生变化的时候获取相应二级分类的数据）
  async handler1() {
    //清除数据
    this.list2 = [];
    this.list3 = [];
    this.cForm.category2Id = '';
    this.cForm.category3Id = '';
    //解构出一级分类的id
    const { category1Id } = this.cForm;
    this.$emit('getCategoryId', { categoryId: category1Id, level: 1 });
    //通过一级分类的id，获取二级分类的数据
    let result = await this.$API.attr.reqCategory2List(category1Id);
    if (result.code == 200) {
      this.list2 = result.data;
    }
  },
    //二级分类的select事件回调（当二级分类的option发生变化的时候获取相应三级分类的数据）
    async handler2() {
      //清除数据
      this.list3 = [];
      this.cForm.category3Id = '';
      //结构出数据
      const { category2Id } = this.cForm;
      this.$emit('getCategoryId', { categoryId: category2Id, level: 2 });
      let result = await this.$API.attr.reqCategory3List(category2Id);
      if (result.code == 200) {
        this.list3 = result.data;
      }
    },
      //三级分类的事件回调
      handler3() {
        //获取三级分类的id
        const { category3Id } = this.cForm;
        this.$emit('getCategoryId', { categoryId: category3Id, level: 3 });
      },
```



# 15)完成三级联动业务

见 14）



# 16)获取平台属性数据与展示平台属性

属性:颜色
属性值:黑色，红色，粉色，紫色

{
     attrName:'颜色'，
     attrValueList:['黑色'，紫色]
}



# 17）添加属性与修改属性静态组件

> 







# 18)收集平台属性的操作

属性名称   属性值列表

属性：颜色
属性值：粉色、红色、蓝色等等

注意1：别再data当中收集三级分类的id
因为对象存储数据无序存储





# 19)收集平台属性值的操作





# 20)解决取消按钮数据回显问题



# 21)修改属性的操作



# 22)添加属性中的 查看模式与编辑模式 切换


查看模式：显示span
编辑模式：显示input
注意：通过flag标记进行切换查看模式与编辑模式，但是需要注意的时候，一个属性flag没有办法控制全部的属性值的切换

```html
<!-- 这里结构需要用到span与input进行来回的切换,频繁切换使用v-show
不能使用autofocus属性代替上面的获取焦点方案。因为input渲染需要时间，可能来不及渲染，聚焦就失效了
-->
<el-input
          v-model="row.valueName"
          placeholder="请输入属性值名称"
          size="mini"
          v-show="row.flag"
          @blur="toLook(row)"
          @keyup.native.enter="toLook(row)"
          :ref="$index"
          ></el-input>
<span
      v-show="!row.flag"
      @click="toEdit(row, $index)"
      style="display: block"
      >{{ row.valueName }}</span
  >
```



# 23)查看模式与编辑模式注意事项





# 24)修改属性中 查看模式与编辑模式操作



# 25)表单元素自动聚焦的实现

> 再添加和编辑属性值时，输入框自动聚焦。因为渲染dom节点需要时间，所以需要使用nextTick()方法，等待渲染结束，使用ref属性获取组件实例，然后调用el-input组件的focus()方法获取焦点。
>
> 注意：不能使用autofocus属性代替上面的获取焦点方案。因为input渲染需要时间，可能来不及渲染，聚焦就失效了。
>
> ```html
> <el-input
>           v-model="row.valueName"
>           placeholder="请输入属性值名称"
>           size="mini"
>           v-if="row.flag"
>           @blur="toLook(row)"
>           @keyup.native.enter="toLook(row)"
>           :ref="$index"
> ></el-input>
> ```

## el-input

[el-input官网](https://element.eleme.cn/2.15/#/zh-CN/component/input)

> Input 为受控组件，它**总会显示 Vue 绑定值**。
>
> 通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。
>
> 不支持 `v-model` 修饰符。
>
> | 参数            | 说明                                                         |
> | --------------- | ------------------------------------------------------------ |
> | type            | 输入框类型，默认text,可选值：text，textarea 和其他 原生 input 的 type 值 |
> | value / v-model | 绑定值                                                       |
> | placeholder     | 输入框占位文本                                               |
> | show-password   | 是否显示切换密码图标，得到一个可切换显示隐藏的密码框。默认为false。boolean类型 |
> | size            | 输入框尺寸，只在 `type!="textarea"` 时有效，可选值：medium / small / mini |
> | autofocus       | 原生属性，自动获取焦点。默认为false。boolean类型             |
> | @blur           | 在 Input 失去焦点时触发                                      |
> | @focus          | 在 Input 获得焦点时触发                                      |
> | @change         | 仅在输入内容发生改变且失去焦点或用户按下回车时触发，回调函数会传入输入框的value |
> | 组件方法focus() | 使 input 获取焦点                                            |
> | 组件方法blur()  | 使 input 失去焦点                                            |
>
> 

> ```js
> //添加属性值回调
> addAttrValue() {
>   //向属性值的数组里面添加元素
>   //attrId：是你相应的属性的id，目前而言我们是添加属性的操作，还没有相应的属性的id，目前而言带给服务器的id为undefined
>   //valueName:相应的属性值的名称
>   //flag属性：给每一个属性值添加一个标记flag，用户切换查看模式与编辑模式，好处，每一个属性值可以控制自己的模式切换
>   //当前flag属性，响应式数据（数据变化视图跟着变化）
>   this.attrInfo.attrValueList.push({
>     attrId: this.attrInfo.id, //对于修改某一个属性的时候，可以在已有的属性值基础之上新增新的属性值（新增属性值的时候，需要把已有的属性的id带上）
>     valueName: '',
>     flag: true,
>   });
>   // 添加属性值时，输入框自动聚焦
>   this.$nextTick(() => {
>     this.$refs[this.attrInfo.attrValueList.length - 1].focus();
>   });
> },
>   
> //点击span的回调，变为编辑模式
> toEdit(row, index) {
>     row.flag = true;
>     //获取input节点，实现自动聚焦
>     //需要注意：点击span的时候，切换为input变为编辑模式，但是需要注意，对于浏览器而言，页面重绘与重拍耗时间的
>     //点击span的时候，重绘重拍一个input它是需要耗费事件，因此我们不可能一点击span立马获取到input
>     //$nextTick,当节点渲染完毕了，会执行一次
>     this.$nextTick(() => {
>       //获取相应的input表单元素实现聚焦
>       this.$refs[index].focus();
>    });
> },
> ```
>
> 



# 26)删除属性值操作

> 删除时使用气泡确认框
>
> ```html
> <!-- 气泡确认框 -->
> <el-popconfirm
>                :title="`确定删除${row.valueName}?`"
>                @onConfirm="deleteAttrValue($index)"
>                >
>   <el-button
>              type="danger"
>              icon="el-icon-delete"
>              size="mini"
>              slot="reference"
>              ></el-button>
> </el-popconfirm>
> ```
>
> ```js
> //气泡确认框确定按钮的回调
> //最新版本的ElementUI----2.15.6，目前模板中的版本号2.13.x
> deleteAttrValue(index) {
>   //当前删除属性值的操作是不需要发请求的
>   this.attrInfo.attrValueList.splice(index, 1);
> },
> ```
>
> `row、$index`是el-table-item的作用域插槽传递过来的参数，
>
> ​	`row`表示当前一行表格的数据；
>
> ​	`$index`表示当前一行表格在整个表格中的索引。

## el-popconfirm

(el-popconfirm官网地址)[https://element.eleme.cn/2.13/#/zh-CN/component/popconfirm]

> | 参数             | 说明                                                         |
> | ---------------- | ------------------------------------------------------------ |
> | title            | 标题                                                         |
> | slot="reference" | 触发 Popconfirm 显示的 HTML 元素（要触发气泡确认框就必须写上该具名插槽，一般都是写在el-button上） |
> | @onConfirm       | 点击确认按钮时触发                                           |
> | @onCancel        | 点击取消按钮时触发                                           |
>
> 

# 27)添加属性与修改属性保存的操作

> 当属性值列表为空时，保存按钮不允许操作。
>
> 给el-button添加disabled属性，判断属性值列表为空时不显示`attrInfo.attrValueList.length < 1`
>
> ```html
> <el-button
> type="primary"
> @click="addOrUpdateAttr"
> :disabled="attrInfo.attrValueList.length < 1"
> >保存</el-button
> >
> ```
>
> ```js
> //保存按钮：进行添加属性或者修改属性的操作
> async addOrUpdateAttr() {
>   //整理参数:1,如果用户添加很多属性值，且属性值为空的不应该提交给服务器
>   //   			2.提交给服务器数据当中不应该出现flag字段
>   this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter(
>     item => {
>       //过滤掉属性值不是空的
>       if (item.valueName != '') {
>         //删除掉flag属性
>         delete item.flag;
>         return true;
>       }
>     }
>   );
>   try {
>     //发请求
>     await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo);
>     //展示平台属性的table表格进行切换
>     this.isShowTable = true;
>     //提示消失
>     this.$message({ type: 'success', message: '保存成功' });
>     //保存成功以后需要再次获取平台属性进行展示
>     this.getAttrList();
>   } catch (error) {
>     this.$message({ type:'error',message:'保存失败'});
>   }
> },
> ```
>
> 





# 28)完成按钮与三级联动可操作性

>查看平台属性列表时，允许切换三级联动。当添加或者修改平台属性时，不允许操作。
>
>可以将控制table表格显示与隐藏的`isShowTable`通过props传递过去
>
>```html
><CategorySelect
>@getCategoryId="getCategoryId"
>:show="!isShowTable"
>></CategorySelect>
>```
>
>在CategorySelect组件中接收`props: ['show']`,在el-select选择器上添加disabled属性，属性值为接收的`show`
>
>```html
><el-select
>placeholder="请选择"
>v-model="cForm.category1Id"
>@change="handler1"
>:disabled="show"
>>
>```
>
>







# 29)SPU模块介绍

SPU你可以理解为类

People类【SPU】
实例:【SKU】
小明:小明  18  男 等等
小红：小红  88  女 等等



# 30）完成SPU管理模块静态





# 31)完成SPU列表展示









# 32)完成SPU管理内容切换

----展示SPU列表结构
----添加SPU|修改SPU
----展示添加SKU结构





# 33)完成SpuForm静态





# 34)SpuForm业务的分析

---品牌的数据需要发请求的            http://localhost:9529/dev-api/admin/product/baseTrademark/getTrademarkList
---获取平台中全部的销售属性（3个）    http://localhost:9529/dev-api/admin/product/baseSaleAttrList
---获取某一个SPU信息                 Request URL: http://localhost:9529/dev-api/admin/product/getSpuById/5092
--获取SPU图片                        http://localhost:9529/dev-api/admin/product/spuImageList/5092



----SPUFORM子组件发请求地方分析：
不能书写在mounted里面：
因为咱们刚才看了一下已经完成的项目，每一次显示SpuForm子组件的时候，都会发四个请求，
而我们为什么不能放在子组件的mounted里面，因为v-show只是控制SpuForm子组件显示与隐藏，
这个子组件并没有卸载（只是显示或者隐藏），导致mounted只能执行一次。



# 35)完成SpuForm获取服务器数据的操作



# 36)完成SpuForm数据的展示与收集


----添加SPU的时候需要给服务器携带的参数
{
  "category3Id": 0,
  "tmId": 0,
  "description": "string",
  "spuName": "string",

  "spuImageList": [
    {
      "id": 0,
      "imgName": "string",
      "imgUrl": "string",
      "spuId": 0
    }
  ],

  "spuSaleAttrList": [
    {
      "baseSaleAttrId": 0,
      "id": 0,
      "saleAttrName": "string",
      "spuId": 0,
      "spuSaleAttrValueList": [
        {
          "baseSaleAttrId": 0,
          "id": 0,
          "isChecked": "string",
          "saleAttrName": "string",
          "saleAttrValueName": "string",
          "spuId": 0
        }
      ]
    }
  ],
}



# 37)完成销售属性的展示

整个项目当中销售属性一共三个：颜色、尺码、版本

武侠SPU： 颜色





# 38)完成SpuForm照片墙图片的收集

----照片墙何时收集数据
     ---预览照片墙的时候，显示大的图片的时候，需要收集数据吗? ---不需要收集的【数据已经有了】

     ---照片墙在删除图片的时候，需要收集数据的。
     ---照片墙在添加图片的时候，需要收集数据的。





#   39)完成添加属性的操作

------收集哪些数据
baseSaleAttrId
saleAttrName
spuSaleAttrValueList
-----在什么时候收集数据

-----收集到哪里呀？
把数据收集到SPU对象







# 40)完成收集销售属性值的操作





# 41)完成销售属性值展示与收集

新增的销售属性值需要收集的字段:
baseSaleAttrId
saleAttrValueName







# 42)完成删除销售属性与销售属性值操作









# 43)完成SpuForm组件的保存的操作











# 44)完成添加Spu的业务

-----点击添加SPU按钮的时候，需要发请求（两个:获取品牌的数据、全部销售属性的数据）









# 45)完成删除SPU业务

 el-popconfirm使用见 26）

```html
<el-popconfirm
               title="这是一段内容确定删除吗？"
               @onConfirm="deleteSpu(row)"
               >
  <hint-button
               type="danger"
               icon="el-icon-delete"
               size="mini"
               title="删除spu"
               slot="reference"
               ></hint-button>
</el-popconfirm>
```

```js
//删除SPU的回调
async deleteSpu(row) {
  let result = await this.$API.spu.reqDeleteSpu(row.id);
  if (result.code == 200) {
    this.$message({ type: 'success', message: '删除成功' });
    //代表SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1 回到上一页
    this.getSpuList(this.records.length > 1 ? this.page : this.page - 1);
  }
},
```

> 删除需要传入当前表格一行的数据，将id传给接口。删除成功后，再获取列表数据，且当前页SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1 回到上一页



# 46)完成添加SKU静态组件

sku页面组件结构：

使用el-form实现，el-form细节和表单验证见 8）

```html
<el-form ref="form" label-width="80px">
  <el-form-item label="SPU名称">{{spu.spuName}}</el-form-item>
  <el-form-item label="SKU名称">
    <el-input placeholder="sku名称" v-model="skuInfo.skuName"></el-input>
  </el-form-item>
  <el-form-item label="价格(元)">
    <el-input placeholder="价格(元素)" type="number" v-model="skuInfo.price"></el-input>
  </el-form-item>
  <el-form-item label="重量(千克)">
    <el-input placeholder="重量(千克)" v-model="skuInfo.weight"></el-input>
  </el-form-item>
  <el-form-item label="规格描述">
    <el-input type="textarea" rows="4" v-model="skuInfo.skuDesc"></el-input>
  </el-form-item>
  <el-form-item label="平台属性">
    <el-form :inline="true" ref="form" label-width="80px">
      <el-form-item :label="attr.attrName" v-for="(attr,index) in attrInfoList" :key="attr.id">
        <el-select placeholder="请选择" v-model="attr.attrIdAndValueId">
          <el-option :label="attrValue.valueName" :value="`${attr.id}:${attrValue.id}`" v-for="(attrValue,index) in attr.attrValueList" :key="attrValue.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-form-item>
  <el-form-item label="销售属性">
    <el-form :inline="true" ref="form" label-width="80px">
      <el-form-item :label="saleAttr.saleAttrName" v-for="(saleAttr,index) in spuSaleAttrList" :key="saleAttr.id">
        <el-select placeholder="请选择" v-model="saleAttr.attrIdAndValueId">
          <el-option :label="saleAttrValue.saleAttrValueName" :value="`${saleAttr.id}:${saleAttrValue.id}`" v-for="(saleAttrValue,index) in saleAttr.spuSaleAttrValueList" :key="saleAttrValue.id"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-form-item>
  <el-form-item label="图片列表">
    <el-table style="width: 100%" border :data="spuImageList"  @selection-change="handleSelectionChange">
      <el-table-column type="selection" prop="prop" width="80">
      </el-table-column>
      <el-table-column prop="prop" label="图片" width="width">
        <template slot-scope="{row,$index}">
          <img :src="row.imgUrl" style="width:100px;height:100px">
        </template>
      </el-table-column>
      <el-table-column prop="imgName" label="名称" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="操作" width="width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" v-if="row.isDefault==0" @click="changeDefault(row)">设置默认</el-button>
          <el-button v-else>默认</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="save">保存</el-button>
    <el-button @click="cancel">取消</el-button>
  </el-form-item>
</el-form>
```



# 47)获取添加SKU的数据

进入sku添加/修改页面需要获取一些必要的数据，比如平台售卖属性，spu售卖属性，spu图片

http://localhost:9529/dev-api/admin/product/spuImageList/5704
http://localhost:9529/dev-api/admin/product/spuSaleAttrList/5704
http://localhost:9529/dev-api/admin/product/attrInfoList/1/1/1

点击添加按钮，切换页面场景，显示sku添加/修改页面

```html
<hint-button
             type="success"
             icon="el-icon-plus"
             size="mini"
             title="添加sku"
             @click="addSku(row)"
></hint-button>

<SkuForm
				v-show="scene == 2"
				ref="sku"
				@changeScenes="changeScenes"
></SkuForm>
```
> 使用ref属性获取SkuForm实例，并调用里面的获取数据的方法

```js
//添加SKU按钮的回调
addSku(row) {
  //切换场景为2
  this.scene = 2;
  //父组件调用子组件的方法，让子组件发请求------三个请求
  this.$refs.sku.getData(this.category1Id, this.category2Id, row);
},
```

```js
//获取SkuForm数据
async getData(category1Id, category2Id, spu) {
  //收集父组件给予的数据
  this.skuInfo.category3Id = spu.category3Id;
  this.skuInfo.spuId = spu.id;
  this.skuInfo.tmId = spu.tmId;
  this.spu = spu;
  //获取图片的数据
  let result = await this.$API.spu.reqSpuImageLIst(spu.id);
  if (result.code == 200) {
    let list = result.data;
    list.forEach(item=>{
      item.isDefault = 0;
    });
    this.spuImageList = list;
  }
  //获取销售属性的数据
  let result1 = await this.$API.spu.reqSpuSaleAttrList(spu.id);
  if (result1.code == 200) {
    this.spuSaleAttrList = result1.data;
  }
  //获取平台属性的数据
  let result2 = await this.$API.spu.reqAttrInfoList(
    category1Id,
    category2Id,
    spu.category3Id
  );
  if (result2.code == 200) {
    this.attrInfoList = result2.data;
  }
},
```




# 48)SkuForm数据的展示与收集 

```js
data() {
  return {
    //存储图片的信息
    spuImageList: [],
    //存储销售是属性
    spuSaleAttrList: [],
    //存储平台属性的数据
    attrInfoList: [],
    //收集sku数据的字段
    skuInfo: {
      //第一类收集的数据：父组件给的数据
      category3Id: 0,
      spuId: 0,
      tmId: 0,
      //第二类：需要通过数据双向绑定v-model收集
      skuName: "",
      price: 0,
      weight: "",
      skuDesc: "",
      //第三类：需要自己书写代码
      //默认图片
      skuDefaultImg: "",
      //收集图片的字段
      skuImageList: [
        // {
        //   id: 0,
        //   imgName: "string",
        //   imgUrl: "string",
        //   isDefault: "string",
        //   skuId: 0,
        //   spuImgId: 0,
        // },
      ],
      //平台属性
      skuAttrValueList: [
        // {
        //   attrId: 0,
        //   valueId: 0,
        // },
      ],
      //销售属性
      skuSaleAttrValueList: [
        // {
        //   id: 0,
        //   saleAttrId: 0,
        //   saleAttrName: "string",
        //   saleAttrValueId: 0,
        //   saleAttrValueName: "string",
        //   skuId: 0,
        //   spuId: 0,
        // },
      ],


    },
    spu:{},
    //收集图片的数据字段:但是需要注意，收集的数据目前缺少isDefault字段，将来提交给服务器数据的时候，需要整理参数
    imageList:[]
  };
},
```



# 49)完成图片的展示与收集

```html
<el-form-item label="图片列表">
  <el-table style="width: 100%" border :data="spuImageList"  @selection-change="handleSelectionChange">
    <el-table-column type="selection" prop="prop" width="80">
    </el-table-column>
    <el-table-column prop="prop" label="图片" width="width">
      <template slot-scope="{row,$index}">
        <img :src="row.imgUrl" style="width:100px;height:100px">
      </template>
    </el-table-column>
    <el-table-column prop="imgName" label="名称" width="width">
    </el-table-column>
    <el-table-column prop="prop" label="操作" width="width">
      <template slot-scope="{row,$index}">
        <el-button type="primary" v-if="row.isDefault==0" @click="changeDefault(row)">设置默认</el-button>
        <el-button v-else>默认</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-form-item>
```

| 事件名           | 说明                                         | 参数                                                         |
| ---------------- | -------------------------------------------- | ------------------------------------------------------------ |
| select           | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row                                               |
| select-all       | 当用户手动勾选全选 Checkbox 时触发的事件     | selection(数组，数组里面存放row对象，会将选中的行的row放进去) |
| selection-change | 当选择项发生变化时会触发该事件               | selection                                                    |

```js
//table表格复选框按钮的事件
handleSelectionChange(params) {
  //获取到用户选中图片的信息数据，但是需要注意，当前收集的数据当中，缺少isDefault字段
  this.imageList = params;
},
  
//排他操作
changeDefault(row) {
    //图片列表的数据的isDefault字段变为 0
    this.spuImageList.forEach(item => {
      item.isDefault = 0;
    });
    //点击的那个图片的数据变为1
    row.isDefault = 1;
    //收集默认图片的地址
    this.skuInfo.skuDefaultImg = row.imgUrl;
  },
```



# 50)完成SkuForm保存的操作

> 使用自定义事件，点击取消按钮，通知父组件切换场景。
>
> ```js
> cancel() {
>   //自定义事件，让父组件切换场景0
>   this.$emit('changeScenes', 0);
>   //清除数据
>   Object.assign(this._data, this.$options.data());
> },
> ```

## 数据回显问题

> 切换页面前要清除当前页面数据，以防回到页面后还是之前的数据
>
> `Object.assign(this._data, this.$options.data());`
>
> - Object.assign(sourceObj,targetObj...)
> - 对象浅拷贝，会将后面targetObj的属性赋值给sourceObj。重复属性则覆盖，没有则添加
>
> - this._data，vc身上的data数据对象
> - this.\$options，vc的配置对象，export default {}的{}就是​\$options配置对象，里面配置了data()方法。
> - 调用data()方法会返回一个初始化的对象

## 整理数据并发送保存请求

```js
//保存按钮的事件
async save() {
  //整理参数
  //整理平台属性
  const { attrInfoList, skuInfo, spuSaleAttrList, imageList } = this;
  //整理平台属的数据
  skuInfo.skuAttrValueList = attrInfoList.reduce((prev, item) => {
    if (item.attrIdAndValueId) {
      const [attrId, valueId] = item.attrIdAndValueId.split(':');
      prev.push({ attrId, valueId });
    }
    return prev;
  }, []);
  //整理销售属性
  skuInfo.skuSaleAttrValueList = spuSaleAttrList.reduce((prev, item) => {
    if (item.attrIdAndValueId) {
      const [saleAttrId, saleAttrValueId] =
            item.attrIdAndValueId.split(':');
      prev.push({ saleAttrId, saleAttrValueId });
    }
    return prev;
  }, []);
  //整理图片的数据
  skuInfo.skuImageList = imageList.map(item => {
    return {
      imgName: item.imgName,
      imgUrl: item.imgUrl,
      isDefault: item.isDefault,
      spuImgId: item.id,
    };
  });
  //发请求
  let result = await this.$API.spu.reqAddSku(skuInfo);
  if (result.code == 200) {
    this.$message({ type: 'success', message: '添加SKU成功' });
    this.$emit('changeScenes', 0);
  }
},
```



> **`split()`** 方法使用指定的分隔符字符串将一个[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

> **`reduce(callbackFn[,initialValue])`** 方法对数组中的每个元素按序执行一个由您提供的 **reducer** 函数，每一次运行 **reducer** 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
>
> 参数：
>
> `callbackFn`
>
> 一个 “reducer” 函数，包含四个参数：
>
> - `previousValue`：上一次调用 `callbackFn` 时的返回值。在第一次调用时，若指定了初始值 `initialValue`，其值则为 `initialValue`，否则为数组索引为 0 的元素 `array[0]`。
> - `currentValue`：数组中正在处理的元素。在第一次调用时，若指定了初始值 `initialValue`，其值则为数组索引为 0 的元素 `array[0]`，否则为 `array[1]`。
> - `currentIndex`：数组中正在处理的元素的索引。若指定了初始值 `initialValue`，则起始索引号为 0，否则从索引 1 起始。
> - `array`：用于遍历的数组。
>
> `initialValue` 可选
>
> 作为第一次调用 `callback` 函数时参数 *previousValue* 的值。若指定了初始值 `initialValue`，则 `currentValue` 则将使用数组第一个元素；否则 `previousValue` 将使用数组第一个元素，而 `currentValue` 将使用数组第二个元素。

> **`map()`** 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
>
> ```js
> var new_array = arr.map(function callback(currentValue[, index[, array]]) {
>  // Return element for new_array
> }[, thisArg])
> ```
>
> ### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#参数)
>
> - `callback`
>
>   生成新数组元素的函数，使用三个参数：`currentValue``callback` 数组中正在处理的当前元素。`index`可选`callback` 数组中正在处理的当前元素的索引。`array`可选`map` 方法调用的数组。
>
> - `thisArg`可选
>
>   执行 `callback` 函数时值被用作`this`。
>
> ### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#返回值)
>
> 一个由原数组每个元素执行回调函数的结果组成的新数组。



# 51)完成SKU列表的展示

使用dialog+table实现

```html
<!-- before-close	关闭前的回调，会暂停 Dialog 的关闭	类型是一个函数：function(done)，done 用于关闭 Dialog	 -->

<el-dialog
           :title="`${spu.spuName}的sku列表`"
           :visible.sync="dialogTableVisible"
           :before-close="close"
           >
  <!-- table展示sku列表-->
  <el-table :data="skuList" style="width: 100%" border v-loading="loading">
    <el-table-column prop="skuName" label="名称" width="width">
    </el-table-column>
    <el-table-column prop="price" label="价格" width="width">
    </el-table-column>
    <el-table-column prop="weight" label="重量" width="width">
    </el-table-column>
    <el-table-column label="默认图片" width="width">
      <template slot-scope="{ row, $index }">
        <img
             :src="row.skuDefaultImg"
             alt=""
             style="width: 100px; height: 100px"
             />
      </template>
    </el-table-column>
  </el-table>
</el-dialog>
```



```js
//查看SKU的按钮的回调
async handler(spu) {
  //点击这个按钮的时候，对话框可见的
  this.dialogTableVisible = true;
  //保存spu信息
  this.spu = spu;
  //获取sku列表的数据进行展示
  let result = await this.$API.spu.reqSkuList(spu.id);
  if (result.code == 200) {
    this.skuList = result.data;
    //loading隐藏
    this.loading = false;
  }
},
  
//关闭对话框的回调
close(done) {
    //loading属性再次变为真
    this.loading = true;
    //清除sku列表的数据
    this.skuList = [];
    //管理对话框
    done();
  },
```



# 52)完成查看SKU列表的loading效果

----loading效果目前只会展示一次
-----快速切换查看sku会发现上一次的数据会显示

## Loading 加载

> Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 DOM 中的 body 上。
>
> 如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 `$loading`，它的调用方式为：`this.$loading(options)`，同样会返回一个 Loading 实例。
>
> 本项目使用的是自定义指令`v-loading`，v-loading="loading"

# 58)完成SKU模块数据的展示

```html
<!-- 表格 -->
<el-table style="width: 100%" border :data="records">
  <el-table-column
                   type="index"
                   label="序号"
                   width="80"
                   align="center"
                   ></el-table-column>
  <el-table-column
                   prop="skuName"
                   label="名称"
                   width="width"
                   ></el-table-column>
  <el-table-column
                   prop="skuDesc"
                   label="描述"
                   width="width"
                   ></el-table-column>
  <el-table-column label="默认图片" width="110">
    <template slot-scope="{ row, $index }">
      <img
           :src="row.skuDefaultImg"
           alt=""
           style="width: 80px; height: 80px"
           />
    </template>
  </el-table-column>
  <el-table-column prop="weight" label="重量" width="80"></el-table-column>
  <el-table-column prop="price" label="价格" width="80"></el-table-column>
  <el-table-column prop="prop" label="操作" width="width">
    <template slot-scope="{ row, $index }">
      <el-button
                 type="success"
                 icon="el-icon-top"
                 size="mini"
                 v-if="row.isSale == 0"
                 @click="sale(row)"
                 ></el-button>
      <el-button
                 type="success"
                 icon="el-icon-bottom"
                 size="mini"
                 v-else
                 @click="cancel(row)"
                 ></el-button>
      <el-button
                 type="primary"
                 icon="el-icon-edit"
                 size="mini"
                 @click="edit"
                 ></el-button>
      <el-button
                 type="info"
                 icon="el-icon-info"
                 size="mini"
                 @click="getSkuInfo(row)"
                 ></el-button>
      <el-button
                 type="danger"
                 icon="el-icon-delete"
                 size="mini"
                 ></el-button>
    </template>
  </el-table-column>
</el-table>
<!-- 分页          -->
<el-pagination
               @size-change="handleSizeChange"
               @current-change="getSkuList"
               style="text-align: center"
               :current-page="page"
               :page-sizes="[3, 5, 10]"
               :page-size="limit"
               layout="prev, pager, next, jumper,->,sizes,total"
               :total="total"
               >
</el-pagination>
```



```js
//组件挂载完毕
mounted() {
			//获取sku列表的方法
			this.getSkuList();
		},

//获取sku列表数据的方法
async getSkuList(pages = 1) {
  this.page = pages;
  //解构出默认的参数
  const { page, limit } = this;
  let result = await this.$API.sku.reqSkuList(page, limit);
  if (result.code == 200) {
    this.total = result.data.total;
    this.records = result.data.records;
  }
},

// 每页显示条目个数改变的回调
handleSizeChange(limit) {
    //修改参数
    this.limit = limit;
    this.getSkuList();
  },
```



# 59)完成SKU的上架与下架操作

```html
<el-button
           type="success"
           icon="el-icon-top"
           size="mini"
           v-if="row.isSale == 0"
           @click="sale(row)"
           ></el-button>
<el-button
           type="success"
           icon="el-icon-bottom"
           size="mini"
           v-else
           @click="cancel(row)"
           ></el-button>
```

```js
//上架
async sale(row) {
  let result = await this.$API.sku.reqSale(row.id);
  if (result.code == 200) {
    row.isSale = 1;
    this.$message({ type: 'success', message: '上架成功' });
  }
},

  //下架
async cancel(row) {
    let result = await this.$API.sku.reqCancel(row.id);
    if (result.code == 200) {
      row.isSale = 0;
      this.$message({ type: 'success', message: '下架成功' });
    }
  },
```





# 60)完成SKU查看详情业务

```html
<!-- 抽屉效果 -->
<el-drawer :visible.sync="show" :show-close="false" size="50%">
  <el-row>
    <el-col :span="5">名称</el-col>
    <el-col :span="16">{{ skuInfo.skuName }}</el-col>
  </el-row>
  <el-row>
    <el-col :span="5">描述</el-col>
    <el-col :span="16">{{ skuInfo.skuDesc }}</el-col>
  </el-row>
  <el-row>
    <el-col :span="5">价格</el-col>
    <el-col :span="16">{{ skuInfo.price }}元</el-col>
  </el-row>
  <el-row>
    <el-col :span="5">平台属性</el-col>
    <el-col :span="16">
      <template>
        <el-tag
                type="success"
                v-for="(attr, index) in skuInfo.skuAttrValueList"
                :key="attr.id"
                style="margin-right: 10px"
                >{{ attr.attrId }}-{{ attr.valueId }}</el-tag
          >
      </template>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="5">商品图片</el-col>
    <el-col :span="16">
      <el-carousel height="150px">
        <el-carousel-item
                          v-for="item in skuInfo.skuImageList"
                          :key="item.id"
                          >
          <img :src="item.imgUrl" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</el-drawer>
```

```js
//获取SKU详情的方法
async getSkuInfo(sku) {
  //展示抽屉
  this.show = true;
  //获取SKU数据
  let result = await this.$API.sku.reqSkuById(sku.id);
  if (result.code == 200) {
    this.skuInfo = result.data;
  }
},
```



## el-drawer抽屉

> 需要设置 `visible` 属性，它的**类型**是 `boolean`,当为 **true** 时显示 Drawer。Drawer 分为两个部分：`title` 和 `body`，`title` 需要具名为 **title** 的 `slot`, 也可以通过 `title` 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 `direction`
>
> 
>
> 默认点击关闭按钮或者点击抽屉以外的内容就会关闭抽屉



| 参数                  | 说明                                                         | 类型                                 | 可选值                               | 默认值 |
| --------------------- | ------------------------------------------------------------ | ------------------------------------ | ------------------------------------ | ------ |
| before-close          | 关闭前的回调，会暂停 Drawer 的关闭                           | function(done)，done 用于关闭 Drawer | —                                    | —      |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer                             | boolean                              | —                                    | true   |
| destroy-on-close      | 控制是否在关闭 Drawer 之后将子元素全部销毁                   | boolean                              | -                                    | false  |
| modal                 | 是否需要遮罩层                                               | boolean                              | —                                    | true   |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上 | boolean                              | —                                    | true   |
| direction             | Drawer 打开的方向                                            | Direction                            | rtl (right to left)/ ltr / ttb / btt | rtl    |
| show-close            | 是否显示关闭按钮                                             | boolean                              | —                                    | true   |
| size                  | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释 | number / string                      | -                                    | '30%'  |
| title                 | Drawer 的标题，也可通过具名 slot （见下表）传入              | string                               | —                                    | —      |
| visible               | 是否显示 Drawer，支持 .sync 修饰符                           | boolean                              | —                                    | false  |



## Layout 布局

### el-row

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | —      |
| tag     | 自定义元素标签                        | string | *                                           | div    |

### el-col

| 参数   | 说明               | 类型   | 可选值 | 默认值 |
| ------ | ------------------ | ------ | ------ | ------ |
| span   | 栅格占据的列数     | number | —      | 24     |
| offset | 栅格左侧的间隔格数 | number | —      | 0      |



## el-tag标签

| 参数     | 说明                  | 类型    | 可选值                      | 默认值 |
| -------- | --------------------- | ------- | --------------------------- | ------ |
| type     | 类型                  | string  | success/info/warning/danger | —      |
| closable | 是否可关闭            | boolean | —                           | false  |
| color    | 背景色                | string  | —                           | —      |
| size     | 尺寸                  | string  | medium / small / mini       | —      |
| effect   | 主题                  | string  | dark / light / plain        | light  |
| @click   | 点击 Tag 时触发的事件 |         |                             |        |
| @close   | 关闭 Tag 时触发的事件 |         |                             |        |



## el-carousel轮播图



# 61)深度选择器

## scoped作用

> 只能作用于当前组件

```html
<template>
  <div class="login-container">
    <el-form
             ref="loginForm"
             :model="loginForm"
             :rules="loginRules"
             class="login-form"
             auto-complete="on"
             label-position="left"
             >
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
	$bg: #2d3a4b;
	$dark_gray: #889aa4;
	$light_gray: #eee;

	.login-container {
		min-height: 100%;
		width: 100%;
		overflow: hidden;
		background: url(~@/assets/Login.jpeg);
		background-size: 100% 100%;
		}
</style>
```

> 1.style标签加上scoped，为组件内 CSS 指定作用域，编译的时候 `.login-container` 会被编译成类似 `.login-container[data-v-37dfd6fc]`。
>
> 使用这个css样式的标签会添加上这个属性，然后Vue通过属性选择器，给需要的元素添加上样式。
>
> ```html
> <div data-v-37dfd6fc class="login-container">
> </div>
> ```
>
> 2.并且会给当前组件的子组件（el-form）的根节点（form）上添加上相同的属性选择器
>
> ```html
> <div data-v-37dfd6fc class="login-container">
>   <form data-v-37dfd6fc="" class="el-form login-form el-form--label-left" auto-complete="on">
>     <div data-v-37dfd6fc="" class="title-container">
>       <h3 data-v-37dfd6fc="" class="title">登录</h3>
>     </div>
>   </form>
> </div>
> ```

想要父组件中的样式作用到子组件上有两种方式：

1. 去掉scoped
2. 保留scoped，使用深度选择器

## 深度选择器

>\>>> 一般用于原生CSS

> /deep/ 一般用于less

> ::v-deep 一般用户scss

```html
<style scoped>
	.el-row .el-col-5 {
		font-size: 18px;
		text-align: right;
	}
	.el-col {
		margin: 10px 10px;
	}

	>>> .el-carousel__button {
		width: 10px;
		height: 10px;
		background: red;
		border-radius: 50%;
	}
</style>
```

> 加上深度选择器后，`>>> .el-carousel__button`编译成了`[data-v-29dbc514] .el-carousel__button`，属性选择器的属性在前面就失效了

```css
[data-v-29dbc514] .el-carousel__button {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}
```



# 62)Home主页数据可视化

主页分为上中下三个部分，所以就拆分成三个组件。

```html
<div>
  <Card></Card>
  <Sale></Sale>
  <Observe></Observe>
</div>
```

## 头部Card

> 头部是四个el-card，显示不同的数据。封装成Card组件
>
> 利用ElementUI的layout布局 见60）分成四个部分，每个部分是一个el-card
>
> el-card里面的内容使用子组件Detail封装，方便利用插槽显示数据和结构
>
> ```html
> <el-row :gutter="10">
>     <el-col :span="6">
>       <el-card>
>         <!-- 第一个card -->
>         <Detail
>           title="总销售额"
>           count="¥ 126560">
>         </Detail>
>       </el-card>
>     </el-col>
>     <el-col :span="6">
>       <el-card>
>         <!-- 第二个card -->
>         <Detail
>           title="访问量"
>           count="88460" >
>         </Detail>
>       </el-card>
>     </el-col>
>     <el-col :span="6">
>       <el-card>
>         <!-- 第三个card -->
>         <Detail title="支付笔数" count="88460">
>         </Detail>
>       </el-card>
>     </el-col>
>     <el-col :span="6">
>       <el-card>
>         <!-- 第四个card -->
>         <Detail
>           title="运营活动效果"
>           count="78%" >
>         </Detail>
>       </el-card>
>     </el-col>
>   </el-row>
> ```
>
> 



# 63)echarts异步展示数据


1:初始化echarts实例的第二个参数可以设置主题颜色
2：echart如果想异步展示数据，当服务器的数据返回以后echarts实例需要再次调用setOptions方法重新设置配置对象，
将配置对象的数据替换为服务器的数据





# 64)echarts在Vue中使用

1:准备一个容器【宽度高度】
2：引入echarts核心库
3：初始化echarts实例，与初始化图表展示的数据









# 65)v-chart使用





# 66)权限管理的介绍

权限、角色等等业务逻辑


角色:一家企业而言：BOSS、运维、销售、程序员

权限:超级管理员（BOSS），是有权利操作整个项目的所有的模块
     硅谷321（新媒体），只能首页、商品管理者一部分菜单数据
admin：超级管理员-----boss







# 67:权限管理业务串讲

权限管理：用户管理、角色管理、菜单管理
由于用户管理、角色管理、菜单管理：对于获取数据、展示数据、收集数据相对而言，简单很多，因此进行相应的串讲。
把精力放到如何实现权限业务。





# 68:菜单权限的业务分析

超级管理:首页、权限模块、商品模块
硅谷321：首页
不同的用户、不同角色的任务，项目当中所能操作的、看见的菜单是不一样的。


如何实现菜单的权限？不同的用户所能操作|查看菜单不一样的？

起始不同的用户（角色），登录的时候会向服务器发请求，服务器会把用户相应的菜单的权限的信息，返回给我们
我们可以根据服务器返回的数据（信息），可以动态的设置路由，可以根据不同的用户展示不同的菜单。



菜单权限:当用户获取用户信息的时候，服务器会把相应的用户拥有菜单的权限信息返回，需要根据用户身份对比出，当前这个用户需要展示哪些菜单

## el-tree

```html
<el-tree 
         style="margin: 20px 0"
         ref="tree"
         :data="allPermissions" 
         node-key="id"  
         show-checkbox 
         default-expand-all
         :props="defaultProps" 
         />
```

```js
defaultProps: {
  children: 'children',
    label: 'name'
},
```



| 参数               | 说明                                                 | 类型                         | 可选值 | 默认值 |
| ------------------ | ---------------------------------------------------- | ---------------------------- | ------ | ------ |
| data               | 展示数据                                             | array                        | —      | —      |
| empty-text         | 内容为空的时候展示的文本                             | String                       | —      | —      |
| node-key           | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String                       | —      | —      |
| show-checkbox      | 节点是否可被选择                                     | boolean                      | —      | false  |
| default-expand-all | 是否默认展开所有节点                                 | boolean                      | —      | false  |
|                    |                                                      |                              |        |        |
| props              | 配置选项，具体看下表                                 | object                       | —      | —      |
| label              | 指定节点标签为节点对象的某个属性值                   | string, function(data, node) | —      | —      |
| children           | 指定子树为节点对象的某个属性值                       | string                       | —      | —      |

方法：

> 获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置`node-key`。

| 方法名         | 说明                                                         | 参数                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| getCheckedKeys | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则`仅返回被选中的叶子节点的 keys`，默认值为 `false` |
| setCheckedKeys | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false` |
|                |                                                              |                                                              |



# 69)完成菜单权限

当用户登录的时候，服务器端会返回相应角色的菜单权限的信息
只不过返回信息是一个数组routes-->['sku','spu',product']

> 路由分为常量路由和异步路由：
>
> 常量路由:就是不关用户是什么角色，都可以看见的路由*
>
> * 什么角色（超级管理员，普通员工）：登录、404、首页
>
> * ```js
>   //常量路由:就是不关用户是什么角色，都可以看见的路由
>   //什么角色（超级管理员，普通员工）：登录、404、首页
>   export const constantRoutes = [
>   	// 登录页面路由
>   	{
>   		path: '/login',
>   		component: () => import('@/views/login/index'),
>   		hidden: true,
>   	},
>   
>   	// 错误页面路由
>   	{
>   		path: '/404',
>   		component: () => import('@/views/404'),
>   		hidden: true,
>   	},
>   
>   	// 首页路由
>   	{
>   		path: '/',
>   		component: Layout,
>   		redirect: '/dashboard',
>   		children: [
>   			{
>   				path: 'dashboard',
>   				name: 'Dashboard',
>   				component: () => import('@/views/dashboard/index'),
>   				meta: { title: '首页', icon: 'dashboard' },
>   			},
>   		],
>   	},
>   
>   	// 404 page must be placed at the end !!!
>   ];
>   ```
>
>   
>
> 异步路由:不同的用户（角色），需要过滤筛选出的路由，称之为异步路由*
>
> * 有的用户可以看见测试管理、有的看不见：商品管理、权限管理、测试管理
>
> * ```js
>   //异步路由:不同的用户（角色），需要过滤筛选出的路由，称之为异步路由
>   //有的用户可以看见测试管理、有的看不见
>   export const asyncRoutes = [
>   	// 权限管理模块路由
>   	{
>   		name: 'Acl',
>   		path: '/acl',
>   		component: Layout,
>   		redirect: '/acl/user/list',
>   		meta: {
>   			title: '权限管理',
>   			icon: 'el-icon-lock',
>   		},
>   		children: [
>   			{
>   				name: 'User',
>   				path: 'user/list',
>   				component: () => import('@/views/acl/user/list'),
>   				meta: {
>   					title: '用户管理',
>   				},
>   			},
>   			{
>   				name: 'Role',
>   				path: 'role/list',
>   				component: () => import('@/views/acl/role/list'),
>   				meta: {
>   					title: '角色管理',
>   				},
>   			},
>   			{
>   				name: 'RoleAuth',
>   				path: 'role/auth/:id',
>   				component: () => import('@/views/acl/role/roleAuth'),
>   				meta: {
>   					activeMenu: '/acl/role/list',
>   					title: '角色授权',
>   				},
>   				hidden: true,
>   			},
>   			{
>   				name: 'Permission',
>   				path: 'permission/list',
>   				component: () => import('@/views/acl/permission/list'),
>   				meta: {
>   					title: '菜单管理',
>   				},
>   			},
>   		],
>   	},
>   
>   	// 商品管理路由
>   	{
>   		path: '/product',
>   		component: Layout,
>   		name: 'Product',
>   		meta: { title: '商品管理', icon: 'el-icon-goods' },
>   		children: [
>   			{
>   				path: 'trademark',
>   				name: 'TradeMark',
>   				component: () => import('@/views/product/TradeMark/index'),
>   				meta: { title: '品牌管理' },
>   			},
>   			{
>   				path: 'attr',
>   				name: 'Attr',
>   				component: () => import('@/views/product/Attr/index'),
>   				meta: { title: '平台售卖属性' },
>   			},
>   			{
>   				path: 'spu',
>   				name: 'Spu',
>   				component: () => import('@/views/product/Spu/index'),
>   				meta: { title: 'Spu管理' },
>   			},
>   			{
>   				path: 'sku',
>   				name: 'Sku',
>   				component: () => import('@/views/product/Sku/index'),
>   				meta: { title: 'Sku管理' },
>   			},
>   		],
>   	},
>   
>   	// 测试模块路由
>   	{
>   		path: '/test',
>   		name: 'Test',
>   		component: () => import('../../tests/test.vue'),
>   		meta: { title: '测试ElementUI组件' },
>   	},
>   ];
>   ```
>
>   
>
> 任意路由：当路由出现错误时重定向到404路由*
>
> ```js
> // 任意路由：当路由出现错误时重定向到404路由
> export const anyRoute = { path: '*', redirect: '/404', hidden: true };
> ```
>
> 



> Vuex获取用户信息中routes保存了用户的菜单权限，通过对比异步路由与用户的菜单，获取用户需要展示的异步路由是什么。
>
> ```js
> //定义一个函数：两个数组进行对比，对比出当前用户到底显示哪些异步路由
> const computedAsyncRoutes = (asyncRoutes, routes) => {
> 	//过滤出当前用户【超级管理|普通员工】需要展示的异步路由
> 	// Array.filter()过滤数组，返回一个新数组，元素由回调函数返回true的元素组成
> 	return asyncRoutes.filter(item => {
> 		//数组当中没有这个元素返回-1，如果有这个元素则返回索引值
> 		if (routes.indexOf(item.name) !== -1) {
> 			//递归:别忘记还有2、3、4、5、6级路由
> 			if (item.children && item.children.length) {
> 				// 如果子路由匹配上，这添加到最终结果的路由数组里面
> 				item.children = computedAsyncRoutes(item.children, routes);
> 			}
> 			return true;
> 		}
> 	});
> };
> ```
>
> 用户除了异步路由，还要展示常量路由和任意路由，所以需要整合路由。并且使用router.addRoutes方法将计算好的异步路由添加到路由中。
>
> ```js
> // 最终计算出来的异步路由
> SET_RESULTASYNCROUTES: (state, resultAsyncRoutes) => {
>   //vuex保存当前用户的异步路由，注意，一个用户需要展示完整的路由包括：常量、异步、任意路由
>   state.resultAsyncRoutes = resultAsyncRoutes;
>   //计算出当前用户需要展示所有路由
>   //concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
>   state.resultAllRoutes = constantRoutes.concat(resultAsyncRoutes, anyRoute);
>   //给路由器添加新的路由
>   router.addRoutes(resultAsyncRoutes);
> },
> ```
>
> 然后sidebar遍历这些路由
>
> ```html
> <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
> ```
>
> ```js
> routes() {
>       //sliderbar：需要遍历的应该是仓库计算完毕的全部路由
>       return this.$store.state.user.resultAllRputes;
>     },
> ```
>
> 



## 路由重复问题

![image-20220904201134782](C:\Users\Lan\AppData\Roaming\Typora\typora-user-images\image-20220904201134782.png)

> [vue-router] Duplicate named routes definition: { name: “xxx“, path:xxx}

> 原因：使用router.addRoutes添加路由，router中本来就有常量路由，整合之后再添加进去就重复了

> 解决方法：添加路由之前先重置路由
>
> ```js
> // Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
> export function resetRouter() {
> 	const newRouter = createRouter();
> 	router.matcher = newRouter.matcher; // reset router
> }
> ```
>
> 

```js
// 最终计算出来的异步路由
	SET_RESULTASYNCROUTES: (state, resultAsyncRoutes) => {
		//vuex保存当前用户的异步路由，注意，一个用户需要展示完整的路由包括：常量、异步、任意路由
		state.resultAsyncRoutes = resultAsyncRoutes;
		//计算出当前用户需要展示所有路由
		//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
		state.resultAllRoutes = constantRoutes.concat(resultAsyncRoutes, anyRoute);
		//给路由器添加新的路由
		// 添加路由之前先重置路由
		resetRouter();
		router.addRoutes(state.resultAllRoutes);
	},
```

> 或者只添加需要的路由：resultAsyncRoutes
>
> ```js
> router.addRoutes(resultAsyncRoutes);
> ```
>
> 



#  70)按钮权限

 菜单权限：不同的用户（角色），能操作、能观看的菜单是不同的。

 按钮的权限：不同的用户（角色），有的用户的是可见按钮、当然有的用户不可见。

 

 

```js
//只需要使用getCheckedKeys()与getHalfCheckedKeys()合并数组就能获取所有选中的包括父节点
				let ids = [
					...this.$refs.tree.getCheckedKeys(),
					...this.$refs.tree.getHalfCheckedKeys(),
				].join(',');
```











 