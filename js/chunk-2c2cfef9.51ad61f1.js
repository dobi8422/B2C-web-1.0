(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c2cfef9"],{"15d7":function(t,e,o){"use strict";o.r(e);var n=o("7a23"),a={class:"d-flex justify-content-around mx-5"},c=Object(n["g"])("div",null,null,-1),s=Object(n["g"])("h2",{class:"text-center mt-3"},"優惠卷",-1),i=Object(n["g"])("div",{class:"d-flex justify-content-end mx-5"},null,-1),l={class:"table mt-4 container"},u=Object(n["g"])("thead",{class:"bg-dark text-light"},[Object(n["g"])("tr",null,[Object(n["g"])("th",{width:"50"},"啟用"),Object(n["g"])("th",{width:"120"},"優惠卷名稱"),Object(n["g"])("th",{width:"60"},"到期日"),Object(n["g"])("th",{width:"60"},"折扣(%)"),Object(n["g"])("th",{width:"60"},"折扣碼"),Object(n["g"])("th",{width:"30"},"編輯")])],-1),d=["onClick","onUpdate:modelValue"],b={class:"d-flex justify-content-center"},p=["onClick"],r=["onClick"],g={class:"modal fade",id:"couponModal",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},j={class:"modal-dialog"},O={class:"modal-content"},m={class:"modal-header bg-dark text-light"},h={class:"modal-title",id:"couponModalLabel"},f=Object(n["g"])("i",{class:"fas fa-gift"},null,-1),C={class:"form-check"},v=Object(n["g"])("label",{class:"form-check-label",for:"is_enabled"},"啟用",-1),x={class:"modal-body"},k={class:"row g-3"},y={class:"form-group col-md-6"},_=Object(n["g"])("label",{for:"title"},"優惠券名稱",-1),w={class:"form-group col-md-6"},P=Object(n["g"])("label",{for:"date"},"到期日",-1),M={class:"form-group col-md-6"},I=Object(n["g"])("label",{for:"percent"},[Object(n["i"])("折扣百分比 "),Object(n["g"])("span",{class:"text-muted"},"(80% -> 輸入 80)")],-1),N={class:"form-group col-md-6"},z=Object(n["g"])("label",{for:"折扣碼"},"折扣碼",-1),L={class:"col-md-12"},U=Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary me-1","data-bs-dismiss":"modal"},"取消",-1),V={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"},R={class:"modal-dialog"},E={class:"modal-content"},S=Object(n["g"])("div",{class:"modal-header bg-dark text-light"},[Object(n["g"])("h5",{class:"modal-title",id:"deleteModalLabel"},[Object(n["g"])("i",{class:"fas fa-trash-alt"}),Object(n["i"])(" 刪除優惠卷")])],-1),J={class:"modal-body row g-3"},A={class:"col-12"},F=Object(n["i"])(" 是否刪除 "),$={class:"text-danger"},q=Object(n["i"])(" 優惠卷 (刪除後將無法恢復)。 "),B={class:"col-12"},D=Object(n["g"])("button",{type:"button",class:"btn btn-outline-secondary me-1","data-bs-dismiss":"modal"},"取消",-1);function G(t,e,o,G,H,K){var Q=Object(n["F"])("Pagination");return Object(n["x"])(),Object(n["f"])("div",null,[Object(n["g"])("div",a,[c,s,Object(n["g"])("button",{class:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#couponModal",onClick:e[0]||(e[0]=function(t){return H.isNew=!0,H.tempCoupon={}})},"新增優惠卷")]),i,Object(n["g"])("table",l,[u,Object(n["g"])("tbody",null,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["E"])(H.coupons,(function(t){return Object(n["x"])(),Object(n["f"])("tr",{key:t.code},[Object(n["g"])("td",null,[Object(n["R"])(Object(n["g"])("input",{class:"form-check-input",onClick:function(e){return H.tempCoupon=Object.assign({},t),K.enableCoupon()},type:"checkbox","onUpdate:modelValue":function(e){return t.is_enabled=e},"true-value":1,"false-value":0,id:"is_enabled"},null,8,d),[[n["L"],t.is_enabled]])]),Object(n["g"])("td",null,Object(n["I"])(t.title),1),Object(n["g"])("td",null,Object(n["I"])(t.due_date),1),Object(n["g"])("td",null,Object(n["I"])(t.percent),1),Object(n["g"])("td",null,Object(n["I"])(t.code),1),Object(n["g"])("td",null,[Object(n["g"])("div",b,[Object(n["g"])("button",{class:"btn btn-outline-primary btn-sm me-1","data-bs-toggle":"modal","data-bs-target":"#couponModal",onClick:function(e){return H.tempCoupon=Object.assign({},t),H.isNew=!1}},"編輯",8,p),Object(n["g"])("button",{class:"btn btn-outline-danger btn-sm","data-bs-toggle":"modal","data-bs-target":"#deleteModal",onClick:function(e){return H.tempCoupon=Object.assign({},t),H.couponId=t.id}},"刪除",8,r)])])])})),128))])]),Object(n["j"])(Q,{pages:H.pagination,onEmitProductPage:K.getCoupons},null,8,["pages","onEmitProductPage"]),Object(n["g"])("div",g,[Object(n["g"])("div",j,[Object(n["g"])("div",O,[Object(n["g"])("div",m,[Object(n["g"])("h5",h,[f,Object(n["i"])(" "+Object(n["I"])(H.isNew?"新增優惠卷":"編輯優惠卷"),1)]),Object(n["g"])("div",C,[v,Object(n["R"])(Object(n["g"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=function(t){return H.tempCoupon.is_enabled=t}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[n["L"],H.tempCoupon.is_enabled]])])]),Object(n["g"])("div",x,[Object(n["g"])("div",k,[Object(n["g"])("div",y,[_,Object(n["R"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=function(t){return H.tempCoupon.title=t})},null,512),[[n["N"],H.tempCoupon.title]])]),Object(n["g"])("div",w,[P,Object(n["R"])(Object(n["g"])("input",{type:"date",class:"form-control",id:"date",placeholder:"請輸入到期日","onUpdate:modelValue":e[3]||(e[3]=function(t){return H.tempCoupon.due_date=t})},null,512),[[n["N"],H.tempCoupon.due_date]])]),Object(n["g"])("div",M,[I,Object(n["R"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"percent",placeholder:"請輸入折扣百分比","onUpdate:modelValue":e[4]||(e[4]=function(t){return H.tempCoupon.percent=t})},null,512),[[n["N"],H.tempCoupon.percent]])]),Object(n["g"])("div",N,[z,Object(n["R"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"折扣碼",placeholder:"請輸入折扣碼","onUpdate:modelValue":e[5]||(e[5]=function(t){return H.tempCoupon.code=t})},null,512),[[n["N"],H.tempCoupon.code]])]),Object(n["g"])("div",L,[U,Object(n["g"])("button",{type:"button",class:"btn btn-primary ms-1","data-bs-dismiss":"modal",onClick:e[6]||(e[6]=function(){return K.updateCoupon&&K.updateCoupon.apply(K,arguments)})},Object(n["I"])(H.isNew?"新增":"編輯"),1)])])])])])]),Object(n["g"])("div",V,[Object(n["g"])("div",R,[Object(n["g"])("div",E,[S,Object(n["g"])("div",J,[Object(n["g"])("div",A,[F,Object(n["g"])("strong",$,Object(n["I"])(H.tempCoupon.title),1),q]),Object(n["g"])("div",B,[D,Object(n["g"])("button",{type:"button",class:"btn btn-danger ms-1","data-bs-dismiss":"modal",onClick:e[7]||(e[7]=function(){return K.deleteCoupon&&K.deleteCoupon.apply(K,arguments)})},"確認刪除")])])])])])])}var H=o("5530"),K=(o("99af"),o("5502")),Q=o("1799"),T={name:"coupon",data:function(){return{coupons:{},pagination:{},tempCoupon:{},isNew:!1,couponId:"",action:""}},components:{Pagination:Q["a"]},methods:Object(H["a"])({updateCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("zxz189","/admin/coupon"),o="post";this.isNew?this.action="新增":(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("zxz189","/admin/coupon/").concat(this.tempCoupon.id),o="put",this.action="編輯"),this.checkCoupon(),this.axios[o](e,{data:this.tempCoupon}).then((function(e){e.data.success?(t.getCoupons(),t.alertMessage("優惠卷".concat(t.action,"成功"))):t.alertMessage("優惠卷".concat(t.action,"失敗"))}))},deleteCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("zxz189","/admin/coupon/").concat(this.couponId);this.axios.delete(e).then((function(e){e.data.success?(t.getCoupons(),t.alertMessage("成功刪除優惠卷：".concat(t.tempCoupon.title))):t.alertMessage("刪除優惠卷失敗")}))},enableCoupon:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("zxz189","/admin/coupon/").concat(this.tempCoupon.id);0===this.tempCoupon.is_enabled?(this.action="啟用",this.tempCoupon.is_enabled=1,this.tempCoupon.is_enable=1):(this.action="停用",this.tempCoupon.is_enabled=0,this.tempCoupon.is_enable=0),this.axios.put(e,{data:this.tempCoupon}).then((function(e){e.data.success?(t.getCoupons(),t.alertMessage("優惠卷".concat(t.action,"成功"))):t.alertMessage("優惠卷".concat(t.action,"失敗"))}))},checkCoupon:function(){var t=this,e=this.coupons.some((function(e){return t.tempCoupon.code===e.code&&t.tempCoupon.id!==e.id}));if(e)throw this.alertMessage("此優惠碼已存在，請更換"),new Error},getCoupons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.tempCoupon={};var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("zxz189","/admin/coupons?page=").concat(e);this.updateLoading(!0),this.axios.get(o).then((function(e){t.coupons=e.data.coupons,t.pagination=e.data.pagination,t.updateLoading(!1)}))}},Object(K["b"])(["updateLoading","alertMessage"])),created:function(){this.getCoupons()}},W=o("6b0d"),X=o.n(W);const Y=X()(T,[["render",G]]);e["default"]=Y},1799:function(t,e,o){"use strict";var n=o("7a23"),a=function(t){return Object(n["A"])("data-v-19c3f988"),t=t(),Object(n["y"])(),t},c={"aria-label":"Page navigation",class:"justify-content-center d-flex"},s={class:"pagination"},i=a((function(){return Object(n["g"])("span",{"aria-hidden":"true"},"«",-1)})),l=[i],u=["onClick"],d=a((function(){return Object(n["g"])("span",{"aria-hidden":"true"},"»",-1)})),b=[d];function p(t,e,o,a,i,d){return Object(n["x"])(),Object(n["f"])("nav",c,[Object(n["g"])("ul",s,[Object(n["g"])("li",{class:Object(n["r"])(["page-item",{disabled:!o.pages.has_pre}])},[Object(n["g"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(n["S"])((function(t){return d.getProductPages(o.pages.current_page-1)}),["prevent"]))},l)],2),(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["E"])(o.pages.total_pages,(function(t){return Object(n["x"])(),Object(n["f"])("li",{class:Object(n["r"])(["page-item",{active:o.pages.current_page===t}]),key:t},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:Object(n["S"])((function(e){return d.getProductPages(t)}),["prevent"])},Object(n["I"])(t),9,u)],2)})),128)),Object(n["g"])("li",{class:Object(n["r"])(["page-item",{disabled:!o.pages.has_next}])},[Object(n["g"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(n["S"])((function(t){return d.getProductPages(o.pages.current_page+1)}),["prevent"]))},b)],2)])])}var r={name:"Pagination",props:["pages"],methods:{getProductPages:function(t){this.$emit("emitProductPage",t)}}},g=(o("41d2"),o("6b0d")),j=o.n(g);const O=j()(r,[["render",p],["__scopeId","data-v-19c3f988"]]);e["a"]=O},"41d2":function(t,e,o){"use strict";o("c33b")},c33b:function(t,e,o){}}]);
//# sourceMappingURL=chunk-2c2cfef9.51ad61f1.js.map