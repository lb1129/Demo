(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{528:function(e,a,t){"use strict";t(539);var n=t(540),c=t.n(n),r=t(525),i=t(2),l=t.n(i),o=t(529),s=t.n(o);a.a=function(e){var a=Object(r.a)({},e),t=a.className,n=void 0===t?null:t;return l.a.createElement(c.a,Object.assign({size:"lg"},a,{className:n?"".concat(s.a.wrapper," ").concat(n):s.a.wrapper}))}},529:function(e,a,t){e.exports={wrapper:"index_wrapper__g-gQ9"}},751:function(e,a,t){e.exports={wrapper:"index_wrapper__3g0AU"}},793:function(e,a,t){"use strict";t.r(a);t(737);var n=t(740),c=t.n(n),r=(t(542),t(543)),i=t.n(r),l=(t(527),t(531)),o=t.n(l),s=(t(595),t(598)),u=t.n(s),p=(t(222),t(115)),f=t.n(p),m=t(89),h=t(84),d=t(85),g=t(87),b=t(86),v=t(88),j=t(2),O=t.n(j),w=t(553),E=t(528),L=(t(741),t(747)),x=t.n(L),y=t(541),k=t(65),C=t(50),F=t(159),N=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(c)))).onChange=function(e,a,n){var c=t.props,r=c.files,i=c.maxLength,l=c.changeHandle,o=e.length;if(!(o>i)){if("add"===a){var s=e[o-1],u=new FormData;u.append("file",s.file),Object(k.a)({url:C.a.fileUpload,data:u,config:{baseURL:F.c}}).then(function(e){l(Object(y.a)(t.props.files).concat([Object(m.a)({},e,{url:s.url,fileUrl:e.url})]))}).catch(function(e){})}"remove"===a&&Object(k.a)({url:C.a.fileDelete,data:{url:r[n].fileUrl},config:{baseURL:F.c}}).then(function(e){var a=Object(y.a)(t.props.files);a.splice(n,1),l(a)}).catch(function(e){})}},t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return O.a.createElement(x.a,Object.assign({multiple:!0,accept:"image/*,video/*"},this.props,{onChange:this.onChange}))}}]),a}(j.Component);N.defaultProps={maxLength:10,changeHandle:function(){}};var U=t(751),_=t.n(U);a.default=Object(w.a)()(function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(c)))).state={imgList:[],maxLength:10},t.saveFeedback=function(){t.props.form.validateFields({force:!0},function(e,a){e||Object(k.a)({url:C.a.saveFeedback,data:Object(m.a)({},a,{imgList:t.state.imgList.map(function(e){return e.fileName})})}).then(function(e){f.a.success("\u63d0\u4ea4\u6210\u529f!",1);var a=setTimeout(function(){clearTimeout(a),a=null,t.props.history.goBack()},1e3)}).catch(function(e){})})},t}return Object(v.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.imgList,n=a.maxLength,r=t.length,l=this.props.form.getFieldProps;return O.a.createElement("div",{className:_.a.wrapper},O.a.createElement(o.a,null,O.a.createElement(u.a,Object.assign({},l("ffeedtext",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u53cd\u9988\u5185\u5bb9"}]}),{rows:5,count:100,placeholder:"\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9"}))),O.a.createElement(o.a,{renderHeader:function(){return O.a.createElement("div",{className:"titleFontSizeC"},"\u62cd\u7167\u4e0a\u4f20",O.a.createElement("span",{className:"textFontSizeC shallowGreyColor"},"\uff08".concat(r,"/").concat(n,"\uff09")))}},O.a.createElement(o.a.Item,null,O.a.createElement(N,{maxLength:10,changeHandle:function(a){e.setState({imgList:a})},selectable:r<n,files:t}))),O.a.createElement(E.a,null),O.a.createElement(c.a,null,O.a.createElement(i.a,{type:"primary",onClick:function(a){e.saveFeedback()}},"\u63d0\u4ea4")))}}]),a}(j.Component))}}]);
//# sourceMappingURL=17.8f4d2754.chunk.js.map