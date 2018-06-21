(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{269:function(e,n){e.exports="# Input\n\n<example />"},270:function(e,n){e.exports="# Input *输入框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| size | string | 'default' | 可选值 \\['large', 'default', 'small'] |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| type | string | | 同原生 input 标签的 type |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n\n### Input.Number\n\n基本 API 和上表相同，特定的 API 如下：\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| max | number | 无 | 最大值 |\n| min | number | 无 | 最小值 |\n| step | number | 1 | 改变数字跨度，可为小数 |\n"},642:function(e,n){e.exports='/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group disabled style={style}>\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input disabled style={style} placeholder="disabled input" />\n    </div>\n  )\n}\n'},643:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o={width:300,marginBottom:12};n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.m.Group,{disabled:!0,style:o},a.a.createElement(r.m,{placeholder:"first name"}),"-",a.a.createElement(r.m,{placeholder:"last name"})),a.a.createElement(r.m,{disabled:!0,style:o,placeholder:"disabled input"}))}},644:function(e,n){e.exports="/**\n * cn - 校验\n *    -- 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出\n *    -- 如果没有设置 popover，不会弹出错误提示。\n *    -- 有错误时，提示框不会隐藏。\n * en - validate\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nconst rules = [\n  { required: true, message: 'Please enter your email.' },\n  { type: 'email', message: 'Please enter a valid email.' },\n]\n\nexport default function () {\n  return (\n    <Input\n      placeholder=\"email\"\n      rules={rules}\n      tip=\"Email, required\"\n      popover=\"top-left\"\n      width={300}\n    />\n  )\n}\n"},645:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o=[{required:!0,message:"Please enter your email."},{type:"email",message:"Please enter a valid email."}];n.default=function(){return a.a.createElement(r.m,{placeholder:"email",rules:o,tip:"Email, required",popover:"top-left",width:300})}},646:function(e,n){e.exports='/**\n * cn - 提示文字\n *    -- 在 input 上设置的 tip 在 focus 时弹出\n * en - tip\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} placeholder="email" tip="enter you email." popover="top-left" />\n\n      <Input.Group style={style} tip="enter you email.">\n        <FontAwesome name="envelope" />\n        <Input placeholder="email" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <FontAwesome name="envelope" />\n        <Input tip="enter you email." placeholder="email" />\n      </Input.Group>\n    </div>\n  )\n}\n'},647:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o=t(9),i={marginBottom:12};n.default=function(){return a.a.createElement("div",{style:{width:300}},a.a.createElement(r.m,{style:i,placeholder:"email",tip:"enter you email.",popover:"top-left"}),a.a.createElement(r.m.Group,{style:i,tip:"enter you email."},a.a.createElement(o.a,{name:"envelope"}),a.a.createElement(r.m,{placeholder:"email"})),a.a.createElement(r.m.Group,{style:i},a.a.createElement(o.a,{name:"envelope"}),a.a.createElement(r.m,{tip:"enter you email.",placeholder:"email"})))}},648:function(e,n){e.exports='/**\n * cn - 组合\n *  . -- Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。\n * en - Group\n */\nimport React from \'react\'\nimport { Button, Input } from \'shineout\'\nimport FontAwesome from \'../Icon/FontAwesome\'\n\nconst style = { width: 300, marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input.Group style={style}>\n        <FontAwesome name="user" />\n        <Input placeholder="first name" />\n        -\n        <Input placeholder="last name" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <FontAwesome name="search" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input style={{ flex: 1 }} placeholder="flex 1" />\n        <Input style={{ flex: 3 }} placeholder="flex 3" />\n      </Input.Group>\n\n      <Input.Group style={style}>\n        <Input placeholder="search text" />\n        <Button type="primary">Search</Button>\n      </Input.Group>\n\n      <Input.Group size="small" style={style}>\n        <b><FontAwesome name="envelope" /></b>\n        <Input placeholder="email" />\n        <b>.com</b>\n      </Input.Group>\n    </div>\n  )\n}\n'},649:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o=t(9),i={width:300,marginBottom:12};n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.m.Group,{style:i},a.a.createElement(o.a,{name:"user"}),a.a.createElement(r.m,{placeholder:"first name"}),"-",a.a.createElement(r.m,{placeholder:"last name"})),a.a.createElement(r.m.Group,{style:i},a.a.createElement(r.m,{placeholder:"search text"}),a.a.createElement(o.a,{name:"search"})),a.a.createElement(r.m.Group,{style:i},a.a.createElement(r.m,{style:{flex:1},placeholder:"flex 1"}),a.a.createElement(r.m,{style:{flex:3},placeholder:"flex 3"})),a.a.createElement(r.m.Group,{style:i},a.a.createElement(r.m,{placeholder:"search text"}),a.a.createElement(r.c,{type:"primary"},"Search")),a.a.createElement(r.m.Group,{size:"small",style:i},a.a.createElement("b",null,a.a.createElement(o.a,{name:"envelope"})),a.a.createElement(r.m,{placeholder:"email"}),a.a.createElement("b",null,".com")))}},650:function(e,n){e.exports="/**\n * cn -\n *  . -- Input.Number 组件，可以通过鼠标和上下箭头辅助输入\n * en - number type\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input.Number width={120} min={23} max={100} type=\"number\" />\n  )\n}\n"},651:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1);n.default=function(){return a.a.createElement(r.m.Number,{width:120,min:23,max:100,type:"number"})}},652:function(e,n){e.exports='/**\n * cn - 数字 \\n type=number 时，会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数\n * en - number type\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { marginBottom: 12 }\n\nexport default function () {\n  return (\n    <div style={{ width: 300 }}>\n      <Input style={style} type="number" placeholder="digits undefined" />\n      <Input style={style} digits={0} type="number" placeholder="digits 0" />\n      <Input style={style} digits={1} type="number" placeholder="digits 1" />\n      <Input style={style} digits={2} type="number" placeholder="digits 2" />\n      <Input style={style} digits={3} type="number" placeholder="digits 3" />\n    </div>\n  )\n}\n'},653:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o={marginBottom:12};n.default=function(){return a.a.createElement("div",{style:{width:300}},a.a.createElement(r.m,{style:o,type:"number",placeholder:"digits undefined"}),a.a.createElement(r.m,{style:o,digits:0,type:"number",placeholder:"digits 0"}),a.a.createElement(r.m,{style:o,digits:1,type:"number",placeholder:"digits 1"}),a.a.createElement(r.m,{style:o,digits:2,type:"number",placeholder:"digits 2"}),a.a.createElement(r.m,{style:o,digits:3,type:"number",placeholder:"digits 3"}))}},654:function(e,n){e.exports='/**\n * cn - 大小 \\n 提供了三种尺寸的输入框\n * en - Size\n */\nimport React from \'react\'\nimport { Input } from \'shineout\'\n\nconst style = { width: 120, marginRight: 12 }\n\nexport default function () {\n  return (\n    <div>\n      <Input size="small" style={style} placeholder="small size" />\n      <Input style={style} placeholder="default size" />\n      <Input size="large" style={style} placeholder="large size" />\n    </div>\n  )\n}\n'},655:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1),o={width:120,marginRight:12};n.default=function(){return a.a.createElement("div",null,a.a.createElement(r.m,{size:"small",style:o,placeholder:"small size"}),a.a.createElement(r.m,{style:o,placeholder:"default size"}),a.a.createElement(r.m,{size:"large",style:o,placeholder:"large size"}))}},656:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block\n *    -- 如果设置了 style.width，默认 display 为 inline-flex\n * en - Base\n */\nimport React from 'react'\nimport { Input } from 'shineout'\n\nexport default function () {\n  return (\n    <Input placeholder=\"input something\" />\n  )\n}\n"},657:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(1);n.default=function(){return a.a.createElement(r.m,{placeholder:"input something"})}},9:function(e,n,t){"use strict";var l=t(1);n.a=Object(l.k)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},974:function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),r=t(7),o=t(6),i=t(2),u=t(270),p=t.n(u),m=t(269),s=t.n(m),c=Object(i.a)(p.a,s.a),d=[{name:"1-base",title:Object(i.a)("基本用法 \n Input 通常需要和其他的组件配合使用，所以默认的宽度是 100%，默认 display 为 block \n 如果设置了 style.width，默认 display 为 inline-flex","Base"),component:t(657).default,rawText:t(656)},{name:"2-size",title:Object(i.a)("大小 \n 提供了三种尺寸的输入框","Size"),component:t(655).default,rawText:t(654)},{name:"3-number",title:Object(i.a)("数字 \n type=number 时，会做一次校验，禁止输入非数字类型字符，并且根据 digits 属性限制小数位数","number type"),component:t(653).default,rawText:t(652)},{name:"4-number",title:Object(i.a)(" \n Input.Number 组件，可以通过鼠标和上下箭头辅助输入","number type"),component:t(651).default,rawText:t(650)},{name:"5-group",title:Object(i.a)("组合 \n Icon, span, string, Button 类型可以直接放入 Input.Group 中。需要背景色可以放在 b 标签中。","Group"),component:t(649).default,rawText:t(648)},{name:"6-tip",title:Object(i.a)("提示文字 \n 在 input 上设置的 tip 在 focus 时弹出","tip"),component:t(647).default,rawText:t(646)},{name:"7-validate",title:Object(i.a)("校验 \n 设置了 rules，会自动校验输入数据，设置了 popover 会在指定位置弹出 \n 如果没有设置 popover，不会弹出错误提示。 \n 有错误时，提示框不会隐藏。","validate"),component:t(645).default,rawText:t(644)},{name:"8-disabled",title:Object(i.a)("禁用","Disabled"),component:t(643).default,rawText:t(642)}];n.default=Object(r.a)(function(e){return a.a.createElement(o.b,Object.assign({},e,{codes:void 0,source:c,examples:d}))})}}]);