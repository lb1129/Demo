(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{546:function(e,t,n){"use strict";var a=n(525),o=n(2),i=n.n(o);t.a=function(e){var t=Object(a.a)({},e).message,n=void 0===t?"\u65e0\u7ed3\u679c":t;return i.a.createElement("div",{className:"normalFontSizeC shallowGreyColor",style:{textAlign:"center"}},n)}},560:function(e,t,n){"use strict";var a,o,i=n(84),s=n(85),r=n(87),l=n(86),c=n(88),d=n(2),u=n.n(d),p=n(90),h=n(75),f=n(561),g=n.n(f);t.a=Object(p.b)()((o=a=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).onRowClick=function(){n.props.dispatch(Object(h.c)("/moreCase/case",n.props.rowData))},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.likeClick,n=e.rowData,a=e.style,o=void 0===a?null:a,i=e.className,s=void 0===i?null:i;return u.a.createElement("div",{className:"".concat(g.a.wrapper," ").concat(s),style:o,onClick:this.onRowClick},u.a.createElement("img",{src:n.imgUrl,alt:n.imgUrl}),u.a.createElement("div",{className:g.a.wrapper_content},u.a.createElement("p",{className:g.a.wrapper_content_title},n.title),u.a.createElement("p",{className:g.a.wrapper_content_des},n.des),u.a.createElement("ul",{className:g.a.wrapper_content_footer},u.a.createElement("li",null,u.a.createElement("i",{className:"iconfont icon-chakan"}),n.views),u.a.createElement("li",null,u.a.createElement("i",{className:"iconfont icon-xiaoxi"}),n.comments),u.a.createElement("li",{onClick:function(e){e.stopPropagation(),t()}},u.a.createElement("i",{className:"iconfont icon-i-good"}),n.likes))))}}]),t}(d.Component),a.defaultProps={likeClick:function(){},rowData:{}},o))},561:function(e,t,n){e.exports={wrapper:"index_wrapper__3DJ7H",wrapper_content:"index_wrapper_content__Y1ZN0",wrapper_content_title:"index_wrapper_content_title__1duEk",wrapper_content_des:"index_wrapper_content_des__eseFn",wrapper_content_footer:"index_wrapper_content_footer__1DxxL"}},730:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return D});n(573);var a=n(574),o=n.n(a),i=(n(731),n(734)),s=n.n(i),r=(n(527),n(531)),l=n.n(r),c=(n(544),n(545)),d=n.n(c),u=n(89),p=(n(222),n(115)),h=n.n(p),f=n(525),g=n(541),v=n(84),m=n(85),w=n(87),b=n(86),_=n(88),y=(n(549),n(550)),C=n.n(y),S=n(2),O=n.n(S),E=n(33),k=n.n(E),x=n(546),R=n(560),L=n(65),N=n(50),j=n(159),P=n(735),M=n.n(P),B=C.a.alert,D=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(w.a)(this,Object(b.a)(t).call(this,e))).getCaseList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageNo,a=void 0===t?n.state.pageNo:t,o=e.keyword,i=void 0===o?n.state.keyword:o,s=e.dataBlobs,r=void 0===s?n.state.dataBlobs:s,l=n.state,c=l.pageSize,d=l.dataSource;n.setState({isLoading:!0,keyword:i}),Object(L.a)({url:N.a.caseCollectList,data:{pageNo:a,pageSize:c,keyword:i}}).then(function(e){var t=e.list,o=e.pageTurn,i=o.nextPage,s=o.rowCount,l=Object(g.a)(r).concat(Object(g.a)(t));n.setState({hasMore:!(l.length>=s),pageNo:i,dataBlobs:l,dataSource:d.cloneWithRows(l.concat()),isLoading:!1}),1===a&&n.lv.scrollTo(0,0)}).catch(function(e){n.setState({isLoading:!1})})},n.onEndReached=function(e){var t=n.state,a=t.isLoading,o=t.hasMore;!a&&o&&n.getCaseList()},n.onRefresh=function(e){var t=Object(f.a)({},e);console.log(t)},n.del=function(e,t){Object(L.a)({url:N.a.saveCollects,data:{id:e.id,status:0}}).then(function(e){h.a.success(e,.7);var a=n.state,o=a.dataBlobs,i=a.dataSource,s=Object(g.a)(o);s.splice(t,1),n.setState({dataBlobs:s,dataSource:i.cloneWithRows(s)})}).catch(function(e){})},n.onLikes=function(e,t){Object(L.a)({url:N.a.saveLikes,data:{id:e.id,status:1}}).then(function(e){h.a.success(e,.7);var a=n.state,o=a.dataBlobs,i=a.dataSource,s=Object(g.a)(o),r=Object(u.a)({},s[t]);r.likes++,s.splice(t,1,r),n.setState({dataBlobs:s,dataSource:i.cloneWithRows(s)})}).catch(function(e){})},n.state={pageNo:1,pageSize:10,hasMore:!0,dataBlobs:[],dataSource:new d.a.DataSource({rowHasChanged:function(e,t){return e!==t}}),isLoading:!1,height:0,keyword:""},n}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=document.documentElement.clientHeight-k.a.findDOMNode(this.lv).getBoundingClientRect().top;this.setState({height:e}),this.getCaseList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.height,a=t.dataBlobs,i=t.dataSource;return O.a.createElement("div",{className:"bg_grey_list_view"},O.a.createElement(d.a,{ref:function(t){return e.lv=t},dataSource:i,renderHeader:function(){return a.length?null:O.a.createElement(x.a,null)},renderRow:function(t,n,a){return t.des=t.styleName,t.imgUrl=j.d+t.surfacePlotUrl,O.a.createElement(s.a,{key:a,style:{marginBottom:"0.2rem"},right:[{text:"\u5220\u9664",onPress:function(n){B("\u63d0\u793a","\u786e\u8ba4\u5220\u9664?",[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u8ba4",onPress:e.del.bind(e,t,a)}])},className:M.a.del}]},O.a.createElement(l.a.Item,null,O.a.createElement(R.a,{style:{marginBottom:10},rowData:t,likeClick:e.onLikes.bind(e,t,a)})))},style:{height:n},onEndReached:this.onEndReached,onEndReachedThreshold:80,pullToRefresh:O.a.createElement(o.a,{direction:"down",distanceToRefresh:40,onRefresh:this.onRefresh})}))}}]),t}(S.Component)},731:function(e,t,n){"use strict";n(221),n(732)},732:function(e,t,n){},734:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(24)),o=d(n(25)),i=d(n(14)),s=d(n(26)),r=d(n(43)),l=d(n(794)),c=d(n(2));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.prefixCls,o=e.left,i=void 0===o?[]:o,s=e.right,d=void 0===s?[]:s,u=e.autoClose,p=e.disabled,h=e.onOpen,f=e.onClose,g=e.children,v=(0,r.default)(a,t);return i.length||d.length?c.default.createElement("div",{style:n,className:t},c.default.createElement(l.default,{prefixCls:a,left:i,right:d,autoClose:u,disabled:p,onOpen:h,onClose:f},g)):c.default.createElement("div",{style:n,className:v},g)}}]),t}(c.default.Component);u.defaultProps={prefixCls:"am-swipe",autoClose:!1,disabled:!1,left:[],right:[],onOpen:function(){},onClose:function(){}},t.default=u,e.exports=t.default},735:function(e,t,n){e.exports={del:"index_del__31dX-",product:"index_product__czj5P",extra:"index_extra__3YdRa"}},794:function(e,t,n){"use strict";n.r(t);var a=n(42),o=n.n(a),i=n(13),s=n.n(i),r=n(24),l=n.n(r),c=n(25),d=n.n(c),u=n(14),p=n.n(u),h=n(26),f=n.n(h),g=n(2),v=n.n(g),m=n(33),w=n.n(m),b=n(601),_=n(43),y=n.n(_),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n};var S=function(e){function t(e){l()(this,t);var n=p()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onCloseSwipe=function(e){(n.openedLeft||n.openedRight)&&(function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e;){if(n.call(e,t))return e;e=e.parentElement}return null}(e.target,"."+n.props.prefixCls+"-actions")||(e.preventDefault(),n.close()))},n.onPanStart=function(e){var t=e.direction,a=e.moveStatus.x,o=2===t,i=4===t;if(o||i){var s=n.props,r=s.left,l=s.right;n.needShowRight=o&&l.length>0,n.needShowLeft=i&&r.length>0,n.left&&(n.left.style.visibility=n.needShowRight?"hidden":"visible"),n.right&&(n.right.style.visibility=n.needShowLeft?"hidden":"visible"),(n.needShowLeft||n.needShowRight)&&(n.swiping=!0,n.setState({swiping:n.swiping}),n._setStyle(a))}},n.onPanMove=function(e){var t=e.moveStatus,a=e.srcEvent,o=t.x;n.swiping&&(a&&a.preventDefault&&a.preventDefault(),n._setStyle(o))},n.onPanEnd=function(e){if(n.swiping){var t=e.moveStatus.x,a=n.needShowRight&&Math.abs(t)>n.btnsRightWidth/2,o=n.needShowLeft&&Math.abs(t)>n.btnsLeftWidth/2;a?n.doOpenRight():o?n.doOpenLeft():n.close(),n.swiping=!1,n.setState({swiping:n.swiping}),n.needShowLeft=!1,n.needShowRight=!1}},n.doOpenLeft=function(){n.open(n.btnsLeftWidth,!0,!1)},n.doOpenRight=function(){n.open(-n.btnsRightWidth,!0,!1)},n._setStyle=function(e){var t=e>0?n.btnsLeftWidth:-n.btnsRightWidth,a=n._getContentEasing(e,t);n.content.style.left=a+"px",n.cover&&(n.cover.style.display=Math.abs(e)>0?"block":"none",n.cover.style.left=a+"px")},n.open=function(e,t,a){n.openedLeft||n.openedRight||!n.props.onOpen||n.props.onOpen(),n.openedLeft=t,n.openedRight=a,n._setStyle(e)},n.close=function(){(n.openedLeft||n.openedRight)&&n.props.onClose&&n.props.onClose(),n._setStyle(0),n.openedLeft=!1,n.openedRight=!1},n.onTouchMove=function(e){n.swiping&&e.preventDefault()},n.state={swiping:!1},n.openedLeft=!1,n.openedRight=!1,n}return f()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.btnsLeftWidth=this.left?this.left.offsetWidth:0,this.btnsRightWidth=this.right?this.right.offsetWidth:0,document.body.addEventListener("touchstart",this.onCloseSwipe,!0)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("touchstart",this.onCloseSwipe,!0)}},{key:"onBtnClick",value:function(e,t){var n=t.onPress;n&&n(e),this.props.autoClose&&this.close()}},{key:"_getContentEasing",value:function(e,t){var n=Math.abs(e)-Math.abs(t),a=t>0?1:-1;return n>0?(e=t+Math.pow(n,.85)*a,Math.abs(e)>Math.abs(t)?t:e):e}},{key:"renderButtons",value:function(e,t){var n=this,a=this.props.prefixCls;return e&&e.length?v.a.createElement("div",{className:a+"-actions "+a+"-actions-"+t,ref:function(e){return n[t]=e}},e.map(function(e,t){return v.a.createElement("div",{key:t,className:a+"-btn "+(e.hasOwnProperty("className")?e.className:""),style:e.style,role:"button",onClick:function(t){return n.onBtnClick(t,e)}},v.a.createElement("div",{className:a+"-btn-text"},e.text||"Click"))})):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,a=t.left,i=t.right,r=t.disabled,l=t.children,c=C(t,["prefixCls","left","right","disabled","children"]),d=(c.autoClose,c.onOpen,c.onClose,C(c,["autoClose","onOpen","onClose"])),u=y()(n,s()({},n+"-swiping",this.state.swiping)),p={ref:function(t){return e.content=w.a.findDOMNode(t)}};return!a.length&&!i.length||r?v.a.createElement("div",o()({},p,d),l):v.a.createElement("div",o()({className:u},d),v.a.createElement("div",{className:n+"-cover",ref:function(t){return e.cover=t}}),this.renderButtons(a,"left"),this.renderButtons(i,"right"),v.a.createElement(b.a,o()({onTouchMove:this.onTouchMove,onPanStart:this.onPanStart,onPanMove:this.onPanMove,onPanEnd:this.onPanEnd,onPanCancel:this.onPanEnd,onSwipeLeft:this.doOpenRight,onSwipeRight:this.doOpenLeft,direction:"horizontal"},p),v.a.createElement("div",{className:n+"-content"},l)))}}]),t}(v.a.Component),O=S;S.defaultProps={prefixCls:"rc-swipeout",autoClose:!1,disabled:!1,left:[],right:[],onOpen:function(){},onClose:function(){}};t.default=O}}]);
//# sourceMappingURL=16.52f466c2.chunk.js.map