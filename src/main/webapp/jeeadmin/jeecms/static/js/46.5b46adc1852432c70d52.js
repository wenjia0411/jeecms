webpackJsonp([46],{"+GDD":function(n,a,e){var t=e("rVwl");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("8bSs")("540be766",t,!0)},"9Tzf":function(n,a,e){"use strict";function t(n){e("+GDD")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("hRKE"),l=e.n(s),o=e("lcoF"),r=e("2sCs"),i=e.n(r),d=e("P9l9"),c=e("x1ym"),f={mixins:[o.a],data:function(){var n=this,a=c.a.required("此项必填"),e=c.a.number("只能输入数字"),t=c.a.email("请输入正确的邮箱地址"),s=(c.a.validateName("用户名已存在"),c.a.tel("请输入正确的固定电话")),l=c.a.mobile("请输入正确的手机号");return{params:{queryUsername:"",https:""},rules:{username:[a],email:[t],password:[function(){return{validator:function(a,e,t){""===e?t():(""!==n.dataInfo.confirmPassword&&n.$refs.form.validateField("confirmPassword"),t())},trigger:"blur"}}(),a],confirmPassword:[function(){return{validator:function(a,e,t){""===e?t():e!==n.dataInfo.password?t(new Error("前后密码不一致")):t()},trigger:"blur"}}(),a],groupId:[a,e],grain:[a,e],phone:[s],mobile:[l],disabled:[a],rank:[e,function(){return{validator:function(n,a,e){""!=a&&i.a.post(d.a.adminValRank,{id:"",rank:a}).then(function(n){""==a?e():"200"==n.code?n.body.result?e():e(new Error("不能大于自身级别")):e(new Error("服务器响应异常"))})},trigger:"blur"}}()]},memberGroup:[],roles:[],dialogDepartments:!1,parents:[],defaultProps:{label:"name",value:"id",children:"child"},dialogVisible:!1,props:{label:"name",children:"zones",isLeaf:"isChild",id:"id"},channelVisble:!1}},methods:{checkChange:function(n,a,e){this.dataInfo.channelIds=this.$refs.channelTree.getCheckedKeys()},ansyTree:function(n,a){if(0===n.level)return a([{name:"所有栏目",id:"",isChild:!0}]);n.level>0&&i.a.post(this.$api.channelList,{parentId:n.data.id}).then(function(n){var e=[];for(var t in n.body){var s={};s.id=n.body[t].id,s.isChild=!(n.body[t].childCount>0),s.name=n.body[t].name,e.push(s)}return a(e)})},getRoleIds:function(n){},getDataInfo:function(n,a){var e=this,t=this.$api;i.a.all([i.a.post(t.adminGlocalGet,{id:n,https:a}),i.a.post(t.groupList),i.a.post(t.roleList)]).then(i.a.spread(function(n,a,t){e.dataInfo=n.body,e.dataInfo.groupId=1,e.dataInfo.gender=!0,e.dataInfo.allChannels=!1,e.dataInfo.rank=1,e.dataInfo.steps=1,e.memberGroup=a.body,e.roles=t.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},add:function(n){var a={};for(var e in this.dataInfo)a[e]=this.dataInfo[e];a.roleIds=a.roleIds.join(","),a.channelIds=a.channelIds.join(",");for(var t in a)"object"==l()(a[t])&&delete a[t];this.saveDataInfo(n,this.$api.adminGlocalSave,a,"list")}},created:function(){this.getDataInfo(this.id)}},u=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名",prop:"username"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.username,callback:function(a){n.$set(n.dataInfo,"username",a)},expression:"dataInfo.username"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"电子邮箱",prop:"email"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.email,callback:function(a){n.$set(n.dataInfo,"email",a)},expression:"dataInfo.email"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"密码",prop:"password"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.password,callback:function(a){n.$set(n.dataInfo,"password",a)},expression:"dataInfo.password"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"确认密码",prop:"confirmPassword"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.confirmPassword,callback:function(a){n.$set(n.dataInfo,"confirmPassword",a)},expression:"dataInfo.confirmPassword"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组",prop:"groupId"}},[e("el-select",{staticClass:"cms-width",model:{value:n.dataInfo.groupId,callback:function(a){n.$set(n.dataInfo,"groupId",a)},expression:"dataInfo.groupId"}},n._l(n.memberGroup,function(n,a){return e("el-option",{key:a,attrs:{label:n.name,value:n.id}})}))],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"等级",prop:"rank"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.rank,callback:function(a){n.$set(n.dataInfo,"rank",a)},expression:"dataInfo.rank"}}),n._v(" "),e("span",{staticClass:"gray"},[n._v("越大等级越高")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"真实姓名",prop:"realname"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"username"},model:{value:n.dataInfo.userRealName,callback:function(a){n.$set(n.dataInfo,"userRealName",a)},expression:"dataInfo.userRealName"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"性别",prop:"gender"}},[e("el-radio-group",{model:{value:n.dataInfo.gender,callback:function(a){n.$set(n.dataInfo,"gender",a)},expression:"dataInfo.gender"}},[e("el-radio",{attrs:{label:!0}},[n._v("男")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("女")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"受限管理员",prop:"selfAdmin"}},[e("el-radio-group",{model:{value:n.dataInfo.selfAdmin,callback:function(a){n.$set(n.dataInfo,"selfAdmin",a)},expression:"dataInfo.selfAdmin"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1),n._v(" "),e("span",{staticClass:"gray"},[n._v("只能管理自己的数据")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"角色",prop:"roleIds"}},[e("el-checkbox-group",{on:{change:n.getRoleIds},model:{value:n.dataInfo.roleIds,callback:function(a){n.$set(n.dataInfo,"roleIds",a)},expression:"dataInfo.roleIds"}},n._l(n.roles,function(a,t){return e("el-checkbox",{key:t,attrs:{label:a.id}},[n._v(n._s(a.name))])})),n._v(" "),e("span",{staticClass:"gray"},[n._v("功能权限的控制在角色中")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"数据权限"}},[e("el-checkbox",{model:{value:n.dataInfo.allChannels,callback:function(a){n.$set(n.dataInfo,"allChannels",a)},expression:"dataInfo.allChannels"}},[n._v("所有栏目内容权限")]),n._v(" "),e("el-button",{attrs:{disabled:n.dataInfo.allChannels},on:{click:function(a){n.channelVisble=!0}}},[n._v("栏目权限")]),n._v(" "),e("span",{staticClass:"gray"},[n._v("功能权限的控制在角色中")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"审核级别"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.steps,callback:function(a){n.$set(n.dataInfo,"steps",n._n(a))},expression:"dataInfo.steps"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:""}}),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/add",expression:"'/adminGlocal/add'"}],attrs:{type:"warning"},on:{click:function(a){n.add(!0)}}},[n._v("保存并继续添加")]),n._v(" "),e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/add",expression:"'/adminGlocal/add'"}],attrs:{type:"primary"},on:{click:function(a){n.add(!1)}}},[n._v("提交")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1),n._v(" "),e("el-dialog",{staticClass:"dialog",attrs:{title:"选择栏目",visible:n.channelVisble,width:"25%"},on:{"update:visible":function(a){n.channelVisble=a}}},[e("div",{staticClass:"tree-layout"},[e("div",{staticClass:"tree"},[e("el-tree",{ref:"channelTree",attrs:{load:n.ansyTree,lazy:"",props:n.props,"default-expand-all":!0,"default-expanded-keys":[""],"show-checkbox":"",indent:16,"node-key":"id"},on:{"check-change":n.checkChange}})],1)]),n._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){n.channelVisble=!1}}},[n._v("取消")]),n._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(a){n.channelVisble=!1}}},[n._v("选择")])],1)])],1)},m=[],p={render:u,staticRenderFns:m},v=p,b=e("8AGX"),h=t,I=b(f,v,!1,h,null,null);a.default=I.exports},rVwl:function(n,a,e){a=n.exports=e("l95E")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});