(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[43],{121:function(e,t,n){"use strict";var a=n(24),r=n(5),o=n(6),i=n(8),c=n(2),l=n(7),s=n(3),u=n(0),h=n.n(u),d=n(158),f=n(40),p=n(17),m=function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}};t.a=function(e){return function(t){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(s.a)(Object(s.a)(t))),t.handleScroll=t.handleScroll.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop,t=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==t.length){var n=t[0].id;t.forEach(function(t){var a=document.querySelector("#".concat(t.id));a&&a.offsetTop<=e&&(n=t.id)}),this.$willUnmount||this.setState({active:n})}}},{key:"renderNav",value:function(){var e=this,t=this.state,n=t.active,a=t.headings;return h.a.createElement(d.a,{className:Object(p.f)("sticky"),top:50},h.a.createElement("div",{className:Object(p.f)("nav")},a.map(function(t,a){var r=t.children.filter(function(e){return"string"==typeof e});return h.a.createElement("a",{key:a,className:Object(p.f)("level-".concat(t.level),n===t.id&&"active"),onClick:m.bind(e,t.id)},r)})))}},{key:"render",value:function(){return h.a.createElement("div",{className:Object(p.f)("_")},h.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(h.a.Component)}},1254:function(e,t,n){"use strict";var a=n(37),r=n(138),o=n(139),i=n(126),c=n(128),l=n(20),s=n(5),u=n(6),h=n(8),d=n(2),f=n(18),p=n(7),m=n(3),b=n(0),v=n.n(b),g=n(27),j=n(9),O=n(140),y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={height:0},n.bindShadow=n.bindShadow.bind(Object(m.a)(Object(m.a)(n))),n.handleBlur=n.handleBlur.bind(Object(m.a)(Object(m.a)(n))),n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.resize=n.resize.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){Object(f.a)(Object(d.a)(t.prototype),"componentDidMount",this).call(this),this.props.autosize&&this.resize()}},{key:"bindShadow",value:function(e){this.shadow=e}},{key:"resize",value:function(e){e&&(this.shadow.value=e);var t=this.shadow?this.shadow.scrollHeight:0;this.setState({height:t})}},{key:"handleChange",value:function(e){this.props.onChange(e.target.value),this.props.autosize&&this.resize(e.target.value)}},{key:"handleBlur",value:function(e){var t=e.target.value,n=this.props,a=n.forceChange,r=n.onBlur;r&&r(e),a(t)}},{key:"renderInfo",value:function(){var e=this.props.info;if("function"!=typeof e)return null;var t=e(this.props.value);if(!t)return null;var n=t instanceof Error,a=n?t.message:t;return v.a.createElement("div",{key:"info",style:{minWidth:"auto"},className:Object(j.n)("bottom-right",n?"error":"tip")},a)}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,e.maxHeight),a=(e.info,Object(l.a)(e,["autosize","onChange","maxHeight","info"])),r=this.state.height||"auto",o=t?Object(j.n)("auto-size"):"",i=[v.a.createElement("textarea",Object.assign({},Object(O.a)(a),{key:"t",className:o,style:{height:r,maxHeight:n,overflow:"auto"},onChange:this.handleChange,onBlur:this.handleBlur})),this.renderInfo()];return t&&i.push(v.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:Object(j.n)("shadow"),rows:a.rows,defaultValue:a.value})),i}}]),t}(g.b);y.defaultProps={value:"",rows:4};var x=y,k=Object(a.a)(i.a,Object(c.a)({}),Object(r.a)(400),o.a)(x);k.displayName="ShineoutTextarea";t.a=k},127:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),i=n(24),c=n(5),l=n(6),s=n(8),u=n(2),h=n(7),d=n(3),f=n(160),p=n.n(f),m=n(36),b=n(17),v=n(25),g=n(161),j=n.n(g),O=(n(162),n(163),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).bindElement=function(e){n.element=e},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;j.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return r.a.createElement("pre",{className:this.props.language||"lang-jsx"},r.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),t}(a.PureComponent));O.defaultProps={language:"lang-jsx"};var y=n(147),x=n(32),k=n(27),E=n(134),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(E.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(E.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:r.a.createElement("span",{ref:this.placeholderRef},a)}}]),t}(k.b),C=n(47),H=n(40),S=r.a.createElement("div",{className:Object(b.a)("placeholder")},r.a.createElement(x.a,null)),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setCodeBlockHeight=function(e){n.codeHeight=e},n.bindCodeBlock=function(e){n.codeblock=e},n.state={showcode:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"collapse",value:function(e,t,n){var a=this;this.codeblock.style.height="".concat(e*(t-1),"px"),t>1&&setTimeout(function(){a.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var t=this,n=!this.state.showcode;this.setState({showcode:n},function(){if(n)t.codeblock.style.height="".concat(t.codeHeight,"px");else{var a=t.codeHeight%15;a>0&&t.collapse(a,1,e),t.collapse((t.codeHeight-a)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return r.a.createElement("a",{href:"javascript:;",className:Object(b.a)("toggle"),onClick:this.toggleCode.bind(this,e)},r.a.createElement(C.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,o=e.name,i=e.rawText,c=this.state.showcode,l=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=H.a.location.search;if(0===s.indexOf("?example=")&&(s=s.replace("?example=",""),o.indexOf(s)<0))return null;var u=this.props.title.split("\n"),h=Object(y.a)(u),d=h[0],f=h.slice(1);return d&&(d=d.trim()),r.a.createElement(a.Fragment,null,d&&r.a.createElement("h3",{key:"0",id:n},d),r.a.createElement(w,{placeholder:S},r.a.createElement("div",{className:Object(b.a)("_",c&&"showcode")},r.a.createElement("div",{className:Object(b.a)("body")},Object(a.createElement)(t)),this.props.title.length>0&&r.a.createElement("div",{className:Object(b.a)("desc")},f.map(function(e,t){return r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),r.a.createElement("div",{ref:this.bindCodeBlock,className:Object(b.a)("code")},r.a.createElement(O,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),t}(a.Component);z.defaultProps={rawText:""};var T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=t?"pre":"div";return r.a.createElement("div",{onClick:this.toggle,className:Object(b.e)("console")},r.a.createElement(a,null,n))}}]),t}(a.PureComponent);T.defaultProps={children:[]};var N=T,B=/^<code name="([\w|-]+)" /,P=/^<example name="([\w|-]+)"/,D=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,a=e.children,o="".concat(t,"-").concat(a[0]),i="h".concat(t);if("object"==typeof a[0])return r.a.createElement(i,null,a);if(!n.cache[o]){var c="heading-".concat(Object(m.b)());2!==t&&3!==t||n.appendHeading({id:c,level:t,children:a}),n.cache[o]=r.a.createElement(i,{id:c},a)}return n.cache[o]},n.headings=[],n.appendHeading=n.appendHeading.bind(Object(d.a)(Object(d.a)(n))),n.cache={},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[r.a.createElement(O,{key:"cb",value:t.text})].concat(Object(i.a)(t.log.map(function(e,t){return r.a.createElement(N,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var e=this;if(this.cache.examples)return this.cache.examples;var t=this.props.examples;if(!t)return r.a.createElement("div",null);var n=Object(v.a)("示例","Example"),a="heading-".concat(Object(m.b)());return this.appendHeading({id:a,level:2,children:[n]}),this.cache.examples=[r.a.createElement("h2",{key:"h",id:a},n)].concat(Object(i.a)(t.map(function(t,n){if(/\d+-/.test(t.name)){var a="heading-".concat(t.name),i=t.title.split("\n"),c=Object(o.a)(i,1)[0];return e.appendHeading({id:a,level:3,children:[c]}),r.a.createElement(z,Object.assign({key:n,id:a},t,{lazy:n>2}))}}))),this.cache.examples}},{key:"renderExample",value:function(e){var t="example-".concat(e);if(!this.cache[t]){var n=(this.props.examples||[]).find(function(t){return t.name===e});this.cache[t]=n?r.a.createElement(z,n):null}return this.cache[t]}},{key:"render",value:function(){var e=this,t=this.props.source;return this.headings=[],r.a.createElement(p.a,{className:Object(b.e)("_"),source:t,renderers:{code:O,heading:this.renderHeading,html:function(t){var n=t.value;if("<example />"===n)return e.renderExamples();var a=n.match(P);if(a)return e.renderExample(a[1],n.indexOf("noExpand")>=0);if("<br>"===n||"<br />"===n)return r.a.createElement("br",null);var o=n.match(B);return o?e.renderCode(o[1]):null},link:function(e){var t=e.href,n=e.children,a=t.indexOf(!1)?"_blank":void 0;return r.a.createElement("a",{href:t,target:a},n)}}})}}]),t}(a.PureComponent);D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var I=n(46),F=n(121);n.d(t,"a",function(){return M});var L,V=((L=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={source:n.props.source},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(t){e.setState({source:t.default})})}},{key:"render",value:function(){var e=this.state.source;return e?r.a.createElement(D,Object.assign({},this.props,{source:e})):r.a.createElement(I.a,{style:{minHeight:200}})}}]),t}(a.PureComponent)).defaultProps={loader:void 0,source:void 0},L);t.b=V;function M(e){return Object(F.a)(function(t){return r.a.createElement(V,Object.assign({},t,{loader:e}))})}},128:function(e,t,n){"use strict";var a=n(20),r=n(5),o=n(6),i=n(8),c=n(2),l=n(7),s=n(3),u=n(0),h=n.n(u),d=n(11),f=n.n(d),p=n(27),m=n(37),b=n(9);t.a=Object(m.b)(function(e,t){var n,u;return u=n=function(n){function u(e){var t;return Object(r.a)(this,u),(t=Object(i.a)(this,Object(c.a)(u).call(this,e))).state={focus:e.autoFocus},t.handleBlur=t.handleBlur.bind(Object(s.a)(Object(s.a)(t))),t.handleFocus=t.handleFocus.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(u,n),Object(o.a)(u,[{key:"handleBlur",value:function(e){this.setState({focus:!1});var t=this.props.onBlur;t&&t(e)}},{key:"handleFocus",value:function(e){this.setState({focus:!0});var t=this.props.onFocus;t&&t(e)}},{key:"renderHelp",value:function(e){var t=this.props,n=t.error,a=t.tip,r=t.popover,o=["tip",r||"bottom-left"];return n&&r?(o.push("error"),h.a.createElement("div",{className:b.n.apply(void 0,o)},n.message)):a&&e?h.a.createElement("div",{className:Object(b.n)([].concat(o))},a):null}},{key:"render",value:function(){var n=this.props,r=(n.className,n.border),o=n.size,i=(n.tip,n.popover),c=n.width,l=n.style,s=n.error,u=Object(a.a)(n,["className","border","size","tip","popover","width","style","error"]),d=this.state.focus,p=e.tag||"label",m=Object.assign({width:c},l),v=f()(Object(b.n)("_",d&&"focus",!0===u.disabled&&"disabled",e.isGroup&&"group",o,m.width&&"inline",!r&&"no-border",e.overflow&&"overflow-".concat(e.overflow),s&&"invalid",i&&s&&"focus"),Object(b.c)(e.isGroup&&"group"),"function"==typeof e.className?e.className(this.props):e.className,this.props.className);return h.a.createElement(p,{className:v,style:m},h.a.createElement(t,Object.assign({},u,{size:o,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(d))}}]),u}(p.a),n.defaultProps={border:!0,style:{}},u})},134:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(145),r=n(36),o={},i=null,c=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>l){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function u(e){e&&delete o[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){c||(c=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>l||(delete o[e],a())}),c=!1),i=null},80)},a.a)},138:function(e,t,n){"use strict";var a=n(20),r=n(5),o=n(6),i=n(8),c=n(2),l=n(7),s=n(3),u=n(0),h=n.n(u),d=n(37);t.a=Object(d.b)(function(e,t){var n,d;return d=n=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(i.a)(this,Object(c.a)(n).call(this,e))).state={value:e.value},t.handleChange=t.handleChange.bind(Object(s.a)(Object(s.a)(t))),t.forceChange=t.forceChange.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,e),Object(o.a)(n,[{key:"getValue",value:function(){return this.changeLocked?this.state.value:this.props.value}},{key:"handleChange",value:function(e){for(var t=this,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var o,i=this.props.delay;0!==i?(this.setState({value:e}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){var n;t.changeLocked=!1,(n=t.props).onChange.apply(n,[e].concat(a))},i)):(o=this.props).onChange.apply(o,[e].concat(a))}},{key:"forceChange",value:function(e){var t;this.setState({value:e});for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=this.props).onChange.apply(t,[e].concat(a)),this.changeLocked=!1}},{key:"render",value:function(){var e=this.props,n=(e.value,e.onChange,Object(a.a)(e,["value","onChange"]));return h.a.createElement(t,Object.assign({},n,{value:this.getValue(),onChange:this.handleChange,forceChange:this.forceChange}))}}]),n}(u.PureComponent),n.defaultProps={delay:e},d})},139:function(e,t,n){"use strict";var a=n(5),r=n(6),o=n(8),i=n(2),c=n(7),l=n(3),s=n(0),u=n.n(s);t.a=function(e){return function(t){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(i.a)(n).call(this,e))).handleBlur=t.handleBlur.bind(Object(l.a)(Object(l.a)(t))),t}return Object(c.a)(n,t),Object(r.a)(n,[{key:"handleBlur",value:function(e){var t=this.props,n=t.value,a=t.trim,r=t.onBlur,o=t.onChange;if(a){var i=e.target.value.trim();n!==i&&o(i)}r&&r(e)}},{key:"render",value:function(){return u.a.createElement(e,Object.assign({},this.props,{onBlur:this.handleBlur}))}}]),n}(s.PureComponent)}},140:function(e,t,n){"use strict";var a=n(38),r=["delay","onDatumBind","rules","formDatum","forceChange","trim","beforeChange","validateHook","innerFormNamePath","fieldSetValidate","combineRules"];t.a=function(e){return Object(a.a)(e,function(e){r.forEach(function(t){return delete e[t]})})}},893:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(121),i=n(127),c=n(25),l=n(894),s=n.n(l),u=n(895),h=n.n(u),d=Object(c.a)(s.a,h.a),f=[{name:"1-base",title:Object(c.a)("基本用法 \n 多行文本输入框","Base \n Multi-line text input box"),component:n(896).default,rawText:n(897)},{name:"2-autosize",title:Object(c.a)("自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可","Autosize \n When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height."),component:n(898).default,rawText:n(899)},{name:"3-info",title:Object(c.a)("信息 \n 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。 \n 如果 info 返回类型为 Error，不会隐藏。","Info \n The result of the info function is displayed when you focus."),component:n(900).default,rawText:n(901)}];t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:f}))})},894:function(e,t){e.exports="# Textarea *多行文本框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| autosize | bool | false | 高度是否随内容自动变化 |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| info | function | 无 | 提示信息 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | 最小行高，同原生 textarea rows 属性 |\n| style | object | 无 | 最外层扩展样式 |\n| trim | bool | false | trim 为 true 时，失去焦点时会自动删除空白字符。 |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},895:function(e,t){e.exports="# Textarea\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| autosize | bool | false | Whether the height changes automatically with the content |\n| defaultValue | string \\| number | | default value |\n| delay | number | 400 | User input triggers onChange and to check interval, unit: ms.|\n| info | function | - | Infomation |\n| name | string | none | The name that accesses data from Form |\n| onChange | function(d) | | The callback function for changing value |\n| placeholder | string | | The same as the native placeholder tag. |\n| popover | string | | The position where the message pops up, options: \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | The minimum row height. Same as native textarea rows property. |\n| style | object | - | Container element style |\n| trim | bool | false | When trim is true, blank characters are automatically deleted when lose focus。 |\n| value | string \\| number | | DefaultValue and value can be set at the same time and defaultValue will be overridden by value. <br />In the Form, the value is taken over by the Form and lose efficacy. |\n"},896:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1254);t.default=function(){return r.a.createElement(o.a,{rows:6,placeholder:"input something"})}},897:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- 多行文本输入框\n * en - Base\n *    -- Multi-line text input box\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function() {\n  return <Textarea rows={6} placeholder=\"input something\" />\n}\n"},898:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1254);t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,{rows:2,autosize:!0,maxHeight:200,placeholder:"autosize"}),r.a.createElement("br",null),r.a.createElement(o.a,{rows:2,autosize:!0,value:"a\nu\nt\no\ns\ni\nz\ne",maxHeight:200,placeholder:"autosize"}))}},899:function(e,t){e.exports="/**\n * cn - 自适应高度\n *    -- autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 maxHeight 即可\n * en - Autosize\n *    -- When the autosize property is true, component will change height to fit the content. Set maxHeight to limit maximum height.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst text = `a\nu\nt\no\ns\ni\nz\ne`\n\nexport default function() {\n  return (\n    <div>\n      <Textarea rows={2} autosize maxHeight={200} placeholder=\"autosize\" />\n      <br />\n      <Textarea rows={2} autosize value={text} maxHeight={200} placeholder=\"autosize\" />\n    </div>\n  )\n}\n"},900:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1254),i=function(e){if(0===e.length)return null;var t="".concat(e.length," / 20");return e.length<=20?t:new Error(t)};t.default=function(){return r.a.createElement(o.a,{rows:4,trim:!0,placeholder:"input something",info:i})}},901:function(e,t){e.exports="/**\n * cn - 信息\n *    -- 设置 info 属性后，用户 focus 时显示 info 函数执行的结果，例如用户已输入文字长度。\n *    -- 如果 info 返回类型为 Error，不会隐藏。\n * en - Info\n *    -- The result of the info function is displayed when you focus.\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nconst renderInfo = value => {\n  if (value.length === 0) return null\n  const text = `${value.length} / 20`\n  if (value.length <= 20) return text\n  return new Error(text)\n}\n\nexport default function() {\n  return <Textarea rows={4} trim placeholder=\"input something\" info={renderInfo} />\n}\n"}}]);