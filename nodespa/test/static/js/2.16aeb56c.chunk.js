(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{520:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,"a",function(){return o})},521:function(e,t,n){"use strict";n.r(t);var o=n(42),a=n.n(o),i=n(23),r=n.n(i),l=n(24),s=n.n(l),u=n(14),c=n.n(u),d=n(25),f=n.n(d),p=n(2),v=n.n(p),h=n(43),m=n.n(h),g=function(e){function t(){r()(this,t);var e=c()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return f()(t,e),s()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var o="on"+e,a=this.props.children;a.props[o]&&a.props[o](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,o=e.activeClassName,i=e.activeStyle,r=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},l=v.a.Children.only(t);if(!n&&this.state.active){var s=l.props,u=s.style,c=s.className;return!1!==i&&(i&&(u=a()({},u,i)),c=m()(c,o)),v.a.cloneElement(l,a()({className:c,style:u},r))}return v.a.cloneElement(l,r)}}]),t}(v.a.Component),y=g;g.defaultProps={disabled:!1},n.d(t,"default",function(){return y})},544:function(e,t,n){"use strict";n(223),n(224),n(552)},545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n(42)),a=p(n(13)),i=p(n(23)),r=p(n(24)),l=p(n(14)),s=p(n(25)),u=p(n(43)),c=p(n(2)),d=p(n(521)),f=p(n(225));function p(e){return e&&e.__esModule?e:{default:e}}var v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n},h=/^[\u4e00-\u9fa5]{2}$/,m=h.test.bind(h);function g(e){return"string"===typeof e}function y(e){return g(e.type)&&m(e.props.children)?c.default.cloneElement(e,{},e.props.children.split("").join(" ")):g(e)?(m(e)&&(e=e.split("").join(" ")),c.default.createElement("span",null,e)):e}var b=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,i=t.className,r=t.prefixCls,l=t.type,s=t.size,p=t.inline,h=t.disabled,m=t.icon,g=t.loading,b=t.activeStyle,E=t.activeClassName,C=t.onClick,M=v(t,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),O=g?"loading":m,w=(0,u.default)(r,i,(e={},(0,a.default)(e,r+"-primary","primary"===l),(0,a.default)(e,r+"-ghost","ghost"===l),(0,a.default)(e,r+"-warning","warning"===l),(0,a.default)(e,r+"-small","small"===s),(0,a.default)(e,r+"-inline",p),(0,a.default)(e,r+"-disabled",h),(0,a.default)(e,r+"-loading",g),(0,a.default)(e,r+"-icon",!!O),e)),T=c.default.Children.map(n,y),S=void 0;if("string"===typeof O)S=c.default.createElement(f.default,{"aria-hidden":"true",type:O,size:"small"===s?"xxs":"md",className:r+"-icon"});else if(O){var N=O.props&&O.props.className,_=(0,u.default)("am-icon",r+"-icon","small"===s?"am-icon-xxs":"am-icon-md");S=c.default.cloneElement(O,{className:N?N+" "+_:_})}return c.default.createElement(d.default,{activeClassName:E||(b?r+"-active":void 0),disabled:h,activeStyle:b},c.default.createElement("a",(0,o.default)({role:"button",className:w},M,{onClick:h?void 0:C,"aria-disabled":h}),S,T))}}]),t}(c.default.Component);b.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},t.default=b,e.exports=t.default},552:function(e,t,n){},585:function(e,t,n){"use strict";n.r(t);n(544);var o=n(545),a=n.n(o),i=n(520),r=n(2),l=n.n(r);t.default=function(e){var t=Object(i.a)({},e).history;return l.a.createElement("div",null,"\u9875\u9762\u4e0d\u5b58\u5728\uff01",l.a.createElement(a.a,{onClick:function(e){t.goBack()}},"\u8fd4\u56de"))}}}]);
//# sourceMappingURL=2.16aeb56c.chunk.js.map