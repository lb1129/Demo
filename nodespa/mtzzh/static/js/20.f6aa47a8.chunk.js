(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{526:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a})},530:function(e,t,n){"use strict";n(228),n(532)},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(23)),r=u(n(24)),i=u(n(14)),c=u(n(25)),o=u(n(44)),l=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.size,a=e.className,r=e.style,i=e.onClick,c=(0,o.default)(t,t+"-"+n,a);return l.default.createElement("div",{className:c,style:r,onClick:i})}}]),t}(l.default.Component);t.default=s,s.defaultProps={prefixCls:"am-whitespace",size:"md"},e.exports=t.default},532:function(e,t,n){},534:function(e,t,n){"use strict";n(530);var a=n(531),r=n.n(a),i=n(526),c=n(2),o=n.n(c),l=n(539),u=n.n(l);t.a=function(e){var t=Object(i.a)({},e),n=t.className,a=void 0===n?null:n;return o.a.createElement(r.a,Object.assign({size:"lg"},t,{className:a?"".concat(u.a.wrapper," ").concat(a):u.a.wrapper}))}},539:function(e,t,n){e.exports={wrapper:"index_wrapper__g-gQ9"}},541:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return a})},564:function(e,t,n){"use strict";var a=function(e){};e.exports=function(e,t,n,r,i,c,o,l){if(a(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,c,o,l],f=0;(u=new Error(t.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},609:function(e,t,n){"use strict";n(228),n(610)},610:function(e,t,n){},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(23)),r=u(n(24)),i=u(n(14)),c=u(n(25)),o=u(n(44)),l=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.size,a=e.className,r=e.children,i=e.style,c=(0,o.default)(t,t+"-"+n,a);return l.default.createElement("div",{className:c,style:i},r)}}]),t}(l.default.Component);t.default=s,s.defaultProps={prefixCls:"am-wingblank",size:"lg"},e.exports=t.default},615:function(e,t,n){"use strict";n.d(t,"a",function(){return g});n(616);var a=n(617),r=n.n(a),i=n(90),c=n(541),o=n(85),l=n(86),u=n(88),s=n(87),f=n(89),p=n(2),d=n.n(p),m=n(66),h=n(51),v=n(159),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e,t,a){var r=n.props,o=r.files,l=r.maxLength,u=r.changeHandle,s=e.length;if(!(s>l)){if("add"===t){var f=e[s-1],p=new FormData;p.append("file",f.file),Object(m.a)({url:h.a.fileUpload,data:p,config:{baseURL:v.c}}).then(function(e){u(Object(c.a)(n.props.files).concat([Object(i.a)({},e,{url:f.url,fileUrl:e.url})]))}).catch(function(e){})}"remove"===t&&Object(m.a)({url:h.a.fileDelete,data:{url:o[a].fileUrl},config:{baseURL:v.c}}).then(function(e){var t=Object(c.a)(n.props.files);t.splice(a,1),u(t)}).catch(function(e){})}},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return d.a.createElement(r.a,Object.assign({multiple:!0,accept:"image/*,video/*"},this.props,{onChange:this.onChange}))}}]),t}(p.Component);g.defaultProps={maxLength:10,changeHandle:function(){}}},768:function(e,t,n){"use strict";n.r(t);n(609);var a=n(612),r=n.n(a),i=(n(535),n(536)),c=n.n(i),o=(n(527),n(529)),l=n.n(o),u=(n(573),n(574)),s=n.n(u),f=(n(231),n(115)),p=n.n(f),d=n(90),m=n(85),h=n(86),v=n(88),g=n(87),b=n(89),O=n(2),y=n.n(O),j=n(563),w=n(534),_=n(615),x=n(66),E=n(51),C=n(775),k=n.n(C);t.default=Object(j.a)()(function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={imgList:[],maxLength:10},n.saveFeedback=function(){n.props.form.validateFields({force:!0},function(e,t){e||Object(x.a)({url:E.a.saveFeedback,data:Object(d.a)({},t,{imgList:n.state.imgList.map(function(e){return e.fileName})})}).then(function(e){p.a.success("\u63d0\u4ea4\u6210\u529f!",1);var t=setTimeout(function(){clearTimeout(t),t=null,n.props.history.goBack()},1e3)}).catch(function(e){})})},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.imgList,a=t.maxLength,i=n.length,o=this.props.form.getFieldProps;return y.a.createElement("div",{className:k.a.wrapper},y.a.createElement(l.a,null,y.a.createElement(s.a,Object.assign({},o("ffeedtext",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u53cd\u9988\u5185\u5bb9"}]}),{rows:5,count:100,placeholder:"\u8bf7\u8f93\u5165\u53cd\u9988\u5185\u5bb9"}))),y.a.createElement(l.a,{renderHeader:function(){return y.a.createElement("div",{className:"titleFontSizeC"},"\u62cd\u7167\u4e0a\u4f20",y.a.createElement("span",{className:"textFontSizeC shallowGreyColor"},"\uff08".concat(i,"/").concat(a,"\uff09")))}},y.a.createElement(l.a.Item,null,y.a.createElement(_.a,{maxLength:10,changeHandle:function(t){e.setState({imgList:t})},selectable:i<a,files:n}))),y.a.createElement(w.a,null),y.a.createElement(r.a,null,y.a.createElement(c.a,{type:"primary",onClick:function(t){e.saveFeedback()}},"\u63d0\u4ea4")))}}]),t}(O.Component))},775:function(e,t,n){e.exports={wrapper:"index_wrapper__3g0AU"}}}]);
//# sourceMappingURL=20.f6aa47a8.chunk.js.map