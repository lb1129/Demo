(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{526:function(e,t,n){"use strict";n.r(t);var r=n(42),o=n.n(r),i=n(24),a=n.n(i),s=n(25),l=n.n(s),c=n(14),u=n.n(c),d=n(26),h=n.n(d),f=n(2),p=n.n(f),v=n(43),m=n.n(v),g=function(e){function t(){a()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return h()(t,e),l()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var r="on"+e,o=this.props.children;o.props[r]&&o.props[r](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,r=e.activeClassName,i=e.activeStyle,a=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},s=p.a.Children.only(t);if(!n&&this.state.active){var l=s.props,c=l.style,u=l.className;return!1!==i&&(i&&(c=o()({},c,i)),u=m()(u,r)),p.a.cloneElement(s,o()({className:u,style:c},a))}return p.a.cloneElement(s,a)}}]),t}(p.a.Component),w=g;g.defaultProps={disabled:!1},n.d(t,"default",function(){return w})},527:function(e,t,n){"use strict";n(221),n(556)},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(42)),o=d(n(24)),i=d(n(25)),a=d(n(14)),s=d(n(26)),l=d(n(43)),c=d(n(2)),u=d(n(559));function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},f=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.children,o=e.className,i=e.style,a=e.renderHeader,s=e.renderFooter,u=h(e,["prefixCls","children","className","style","renderHeader","renderFooter"]),d=(0,l.default)(t,o);return c.default.createElement("div",(0,r.default)({className:d,style:i},u),a?c.default.createElement("div",{className:t+"-header"},"function"===typeof a?a():a):null,n?c.default.createElement("div",{className:t+"-body"},n):null,s?c.default.createElement("div",{className:t+"-footer"},"function"===typeof s?s():s):null)}}]),t}(c.default.Component);t.default=f,f.Item=u.default,f.defaultProps={prefixCls:"am-list"},e.exports=t.default},541:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},544:function(e,t,n){"use strict";n(221),n(527),n(613)},545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(n(42)),o=h(n(24)),i=h(n(25)),a=h(n(14)),s=h(n(26)),l=h(n(2)),c=h(n(612)),u=h(n(602)),d=h(n(616));function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){(0,o.default)(this,t);var e=(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.scrollTo=function(){var t;return(t=e.listviewRef).scrollTo.apply(t,arguments)},e.getInnerViewNode=function(){return e.listviewRef.getInnerViewNode()},e}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=(0,u.default)(this.props,!1),n=t.restProps,o=t.extraProps;return l.default.createElement(c.default,(0,r.default)({ref:function(t){return e.listviewRef=t}},n,o))}}]),t}(l.default.Component);t.default=f,f.defaultProps={prefixCls:"am-list-view",listPrefixCls:"am-list"},f.DataSource=c.default.DataSource,f.IndexedList=d.default,e.exports=t.default},556:function(e,t,n){},558:function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,s,l){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,a,s,l],d=0;(c=new Error(t.replace(/%s/g,function(){return u[d++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},559:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var r=h(n(42)),o=h(n(13)),i=h(n(24)),a=h(n(25)),s=h(n(14)),l=h(n(26)),c=h(n(43)),u=h(n(2)),d=h(n(526));function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},p=t.Brief=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(u.default.Component),v=function(e){function t(e){(0,i.default)(this,t);var n=(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(e){var t=n.props,r=t.onClick,o=t.platform;if(r&&"android"===o){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null);var i=e.currentTarget,a=Math.max(i.offsetHeight,i.offsetWidth),s=e.currentTarget.getBoundingClientRect(),l={width:a+"px",height:a+"px",left:e.clientX-s.left-i.offsetWidth/2+"px",top:e.clientY-s.top-i.offsetWidth/2+"px"};n.setState({coverRippleStyle:l,RippleClicked:!0},function(){n.debounceTimeout=setTimeout(function(){n.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})},1e3)})}r&&r(e)},n.state={coverRippleStyle:{display:"none"},RippleClicked:!1},n}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,n,i=this,a=this.props,s=a.prefixCls,l=a.className,h=a.activeStyle,p=a.error,v=a.align,m=a.wrap,g=a.disabled,w=a.children,y=a.multipleLine,S=a.thumb,_=a.extra,C=a.arrow,R=a.onClick,b=f(a,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),E=(b.platform,f(b,["platform"])),T=this.state,k=T.coverRippleStyle,L=T.RippleClicked,I=(0,c.default)(s+"-item",l,(e={},(0,o.default)(e,s+"-item-disabled",g),(0,o.default)(e,s+"-item-error",p),(0,o.default)(e,s+"-item-top","top"===v),(0,o.default)(e,s+"-item-middle","middle"===v),(0,o.default)(e,s+"-item-bottom","bottom"===v),e)),H=(0,c.default)(s+"-ripple",(0,o.default)({},s+"-ripple-animate",L)),x=(0,c.default)(s+"-line",(t={},(0,o.default)(t,s+"-line-multiple",y),(0,o.default)(t,s+"-line-wrap",m),t)),P=(0,c.default)(s+"-arrow",(n={},(0,o.default)(n,s+"-arrow-horizontal","horizontal"===C),(0,o.default)(n,s+"-arrow-vertical","down"===C||"up"===C),(0,o.default)(n,s+"-arrow-vertical-up","up"===C),n)),N=u.default.createElement("div",(0,r.default)({},E,{onClick:function(e){i.onClick(e)},className:I}),S?u.default.createElement("div",{className:s+"-thumb"},"string"===typeof S?u.default.createElement("img",{src:S}):S):null,u.default.createElement("div",{className:x},void 0!==w&&u.default.createElement("div",{className:s+"-content"},w),void 0!==_&&u.default.createElement("div",{className:s+"-extra"},_),C&&u.default.createElement("div",{className:P,"aria-hidden":"true"})),u.default.createElement("div",{style:k,className:H})),O={};return Object.keys(E).forEach(function(e){/onTouch/i.test(e)&&(O[e]=E[e],delete E[e])}),u.default.createElement(d.default,(0,r.default)({},O,{disabled:g||!R,activeStyle:h,activeClassName:s+"-item-active"}),N)}}]),t}(u.default.Component);v.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"ios"},v.Brief=p,t.default=v},602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.renderHeader,o=e.renderFooter,i=e.renderSectionHeader,l=e.renderBodyComponent,c=a(e,["renderHeader","renderFooter","renderSectionHeader","renderBodyComponent"]),u=e.listPrefixCls,d={renderHeader:null,renderFooter:null,renderSectionHeader:null,renderBodyComponent:l||function(){return r.default.createElement("div",{className:u+"-body"})}};n&&(d.renderHeader=function(){return r.default.createElement("div",{className:u+"-header"},n())});o&&(d.renderFooter=function(){return r.default.createElement("div",{className:u+"-footer"},o())});i&&(d.renderSectionHeader=t?function(e,t){return r.default.createElement("div",null,r.default.createElement(s,{prefixCls:u},i(e,t)))}:function(e,t){return r.default.createElement(s,{prefixCls:u},i(e,t))});return{restProps:c,extraProps:d}};var r=i(n(2)),o=i(n(531));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},s=o.default.Item;e.exports=t.default},612:function(e,t,n){"use strict";n.r(t);var r=n(42),o=n.n(r),i=n(161),a=n.n(i),s=n(24),l=n.n(s),c=n(25),u=n.n(c),d=n(14),h=n.n(d),f=n(26),p=n.n(f),v=n(2),m=n.n(v),g=n(1),w=n.n(g),y=n(33),S=n.n(y),_=n(558),C=n.n(_),R=n(615),b=n.n(R),E=n(160),T=n.n(E);function k(e,t,n){return e[t][n]}function L(e,t){return e[t]}function I(e){if(b()(e))return{};for(var t={},n=0;n<e.length;n++){var r=e[n];T()(!t[r],"Value appears more than once in array: "+r),t[r]=!0}return t}var H=function(){function e(t){l()(this,e),C()(t&&"function"===typeof t.rowHasChanged,"Must provide a rowHasChanged function."),this._rowHasChanged=t.rowHasChanged,this._getRowData=t.getRowData||k,this._sectionHeaderHasChanged=t.sectionHeaderHasChanged,this._getSectionHeaderData=t.getSectionHeaderData||L,this._dataBlob=null,this._dirtyRows=[],this._dirtySections=[],this._cachedRowCount=0,this.rowIdentities=[],this.sectionIdentities=[]}return u()(e,[{key:"cloneWithRows",value:function(e,t){var n=t?[t]:null;return this._sectionHeaderHasChanged||(this._sectionHeaderHasChanged=function(){return!1}),this.cloneWithRowsAndSections({s1:e},["s1"],n)}},{key:"cloneWithRowsAndSections",value:function(t,n,r){C()("function"===typeof this._sectionHeaderHasChanged,"Must provide a sectionHeaderHasChanged function with section data."),C()(!n||!r||n.length===r.length,"row and section ids lengths must be the same");var o=new e({getRowData:this._getRowData,getSectionHeaderData:this._getSectionHeaderData,rowHasChanged:this._rowHasChanged,sectionHeaderHasChanged:this._sectionHeaderHasChanged});return o._dataBlob=t,o.sectionIdentities=n||Object.keys(t),r?o.rowIdentities=r:(o.rowIdentities=[],o.sectionIdentities.forEach(function(e){o.rowIdentities.push(Object.keys(t[e]))})),o._cachedRowCount=function(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];t+=r.length}return t}(o.rowIdentities),o._calculateDirtyArrays(this._dataBlob,this.sectionIdentities,this.rowIdentities),o}},{key:"getRowCount",value:function(){return this._cachedRowCount}},{key:"getRowAndSectionCount",value:function(){return this._cachedRowCount+this.sectionIdentities.length}},{key:"rowShouldUpdate",value:function(e,t){var n=this._dirtyRows[e][t];return T()(void 0!==n,"missing dirtyBit for section, row: "+e+", "+t),n}},{key:"getRowData",value:function(e,t){var n=this.sectionIdentities[e],r=this.rowIdentities[e][t];return T()(void 0!==n&&void 0!==r,"rendering invalid section, row: "+e+", "+t),this._getRowData(this._dataBlob,n,r)}},{key:"getRowIDForFlatIndex",value:function(e){for(var t=e,n=0;n<this.sectionIdentities.length;n++){if(!(t>=this.rowIdentities[n].length))return this.rowIdentities[n][t];t-=this.rowIdentities[n].length}return null}},{key:"getSectionIDForFlatIndex",value:function(e){for(var t=e,n=0;n<this.sectionIdentities.length;n++){if(!(t>=this.rowIdentities[n].length))return this.sectionIdentities[n];t-=this.rowIdentities[n].length}return null}},{key:"getSectionLengths",value:function(){for(var e=[],t=0;t<this.sectionIdentities.length;t++)e.push(this.rowIdentities[t].length);return e}},{key:"sectionHeaderShouldUpdate",value:function(e){var t=this._dirtySections[e];return T()(void 0!==t,"missing dirtyBit for section: "+e),t}},{key:"getSectionHeaderData",value:function(e){if(!this._getSectionHeaderData)return null;var t=this.sectionIdentities[e];return T()(void 0!==t,"renderSection called on invalid section: "+e),this._getSectionHeaderData(this._dataBlob,t)}},{key:"_calculateDirtyArrays",value:function(e,t,n){for(var r,o=I(t),i={},a=0;a<n.length;a++){var s=t[a];T()(!i[s],"SectionID appears more than once: "+s),i[s]=I(n[a])}this._dirtySections=[],this._dirtyRows=[];for(var l=0;l<this.sectionIdentities.length;l++){r=!o[s=this.sectionIdentities[l]];var c=this._sectionHeaderHasChanged;!r&&c&&(r=c(this._getSectionHeaderData(e,s),this._getSectionHeaderData(this._dataBlob,s))),this._dirtySections.push(!!r),this._dirtyRows[l]=[];for(var u=0;u<this.rowIdentities[l].length;u++){var d=this.rowIdentities[l][u];r=!o[s]||!i[s][d]||this._rowHasChanged(this._getRowData(e,s,d),this._getRowData(this._dataBlob,s,d)),this._dirtyRows[l].push(!!r)}}}}]),e}(),x=n(43),P=n.n(x);var N={className:w.a.string,prefixCls:w.a.string,listPrefixCls:w.a.string,listViewPrefixCls:w.a.string,style:w.a.object,contentContainerStyle:w.a.object,onScroll:w.a.func},O=function(e){function t(){var e,n,r,o;l()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),D.call(r),o=n,h()(r,o)}return p()(t,e),u()(t,[{key:"componentWillUpdate",value:function(e){this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||!this.handleScroll||(this.props.useBodyScroll?window.removeEventListener("scroll",this.handleScroll):this.ScrollViewRef.removeEventListener("scroll",this.handleScroll))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||!this.handleScroll||setTimeout(function(){t.props.useBodyScroll?window.addEventListener("scroll",t.handleScroll):t.ScrollViewRef.addEventListener("scroll",t.handleScroll)},0)}},{key:"componentDidMount",value:function(){var e=this,t=function(t){return e.props.onScroll&&e.props.onScroll(t,e.getMetrics())};this.props.scrollEventThrottle&&(t=function(e,t){var n=!0,r=!0;return function(o){n&&(n=!1,setTimeout(function(){n=!0,e(o)},t),r&&(e(o),r=!1))}}(t,this.props.scrollEventThrottle)),this.handleScroll=t,this.onLayout=function(){return e.props.onLayout({nativeEvent:{layout:{width:window.innerWidth,height:window.innerHeight}}})},this.props.useBodyScroll?(window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.onLayout)):this.ScrollViewRef.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){this.props.useBodyScroll?(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.onLayout)):this.ScrollViewRef.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,i=t.prefixCls,a=t.listPrefixCls,s=t.listViewPrefixCls,l=t.style,c=void 0===l?{}:l,u=t.contentContainerStyle,d=void 0===u?{}:u,h=t.useBodyScroll,f=t.pullToRefresh,p=i||s||"",v={ref:function(t){return e.ScrollViewRef=t||e.ScrollViewRef},style:o()({},h?{}:{position:"relative",overflow:"auto",WebkitOverflowScrolling:"touch"},c),className:P()(r,p+"-scrollview")},g={ref:function(t){return e.InnerScrollViewRef=t},style:o()({position:"absolute",minWidth:"100%"},d),className:P()(p+"-scrollview-content",a)},w=function(t){return m.a.cloneElement(f,{getScrollContainer:t?function(){return document.body}:function(){return e.ScrollViewRef}},n)};return h?f?m.a.createElement("div",v,w(!0)):m.a.createElement("div",v,n):f?m.a.createElement("div",v,m.a.createElement("div",g,w())):m.a.createElement("div",v,m.a.createElement("div",g,n))}}]),t}(m.a.Component);O.propTypes=N;var D=function(){var e=this;this.getMetrics=function(){var t=!e.props.horizontal;if(e.props.useBodyScroll){var n=document.scrollingElement?document.scrollingElement:document.body;return{visibleLength:window[t?"innerHeight":"innerWidth"],contentLength:e.ScrollViewRef?e.ScrollViewRef[t?"scrollHeight":"scrollWidth"]:0,offset:n[t?"scrollTop":"scrollLeft"]}}return{visibleLength:e.ScrollViewRef[t?"offsetHeight":"offsetWidth"],contentLength:e.ScrollViewRef[t?"scrollHeight":"scrollWidth"],offset:e.ScrollViewRef[t?"scrollTop":"scrollLeft"]}},this.getInnerViewNode=function(){return e.InnerScrollViewRef},this.scrollTo=function(){var t;e.props.useBodyScroll?(t=window).scrollTo.apply(t,arguments):(e.ScrollViewRef.scrollLeft=arguments.length<=0?void 0:arguments[0],e.ScrollViewRef.scrollTop=arguments.length<=1?void 0:arguments[1])}},B=O,M=function(e){function t(){return l()(this,t),h()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p()(t,e),u()(t,[{key:"shouldComponentUpdate",value:function(e){return e.shouldUpdate}},{key:"render",value:function(){return this.props.render()}}]),t}(m.a.Component),V=function(e){function t(){var e,n,r,o;l()(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=h()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),j.call(r),o=n,h()(r,o)}return p()(t,e),u()(t,[{key:"componentWillMount",value:function(){this.scrollProperties={visibleLength:null,contentLength:null,offset:0},this._childFrames=[],this._visibleRows={},this._prevRenderedRowsCount=0,this._sentEndForContentLength=null}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||this.setState(function(n,r){return t._prevRenderedRowsCount=0,{curRenderedRowsCount:Math.min(Math.max(n.curRenderedRowsCount,e.initialListSize),e.dataSource.getRowCount())}},function(){return t._renderMoreRowsIfNeeded()})}},{key:"render",value:function(){for(var e=this,t=this.props.dataSource,n=t.rowIdentities,r=[],i=0,s=0;s<n.length;s++){var l=t.sectionIdentities[s],c=n[s];if(0!==c.length){var u=void 0;if(this.props.renderSectionHeader){var d=i>=this._prevRenderedRowsCount&&t.sectionHeaderShouldUpdate(s);u=m.a.createElement(M,{key:"s_"+l,shouldUpdate:!!d,render:this.props.renderSectionHeader.bind(null,t.getSectionHeaderData(s),l)})}for(var h=[],f=0;f<c.length;f++){var p=c[f],v=l+"_"+p,g=i>=this._prevRenderedRowsCount&&t.rowShouldUpdate(s,f),w=m.a.createElement(M,{key:"r_"+v,shouldUpdate:!!g,render:this.props.renderRow.bind(null,t.getRowData(s,f),l,p,this.onRowHighlighted)});if(h.push(w),this.props.renderSeparator&&(f!==c.length-1||s===n.length-1)){var y=this.state.highlightedRow.sectionID===l&&(this.state.highlightedRow.rowID===p||this.state.highlightedRow.rowID===c[f+1]),S=this.props.renderSeparator(l,p,y);S&&h.push(S)}if(++i===this.state.curRenderedRowsCount)break}var _=m.a.cloneElement(this.props.renderSectionBodyWrapper(l),{className:this.props.sectionBodyClassName},h);if(this.props.renderSectionWrapper?r.push(m.a.cloneElement(this.props.renderSectionWrapper(l),{},u,_)):(r.push(u),r.push(_)),i>=this.state.curRenderedRowsCount)break}}var C=this.props,R=C.renderScrollComponent,b=a()(C,["renderScrollComponent"]);return m.a.cloneElement(R(o()({},b,{onScroll:this._onScroll})),{ref:function(t){return e.ListViewRef=t},onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout},this.props.renderHeader?this.props.renderHeader():null,m.a.cloneElement(b.renderBodyComponent(),{},r),this.props.renderFooter?this.props.renderFooter():null,b.children)}}]),t}(m.a.Component);V.DataSource=H,V.propTypes=o()({},B.propTypes,{dataSource:w.a.instanceOf(H).isRequired,renderSeparator:w.a.func,renderRow:w.a.func.isRequired,initialListSize:w.a.number,onEndReached:w.a.func,onEndReachedThreshold:w.a.number,pageSize:w.a.number,renderFooter:w.a.func,renderHeader:w.a.func,renderSectionHeader:w.a.func,renderScrollComponent:w.a.func,scrollRenderAheadDistance:w.a.number,onChangeVisibleRows:w.a.func,scrollEventThrottle:w.a.number,renderBodyComponent:w.a.func,renderSectionWrapper:w.a.func,renderSectionBodyWrapper:w.a.func,sectionBodyClassName:w.a.string,listViewPrefixCls:w.a.string,useBodyScroll:w.a.bool}),V.defaultProps={initialListSize:10,pageSize:1,renderScrollComponent:function(e){return m.a.createElement(B,e)},renderBodyComponent:function(){return m.a.createElement("div",null)},renderSectionBodyWrapper:function(e){return m.a.createElement("div",{key:e})},sectionBodyClassName:"list-view-section-body",listViewPrefixCls:"rmc-list-view",scrollRenderAheadDistance:1e3,onEndReachedThreshold:1e3,scrollEventThrottle:50,scrollerOptions:{}};var j=function(){var e=this;this.state={curRenderedRowsCount:this.props.initialListSize,highlightedRow:{}},this.getMetrics=function(){return{contentLength:e.scrollProperties.contentLength,totalRows:e.props.dataSource.getRowCount(),renderedRows:e.state.curRenderedRowsCount,visibleRows:Object.keys(e._visibleRows).length}},this.getInnerViewNode=function(){return e.ListViewRef.getInnerViewNode()},this.scrollTo=function(){var t;e.ListViewRef&&e.ListViewRef.scrollTo&&(t=e.ListViewRef).scrollTo.apply(t,arguments)},this.onRowHighlighted=function(t,n){e.setState({highlightedRow:{sectionID:t,rowID:n}})},this._onContentSizeChange=function(t,n){var r=e.props.horizontal?t:n;r!==e.scrollProperties.contentLength&&(e.scrollProperties.contentLength=r,e._renderMoreRowsIfNeeded()),e.props.onContentSizeChange&&e.props.onContentSizeChange(t,n)},this._onLayout=function(t){var n=t.nativeEvent.layout,r=n.width,o=n.height,i=e.props.horizontal?r:o;i!==e.scrollProperties.visibleLength&&(e.scrollProperties.visibleLength=i,e._renderMoreRowsIfNeeded()),e.props.onLayout&&e.props.onLayout(t)},this._maybeCallOnEndReached=function(t){return!!(e.props.onEndReached&&e.scrollProperties.contentLength!==e._sentEndForContentLength&&e._getDistanceFromEnd(e.scrollProperties)<e.props.onEndReachedThreshold&&e.state.curRenderedRowsCount===e.props.dataSource.getRowCount())&&(e._sentEndForContentLength=e.scrollProperties.contentLength,e.props.onEndReached(t),!0)},this._renderMoreRowsIfNeeded=function(){null!==e.scrollProperties.contentLength&&null!==e.scrollProperties.visibleLength&&e.state.curRenderedRowsCount!==e.props.dataSource.getRowCount()?e._getDistanceFromEnd(e.scrollProperties)<e.props.scrollRenderAheadDistance&&e._pageInNewRows():e._maybeCallOnEndReached()},this._pageInNewRows=function(){e.setState(function(t,n){var r=Math.min(t.curRenderedRowsCount+n.pageSize,n.dataSource.getRowCount());return e._prevRenderedRowsCount=t.curRenderedRowsCount,{curRenderedRowsCount:r}},function(){e._prevRenderedRowsCount=e.state.curRenderedRowsCount})},this._getDistanceFromEnd=function(e){return e.contentLength-e.visibleLength-e.offset},this._onScroll=function(t,n){e.ListViewRef&&(e.scrollProperties=n,e._maybeCallOnEndReached(t)||e._renderMoreRowsIfNeeded(),e.props.onEndReached&&e._getDistanceFromEnd(e.scrollProperties)>e.props.onEndReachedThreshold&&(e._sentEndForContentLength=null),e.props.onScroll&&e.props.onScroll(t))}},z=V,q=n(13),W=n.n(q);function Q(e){window.document.body.scrollTop=e,window.document.documentElement.scrollTop=e}var A=function(e){function t(e){l()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return F.call(n),n.state={pageSize:e.pageSize,_delay:!1},n}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.dataChange(this.props),this.getQsInfo()}},{key:"componentWillReceiveProps",value:function(e){this.props.dataSource!==e.dataSource&&this.dataChange(e)}},{key:"componentDidUpdate",value:function(){this.getQsInfo()}},{key:"componentWillUnmount",value:function(){this._timer&&clearTimeout(this._timer),this._hCache=null}},{key:"renderQuickSearchBar",value:function(e,t){var n=this,r=this.props,o=r.dataSource,i=r.prefixCls,a=o.sectionIdentities.map(function(e){return{value:e,label:o._getSectionHeaderData(o._dataBlob,e)}});return m.a.createElement("ul",{ref:function(e){return n.quickSearchBarRef=e},className:i+"-quick-search-bar",style:t,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd},m.a.createElement("li",{"data-qf-target":e.value,onClick:function(){return n.onQuickSearchTop(void 0,e.value)}},e.label),a.map(function(e){return m.a.createElement("li",{key:e.value,"data-qf-target":e.value,onClick:function(){return n.onQuickSearch(e.value)}},e.label)}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n._delay,i=n.pageSize,s=this.props,l=s.className,c=s.prefixCls,u=s.children,d=s.quickSearchBarTop,h=s.quickSearchBarStyle,f=s.initialListSize,p=void 0===f?Math.min(20,this.props.dataSource.getRowCount()):f,v=s.showQuickSearchIndicator,g=s.renderSectionHeader,w=s.sectionHeaderClassName,y=a()(s,["className","prefixCls","children","quickSearchBarTop","quickSearchBarStyle","initialListSize","showQuickSearchIndicator","renderSectionHeader","sectionHeaderClassName"]);return m.a.createElement("div",{className:c+"-container"},r&&this.props.delayActivityIndicator,m.a.createElement(z,o()({},y,{ref:function(e){return t.indexedListViewRef=e},className:P()(c,l),initialListSize:p,pageSize:i,renderSectionHeader:function(e,n){return m.a.cloneElement(g(e,n),{ref:function(e){return t.sectionComponents[n]=e},className:w||c+"-section-header"})}}),u),this.renderQuickSearchBar(d,h),v?m.a.createElement("div",{className:P()((e={},W()(e,c+"-qsindicator",!0),W()(e,c+"-qsindicator-hide",!v||!this.state.showQuickSearchIndicator),e)),ref:function(e){return t.qsIndicatorRef=e}}):null)}}]),t}(m.a.Component);A.propTypes=o()({},z.propTypes,{children:w.a.any,prefixCls:w.a.string,className:w.a.string,sectionHeaderClassName:w.a.string,quickSearchBarTop:w.a.object,quickSearchBarStyle:w.a.object,onQuickSearch:w.a.func,showQuickSearchIndicator:w.a.bool}),A.defaultProps={prefixCls:"rmc-indexed-list",quickSearchBarTop:{value:"#",label:"#"},onQuickSearch:function(){},showQuickSearchIndicator:!1,delayTime:100,delayActivityIndicator:""};var F=function(){var e=this;this.onQuickSearchTop=function(t,n){e.props.useBodyScroll?Q(0):S.a.findDOMNode(e.indexedListViewRef.ListViewRef).scrollTop=0,e.props.onQuickSearch(t,n)},this.onQuickSearch=function(t){var n=S.a.findDOMNode(e.indexedListViewRef.ListViewRef),r=S.a.findDOMNode(e.sectionComponents[t]);e.props.useBodyScroll?Q(r.getBoundingClientRect().top-n.getBoundingClientRect().top+function(e){var t=0;do{isNaN(e.offsetTop)||(t+=e.offsetTop)}while(e=e.offsetParent);return t}(n)):n.scrollTop+=r.getBoundingClientRect().top-n.getBoundingClientRect().top,e.props.onQuickSearch(t)},this.onTouchStart=function(t){e._target=t.target,e._basePos=e.quickSearchBarRef.getBoundingClientRect(),document.addEventListener("touchmove",e._disableParent,!1),document.body.className=document.body.className+" "+e.props.prefixCls+"-qsb-moving",e.updateIndicator(e._target)},this.onTouchMove=function(t){if(t.preventDefault(),e._target){var n=function(e){return e.touches&&e.touches.length?e.touches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r=e._basePos,o=void 0;if(n.clientY>=r.top&&n.clientY<=r.top+e._qsHeight){var i=void 0;if((o=Math.floor((n.clientY-r.top)/e._avgH))in e._hCache&&(i=e._hCache[o][0]),i){var a=i.getAttribute("data-qf-target");e._target!==i&&(e.props.quickSearchBarTop.value===a?e.onQuickSearchTop(void 0,a):e.onQuickSearch(a),e.updateIndicator(i)),e._target=i}}}},this.onTouchEnd=function(){e._target&&(document.removeEventListener("touchmove",e._disableParent,!1),document.body.className=document.body.className.replace(new RegExp("\\s*"+e.props.prefixCls+"-qsb-moving","g"),""),e.updateIndicator(e._target,!0),e._target=null)},this.getQsInfo=function(){var t=e.quickSearchBarRef,n=t.offsetHeight,r=[];[].slice.call(t.querySelectorAll("[data-qf-target]")).forEach(function(e){r.push([e])});for(var o=n/r.length,i=0,a=0,s=r.length;a<s;a++)i=a*o,r[a][1]=[i,i+o];e._qsHeight=n,e._avgH=o,e._hCache=r},this.sectionComponents={},this.dataChange=function(t){var n=t.dataSource.getRowCount();n&&(e.setState({_delay:!0}),e._timer&&clearTimeout(e._timer),e._timer=setTimeout(function(){e.setState({pageSize:n,_delay:!1},function(){return e.indexedListViewRef._pageInNewRows()})},t.delayTime))},this.updateIndicator=function(t,n){var r=t;r.getAttribute("data-qf-target")||(r=r.parentNode),e.props.showQuickSearchIndicator&&(e.qsIndicatorRef.innerText=r.innerText.trim(),e.setState({showQuickSearchIndicator:!0}),e._indicatorTimer&&clearTimeout(e._indicatorTimer),e._indicatorTimer=setTimeout(function(){e.setState({showQuickSearchIndicator:!1})},1e3));var o=e.props.prefixCls+"-quick-search-bar-over";e._hCache.forEach(function(e){e[0].className=e[0].className.replace(o,"")}),n||(r.className=r.className+" "+o)},this._disableParent=function(e){e.preventDefault(),e.stopPropagation()}},U=A;n.d(t,"DataSource",function(){return Y}),n.d(t,"IndexedList",function(){return U}),z.IndexedList=U;var Y=z.DataSource;t.default=z},613:function(e,t,n){},615:function(e,t,n){"use strict";var r=n(558);e.exports=function(e){if(Array.isArray(e))return 0===e.length;if("object"===typeof e){if(e)for(var t in!function(e){return"undefined"!==typeof Symbol&&e[Symbol.iterator]}(e)||void 0===e.size||r(!1),e)return!1;return!0}return!e}},616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(42)),o=d(n(24)),i=d(n(25)),a=d(n(14)),s=d(n(26)),l=d(n(2)),c=d(n(612)),u=d(n(602));function d(e){return e&&e.__esModule?e:{default:e}}var h=c.default.IndexedList,f=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,o=t.listPrefixCls,i=(0,u.default)(this.props,!0),a=i.restProps,s=i.extraProps;return l.default.createElement(h,(0,r.default)({ref:function(t){return e.indexedListRef=t},sectionHeaderClassName:n+"-section-header "+o+"-body",sectionBodyClassName:n+"-section-body "+o+"-body"},a,s),this.props.children)}}]),t}(l.default.Component);t.default=f,f.defaultProps={prefixCls:"am-indexed-list",listPrefixCls:"am-list",listViewPrefixCls:"am-list-view"},e.exports=t.default}}]);
//# sourceMappingURL=2.b1c3d8da.chunk.js.map