webpackJsonp([17],{Nmwz:function(n,a,e){a=n.exports=e("l95E")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},XXr0:function(n,a,e){"use strict";function t(n){e("rzFs")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("lcoF"),i=e("2sCs"),o=e.n(i),l=e("x1ym"),r={mixins:[s.a],data:function(){var n=l.a.required();l.a.number();return{params:{},rules:{name:[n],url:[n],code:[n],disabled:[n]},checkRes:!1}},methods:{getDataInfo:function(n){var a=this,e=this.$api;o.a.all([o.a.post(e.apiInfoGet,{id:n})]).then(o.a.spread(function(n){a.dataInfo=n.body,a.$refs.form.resetFields(),a.loading=!1})).catch(function(n){a.loading=!1})},update:function(){this.updateDataInfo(this.$api.apiInfoUpdate,this.dataInfo,"list")},add:function(n){this.saveDataInfo(n,this.$api.apiInfoSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(a){n.$set(n.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"地址",prop:"url"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.url,callback:function(a){n.$set(n.dataInfo,"url",a)},expression:"dataInfo.url"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"接口代码",prop:"code"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.code,callback:function(a){n.$set(n.dataInfo,"code",a)},expression:"dataInfo.code"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"禁用",prop:"disabled"}},[e("el-radio-group",{model:{value:n.dataInfo.disabled,callback:function(a){n.$set(n.dataInfo,"disabled",a)},expression:"dataInfo.disabled"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("div",{staticClass:"form-footer"},[0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/Info/add",expression:"'/apiManage/Info/add'"}],attrs:{type:"warning"},on:{click:function(a){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/Info/add",expression:"'/apiManage/Info/add'"}],attrs:{type:"primary"},on:{click:function(a){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/Info/edit",expression:"'/apiManage/Info/edit'"}],attrs:{type:"primary"},on:{click:function(a){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},c=[],f={render:d,staticRenderFns:c},p=f,u=e("Z0/y"),m=t,v=u(r,p,!1,m,null,null);a.default=v.exports},rzFs:function(n,a,e){var t=e("Nmwz");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("FIqI")("7e30e2d2",t,!0,{})}});