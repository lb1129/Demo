(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{534:function(e,t,a){"use strict";a(530);var n=a(531),r=a.n(n),i=a(526),o=a(2),l=a.n(o),s=a(539),c=a.n(s);t.a=function(e){var t=Object(i.a)({},e),a=t.className,n=void 0===a?null:a;return l.a.createElement(r.a,Object.assign({size:"lg"},t,{className:n?"".concat(c.a.wrapper," ").concat(n):c.a.wrapper}))}},539:function(e,t,a){e.exports={wrapper:"index_wrapper__g-gQ9"}},607:function(e,t,a){e.exports=a.p+"static/media/portrait.24d20637.png"},608:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADuSURBVEhLrdVLDoQgDAbgFk0IK+MxvP9d5BImrE0wzpREB5RHq8PKRPx+0FbQWrt/ByAi/HNM04Q4z/Pe9z2M4wha61e+9x6WZYFt24BwRSsm2DkH67o+xg94GIbTUHRFK34TEMPGmBR/E1CCyQwrP4Z0BzX4hkt20IKzOCeAAxfxWgAXruK5AAncxK8B1CBUx3G51RojqZbSxK7rfrWrWI+E+c2Z8auQNloVv75jaR8U8dLHkwRk8VZVcANueAuW/CoSnAtzA05cCnMCAv4UbgUEXNp5uWaLPzKdyTSQDuhaC0vvHYc9naHSZ0XzP+Ea6huqGYtQAAAAAElFTkSuQmCC"},755:function(e,t,a){e.exports={wrapper:"goToVerify_wrapper__ZCkMa",verify_modal_title:"goToVerify_verify_modal_title__1de3Y",verify_modal_footer:"goToVerify_verify_modal_footer__IChui"}},757:function(e,t,a){e.exports={had_verify_avator:"index_had_verify_avator__3Mmol",had_verify_level:"index_had_verify_level__19xO8",had_verify:"index_had_verify__lk0nk",had_verify_options:"index_had_verify_options__2s5bs",no_verify_info:"index_no_verify_info__3lYk1",no_verify_info_avator:"index_no_verify_info_avator__28L_y",operate_item:"index_operate_item__2tJFU",list_item_extra:"index_list_item_extra__2xOyl"}},859:function(e,t,a){"use strict";a.r(t);a(527);var n=a(529),r=a.n(n),i=(a(537),a(538)),o=a.n(i),l=a(85),s=a(86),c=a(88),m=a(87),d=a(89),u=a(2),h=a.n(u),p=a(534),v=(a(562),a(563)),_=a.n(v),f=(a(229),a(230)),E=a.n(f),C=(a(231),a(115)),A=a.n(C),y=(a(565),a(566)),b=a.n(y),g=a(560),x=a(40),N=a(66),S=a(51),j=a(755),w=a.n(j),z=b.a.alert,k=Object(g.a)()(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,getCodeText:"\u83b7\u53d6\u9a8c\u8bc1\u7801",timer:null,second:60,current:60},a.startTimer=function(){var e=setInterval(function(){var t=a.state,n=t.current,r=t.second;a.setState({current:n-1}),n<=1&&(clearInterval(e),e=null,a.setState({current:r}))},1e3);a.setState({timer:e})},a.getCode=function(){var e=a.state;if(e.current===e.second){var t=a.props.form.getFieldValue("phone");if(t){var n=t.replace(x.e.removeEmpty,"");x.e.phone.test(n)?z("\u786e\u8ba4\u624b\u673a\u53f7\u7801",h.a.createElement("ul",null,h.a.createElement("li",null,"\u6211\u4eec\u5c06\u53d1\u9001\u9a8c\u8bc1\u7801\u77ed\u4fe1\u5230\u8fd9\u4e2a\u53f7\u7801\uff1a"),h.a.createElement("li",null,t)),[{text:"\u53d6\u6d88"},{text:"\u597d",onPress:function(){Object(N.a)({url:S.a.sendValidCode,data:{phone:n}}).then(function(e){console.log(e),a.startTimer()}).catch(function(e){console.log(e),a.startTimer()})}}]):A.a.info("\u8bf7\u6b63\u786e\u586b\u5199\u624b\u673a\u53f7!")}else A.a.info("\u8bf7\u8f93\u5165\u624b\u673a\u53f7!")}},a.onOpen=function(){var e=a.state,t=e.second,n=e.current;a.props.form.resetFields(),n!==t&&a.setState({current:t}),a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1,timer:null}),clearInterval(a.state.timer)},a.onOk=function(){a.props.form.validateFields(function(e,t){if(!e){var n=t.phone,r=t.validCode;Object(N.a)({url:S.a.bindPhone,data:{phone:n.replace(x.e.removeEmpty,""),validCode:r}}).then(function(e){a.onClose()}).catch(function(e){})}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.getCodeText,n=e.second,i=e.current,o=this.props.form.getFieldProps;return h.a.createElement(r.a,null,h.a.createElement(r.a.Item,{extra:h.a.createElement("span",{className:w.a.wrapper,onClick:this.onOpen},"\u53bb\u9a8c\u8bc1")},"\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u8ba2\u5355\u4fe1\u606f\u4e00\u624b\u638c\u63e1"),h.a.createElement(b.a,{className:w.a.verify_modal,visible:t,transparent:!0,onClose:this.onClose,title:h.a.createElement("div",{className:w.a.verify_modal_title},"\u9a8c\u8bc1\u767b\u9646",h.a.createElement(E.a,{type:"cross-circle",onClick:this.onClose})),footer:[{text:h.a.createElement("div",{className:w.a.verify_modal_footer},"\u786e\u5b9a"),onPress:this.onOk}]},h.a.createElement(r.a,null,h.a.createElement(_.a,Object.assign({},o("phone",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u624b\u673a\u53f7"}]}),{disabled:i!==n,clear:!0,type:"phone",autoFocus:!0,placeholder:"\u8f93\u5165\u624b\u673a\u53f7"})),h.a.createElement(_.a,Object.assign({},o("validCode",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u9a8c\u8bc1\u7801"}]}),{clear:!0,extra:h.a.createElement("div",{onClick:this.getCode},i===n?a:"".concat(i,"\u79d2\u540e\u91cd\u65b0\u53d1\u9001")),type:"number",placeholder:"\u8f93\u5165\u9a8c\u8bc1\u7801"})))))}}]),t}(u.Component)),F=a(607),O=a.n(F),T=a(608),I=a.n(T),B=a(757),V=a.n(B);a.d(t,"default",function(){return Q});var Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={hadVerify:!1},a.getLevelInfo=function(){Object(N.a)({url:S.a.levelInfo}).then(function(e){console.log(e)}).catch(function(e){})},a.jumpTo=function(e){var t=e.pathname,n=e.state,r=void 0===n?{}:n;a.props.history.push({pathname:t,state:r})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.state.hadVerify&&this.getLevelInfo()}},{key:"render",value:function(){var e=this.state.hadVerify,t=this.props.match.path;return h.a.createElement("div",null,e?h.a.createElement(o.a,{full:!0,className:V.a.had_verify},h.a.createElement(o.a.Header,{thumb:h.a.createElement("div",{className:V.a.had_verify_avator},h.a.createElement("img",{src:O.a,alt:""})),title:h.a.createElement("div",null,h.a.createElement("div",{className:"highFontSizeC"},"\u9648\u8389\u8389 ",h.a.createElement("span",{className:"textFontSizeC ".concat(V.a.had_verify_level)},"\u666e\u901a\u4f1a\u5458")),h.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u518d\u6709",h.a.createElement("span",{className:"redColor"},"3200"),"\u6210\u957f\u503c\u5373\u53ef\u5347\u7ea7\u4e3a\u94dc\u724c\u4f1a\u5458")),extra:h.a.createElement("i",{onClick:this.jumpTo.bind(this,{pathname:t+"/message"}),className:"iconfont icon-message highFontSizeC"})}),h.a.createElement(o.a.Body,null,h.a.createElement("div",{className:V.a.had_verify_options},h.a.createElement("div",{onClick:this.jumpTo.bind(this,{pathname:t+"/grade"})},h.a.createElement("div",{className:"titleFontSizeC redColor"},"30000"),h.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u6210\u957f\u503c")),h.a.createElement("div",{className:"yBoth1px",onClick:this.jumpTo.bind(this,{pathname:t+"/discountCoupon"})},h.a.createElement("div",{className:"titleFontSizeC"},"5"),h.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u4f18\u60e0\u5238")),h.a.createElement("div",{onClick:this.jumpTo.bind(this,{pathname:t+"/integral"})},h.a.createElement("div",{className:"titleFontSizeC"},"256"),h.a.createElement("div",{className:"textFontSizeC shallowGreyColor"},"\u79ef\u5206"))))):h.a.createElement("div",{className:V.a.no_verify},h.a.createElement("div",{className:V.a.no_verify_info},h.a.createElement("i",{className:"iconfont icon-message highFontSizeC",onClick:this.jumpTo.bind(this,{pathname:t+"/message"})}),h.a.createElement("div",{className:V.a.no_verify_info_avator}),h.a.createElement("p",{className:"highFontSizeC"},"\u9648\u8389\u8389")),h.a.createElement(p.a,null),h.a.createElement(k,null)),h.a.createElement(p.a,null),h.a.createElement(r.a,{className:V.a.operate},h.a.createElement(r.a.Item,{className:V.a.operate_item,arrow:"horizontal",thumb:I.a,extra:h.a.createElement("span",{className:"".concat(V.a.list_item_extra," textFontSizeC")},"2"),onClick:this.jumpTo.bind(this,{pathname:"/myOrder"})},h.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u8ba2\u5355")),h.a.createElement(r.a.Item,{className:V.a.operate_item,arrow:"horizontal",thumb:I.a,extra:h.a.createElement("span",{className:"".concat(V.a.list_item_extra," textFontSizeC")},"1"),onClick:this.jumpTo.bind(this,{pathname:"/myAfterSale"})},h.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u552e\u540e"))),h.a.createElement(p.a,null),h.a.createElement(r.a,null,h.a.createElement(r.a.Item,{className:V.a.operate_item,arrow:"horizontal",thumb:I.a,onClick:this.jumpTo.bind(this,{pathname:t+"/collect"})},h.a.createElement("span",{className:"titleFontSizeC"},"\u6211\u7684\u6536\u85cf")),h.a.createElement(r.a.Item,{className:V.a.operate_item,arrow:"horizontal",thumb:I.a,onClick:this.jumpTo.bind(this,{pathname:t+"/suggestionFeedback"})},h.a.createElement("span",{className:"titleFontSizeC"},"\u610f\u89c1\u53cd\u9988"))))}}]),t}(u.Component)}}]);
//# sourceMappingURL=18.02ea4ecc.chunk.js.map