(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{537:function(e,a,t){"use strict";t(528);var n=t(529),r=t.n(n),l=t(530),o=t(2),i=t.n(o),s=t(538),c=t.n(s);a.a=function(e){var a=Object(l.a)({},e),t=a.className,n=void 0===t?null:t;return i.a.createElement(r.a,Object.assign({size:"lg"},a,{className:n?"".concat(c.a.wrapper," ").concat(n):c.a.wrapper}))}},538:function(e,a,t){e.exports={wrapper:"index_wrapper__g-gQ9"}},627:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhLrdVLDoQgDAbgFk0IK+MxvP9d5BImrE0wzpREB5RHq8PKRPx+0FbQWrt/ByAi/HNM04Q4z/Pe9z2M4wha61e+9x6WZYFt24BwRSsm2DkH67o+xg94GIbTUHRFK34TEMPGmBR/E1CCyQwrP4Z0BzX4hkt20IKzOCeAAxfxWgAXruK5AAncxK8B1CBUx3G51RojqZbSxK7rfrWrWI+E+c2Z8auQNloVv75jaR8U8dLHkwRk8VZVcANueAuW/CoSnAtzA05cCnMCAv4UbgUEXNp5uWaLPzKdyTSQDuhaC0vvHYc9naHSZ0XzP+Ea6huqGYtQAAAAAElFTkSuQmCC"},767:function(e,a,t){e.exports={wrapper:"goToVerify_wrapper__ZCkMa",verify_modal_title:"goToVerify_verify_modal_title__1de3Y",verify_modal_footer:"goToVerify_verify_modal_footer__IChui"}},769:function(e,a,t){e.exports={had_verify_avator:"index_had_verify_avator__3Mmol",had_verify_level:"index_had_verify_level__19xO8",had_verify:"index_had_verify__lk0nk",had_verify_options:"index_had_verify_options__2s5bs",no_verify_info:"index_no_verify_info__3lYk1",no_verify_info_avator:"index_no_verify_info_avator__28L_y",operate_item:"index_operate_item__2tJFU",list_item_extra:"index_list_item_extra__2xOyl"}},862:function(e,a,t){"use strict";t.r(a);t(527);var n=t(532),r=t.n(n),l=(t(533),t(534)),o=t.n(l),i=t(85),s=t(86),c=t(88),m=t(87),u=t(89),d=t(2),p=t.n(d),v=t(91),h=t(537),_=(t(587),t(588)),f=t.n(_),E=(t(230),t(231)),C=t.n(E),A=(t(232),t(116)),y=t.n(A),b=(t(573),t(574)),x=t.n(b),g=t(570),N=t(40),S=t(53),w=t(47),z=t(767),F=t.n(z),j=x.a.alert,k=Object(g.a)()(function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={visible:!1,getCodeText:"\u83b7\u53d6\u9a8c\u8bc1\u7801",timer:null,second:60,current:60},t.startTimer=function(){var e=setInterval(function(){var a=t.state,n=a.current,r=a.second;t.setState({current:n-1}),n<=1&&(clearInterval(e),e=null,t.setState({current:r}))},1e3);t.setState({timer:e})},t.getCode=function(){var e=t.state;if(e.current===e.second){var a=t.props.form.getFieldValue("phone");if(a){var n=a.replace(N.e.removeEmpty,"");N.e.phone.test(n)?j("\u786e\u8ba4\u624b\u673a\u53f7\u7801",p.a.createElement("ul",null,p.a.createElement("li",null,"\u6211\u4eec\u5c06\u53d1\u9001\u9a8c\u8bc1\u7801\u77ed\u4fe1\u5230\u8fd9\u4e2a\u53f7\u7801\uff1a"),p.a.createElement("li",null,a)),[{text:"\u53d6\u6d88"},{text:"\u597d",onPress:function(){Object(S.a)({url:w.a.sendValidCode,data:{phone:n}}).then(function(e){console.log(e),t.startTimer()}).catch(function(e){console.log(e),t.startTimer()})}}]):y.a.info("\u8bf7\u6b63\u786e\u586b\u5199\u624b\u673a\u53f7!")}else y.a.info("\u8bf7\u8f93\u5165\u624b\u673a\u53f7!")}},t.onOpen=function(){var e=t.state,a=e.second,n=e.current;t.props.form.resetFields(),n!==a&&t.setState({current:a}),t.setState({visible:!0})},t.onClose=function(){t.setState({visible:!1,timer:null}),clearInterval(t.state.timer)},t.onOk=function(){t.props.form.validateFields(function(e,a){if(!e){var n=a.phone,r=a.validCode;Object(S.a)({url:w.a.bindPhone,data:{phone:n.replace(N.e.removeEmpty,""),validCode:r}}).then(function(e){t.onClose()}).catch(function(e){})}})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.visible,t=e.getCodeText,n=e.second,l=e.current,o=this.props.form.getFieldProps;return p.a.createElement(r.a,null,p.a.createElement(r.a.Item,{extra:p.a.createElement("span",{className:F.a.wrapper,onClick:this.onOpen},"\u53bb\u9a8c\u8bc1")},"\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u8ba2\u5355\u4fe1\u606f\u4e00\u624b\u638c\u63e1"),p.a.createElement(x.a,{className:F.a.verify_modal,visible:a,transparent:!0,onClose:this.onClose,title:p.a.createElement("div",{className:F.a.verify_modal_title},"\u9a8c\u8bc1\u767b\u9646",p.a.createElement(C.a,{type:"cross-circle",onClick:this.onClose})),footer:[{text:p.a.createElement("div",{className:F.a.verify_modal_footer},"\u786e\u5b9a"),onPress:this.onOk}]},p.a.createElement(r.a,null,p.a.createElement(f.a,Object.assign({},o("phone",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u624b\u673a\u53f7"}]}),{disabled:l!==n,clear:!0,type:"phone",autoFocus:!0,placeholder:"\u8f93\u5165\u624b\u673a\u53f7"})),p.a.createElement(f.a,Object.assign({},o("validCode",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801"}]}),{clear:!0,extra:p.a.createElement("div",{onClick:this.getCode},l===n?t:"".concat(l,"\u79d2\u540e\u91cd\u65b0\u53d1\u9001")),type:"number",placeholder:"\u8f93\u5165\u9a8c\u8bc1\u7801"})))))}}]),a}(d.Component)),O=t(627),T=t.n(O),I=t(769),B=t.n(I);a.default=Object(v.b)(function(e){return{userInfo:e.userInfo}})(function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).jumpTo=function(e){var a=e.pathname,n=e.state,r=void 0===n?{}:n;t.props.history.push({pathname:a,state:r})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.match,t=e.userInfo,n=a.path,l=t.avatar,i=t.name,s=t.userLevel,c=t.growthValue,m=t.needValue,u=t.nextLevel,d=t.couponCount,v=t.score,_=t.isAuth;return p.a.createElement("div",null,1===_?p.a.createElement(o.a,{full:!0,className:B.a.had_verify},p.a.createElement(o.a.Header,{thumb:p.a.createElement("div",{className:B.a.had_verify_avator},l?p.a.createElement("img",{src:l,alt:""}):null),title:p.a.createElement("div",null,p.a.createElement("div",{className:"highFontSizeC"},i," ",p.a.createElement("span",{className:"textFontSizeC ".concat(B.a.had_verify_level)},s)),p.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u518d\u6709",p.a.createElement("span",{className:"redColor"},m),"\u6210\u957f\u503c\u5373\u53ef\u5347\u7ea7\u4e3a",u)),extra:p.a.createElement("i",{onClick:this.jumpTo.bind(this,{pathname:n+"/message"}),className:"iconfont icon-message highFontSizeC"})}),p.a.createElement(o.a.Body,null,p.a.createElement("div",{className:B.a.had_verify_options},p.a.createElement("div",{onClick:this.jumpTo.bind(this,{pathname:n+"/grade",state:{avatar:l,name:i,userLevel:s}})},p.a.createElement("div",{className:"titleFontSizeC redColor"},c),p.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u6210\u957f\u503c")),p.a.createElement("div",{className:"yBoth1px"},p.a.createElement("div",{className:"titleFontSizeC"},d),p.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u4f18\u60e0\u5238")),p.a.createElement("div",null,p.a.createElement("div",{className:"titleFontSizeC"},v),p.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u79ef\u5206"))))):p.a.createElement("div",{className:B.a.no_verify},p.a.createElement("div",{className:B.a.no_verify_info},p.a.createElement("i",{className:"iconfont icon-message highFontSizeC",onClick:this.jumpTo.bind(this,{pathname:n+"/message"})}),p.a.createElement("div",{className:B.a.no_verify_info_avator},l?p.a.createElement("img",{src:l,alt:""}):null),p.a.createElement("p",{className:"highFontSizeC"},i)),p.a.createElement(h.a,null),p.a.createElement(k,null)),p.a.createElement(h.a,null),p.a.createElement(r.a,{className:B.a.operate},p.a.createElement(r.a.Item,{className:B.a.operate_item,arrow:"horizontal",thumb:T.a,extra:p.a.createElement("span",{className:"".concat(B.a.list_item_extra," textFontSizeC")},"2"),onClick:this.jumpTo.bind(this,{pathname:"/myOrder"})},p.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u8ba2\u5355")),p.a.createElement(r.a.Item,{className:B.a.operate_item,arrow:"horizontal",thumb:T.a,extra:p.a.createElement("span",{className:"".concat(B.a.list_item_extra," textFontSizeC")},"1"),onClick:this.jumpTo.bind(this,{pathname:"/myAfterSale"})},p.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u552e\u540e"))),p.a.createElement(h.a,null),p.a.createElement(r.a,null,p.a.createElement(r.a.Item,{className:B.a.operate_item,arrow:"horizontal",thumb:T.a,onClick:this.jumpTo.bind(this,{pathname:n+"/collect"})},p.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u6536\u85cf")),p.a.createElement(r.a.Item,{className:B.a.operate_item,arrow:"horizontal",thumb:T.a,onClick:this.jumpTo.bind(this,{pathname:n+"/suggestionFeedback"})},p.a.createElement("span",{className:"titleFontSizeC"},"\u610f\u89c1\u53cd\u9988"))))}}]),a}(d.Component))}}]);
//# sourceMappingURL=20.7e6fa915.chunk.js.map