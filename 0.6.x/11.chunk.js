(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{245:function(n,e){n.exports="# Message\n\n<example />"},246:function(n,e){n.exports="# Message 消息\n\n<example />\n\n## API \nMessage 提供了一组方法供全局调用\n\nMessage.show(content, \\[duration], \\[options]) // 无样式\n\nMessage.info(content, \\[duration], \\[options])\n\nMessage.success(content, \\[duration], \\[options])\n\nMessage.warn(content, \\[duration], \\[options])\n\nMessage.error(content, \\[duration], \\[options])\n\nMessage.close() // 关闭所有消息\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| content | string\\|ReactElement | 必填 | 消息内容 |\n| duration | number | 3 | 消息持续时间，单位秒；如果设置为 0，必须手动关闭 |\n\n\n#### options\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| onClose | function | 无 | 关闭后回调事件 |\n| position | string | 'top' | 消息显示的位置，可选值 \\['top', 'middle'] |"},454:function(n,e){n.exports="/**\n * cn - 回调 onClose\n * en - Event onClose\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const close = () => {\n    Message.warn('Close this message will display another message.', 0, {\n      onClose: () => {\n        Message.info('You can close the message now.')\n      },\n    })\n  }\n\n  return (\n    <Fragment>\n      <Button onClick={close}>Close</Button>\n    </Fragment>\n  )\n}\n\n"},455:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),a=t(1);e.default=function(){return s.a.createElement(o.Fragment,null,s.a.createElement(a.c,{onClick:function(){a.o.warn("Close this message will display another message.",0,{onClose:function(){a.o.info("You can close the message now.")}})}},"Close"))}},456:function(n,e){n.exports="/**\n * cn - 位置 position\n * en - Position Center\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const middle = () => {\n    Message.info('some message.', 3, { position: 'middle' })\n  }\n\n  return (\n    <Fragment>\n      <Button onClick={middle}>Show in the middle.</Button>\n    </Fragment>\n  )\n}\n\n"},457:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),a=t(1);e.default=function(){return s.a.createElement(o.Fragment,null,s.a.createElement(a.c,{onClick:function(){a.o.info("some message.",3,{position:"middle"})}},"Show in the middle."))}},458:function(n,e){n.exports="/**\n * cn - duration\n * en - duration\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  const s10 = () => Message.info('This message will close after 10 seconds.', 10)\n  const s0 = () => Message.error('This message will not close utill click the close button.', 0)\n  return (\n    <Fragment>\n      <Button onClick={s10}>duration 10 s.</Button>\n      <Button onClick={s0}>duration 0 s.</Button>\n    </Fragment>\n  )\n}\n\n"},459:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),a=t(1);e.default=function(){return s.a.createElement(o.Fragment,null,s.a.createElement(a.c,{onClick:function(){return a.o.info("This message will close after 10 seconds.",10)}},"duration 10 s."),s.a.createElement(a.c,{onClick:function(){return a.o.error("This message will not close utill click the close button.",0)}},"duration 0 s."))}},460:function(n,e){n.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React, { Fragment } from 'react'\nimport { Button, Message } from 'shineout'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Button onClick={() => {\n        Message.show('Some message.')\n      }}\n      >Show\n      </Button>\n      <Button onClick={() => {\n        Message.info('This is a message of info.')\n      }}\n      >Info\n      </Button>\n      <Button onClick={() => {\n        Message.success('This is a message of success.')\n      }}\n      >Success\n      </Button>\n      <Button onClick={() => {\n        Message.warn('This is a message of warning.')\n      }}\n      >Warn\n      </Button>\n      <Button onClick={() => {\n        Message.error('This is a message of error.')\n      }}\n      >Error\n      </Button>\n\n      <Button onClick={() => { Message.close() }}>Close All</Button>\n    </Fragment>\n  )\n}\n"},461:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),a=t(1);e.default=function(){return s.a.createElement(o.Fragment,null,s.a.createElement(a.c,{onClick:function(){a.o.show("Some message.")}},"Show"),s.a.createElement(a.c,{onClick:function(){a.o.info("This is a message of info.")}},"Info"),s.a.createElement(a.c,{onClick:function(){a.o.success("This is a message of success.")}},"Success"),s.a.createElement(a.c,{onClick:function(){a.o.warn("This is a message of warning.")}},"Warn"),s.a.createElement(a.c,{onClick:function(){a.o.error("This is a message of error.")}},"Error"),s.a.createElement(a.c,{onClick:function(){a.o.close()}},"Close All"))}},962:function(n,e,t){"use strict";t.r(e);var o=t(0),s=t.n(o),a=t(7),i=t(6),r=t(2),c=t(246),u=t.n(c),l=t(245),m=t.n(l),f=Object(r.a)(u.a,m.a),g=[{name:"1-base",title:Object(r.a)("基本用法","Base"),component:t(461).default,rawText:t(460)},{name:"2-duration",title:Object(r.a)("duration","duration"),component:t(459).default,rawText:t(458)},{name:"3-position",title:Object(r.a)("位置 position","Position Center"),component:t(457).default,rawText:t(456)},{name:"4-close",title:Object(r.a)("回调 onClose","Event onClose"),component:t(455).default,rawText:t(454)}];e.default=Object(a.a)(function(n){return s.a.createElement(i.b,Object.assign({},n,{codes:void 0,source:f,examples:g}))})}}]);