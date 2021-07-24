!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";n.d(t,"a",function(){return __});var a={};a.en_US=n(7).translations;var __=function(e){var t=argon_language;return"undefined"==typeof a[t]?e:"undefined"==typeof a[t][e]?e:a[t][e]}},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";function a(e){return/\s/.test("number"===typeof e?String.fromCharCode(e):e.charAt(0))}t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5),n(8),n(10),n(12),n(14),n(16),n(18)},function(e,t,n){"use strict";var a=n(6),l=(n.n(a),n(0)),r=n(1),o=(n.n(r),n(2)),c=(n.n(o),n(3));(0,wp.blocks.registerBlockType)("argon/alert",{title:Object(l.a)("\u63d0\u793a"),icon:"warning",category:"argon",keywords:["argon",Object(l.a)("\u63d0\u793a")],attributes:{color:{type:"string",default:"#7889e8"},content:{type:"string",default:""},fa_icon_name:{type:"string",default:"info-circle"}},edit:function(e){var t=function(t){e.setAttributes({content:t})},n=function(t){e.setAttributes({color:t||"#7889e8"})},a=function(t){e.setAttributes({fa_icon_name:t})};return wp.element.createElement("div",null,wp.element.createElement("div",{className:"alert",style:{backgroundColor:e.attributes.color}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",{className:"alert-inner--icon"},wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name})),wp.element.createElement(r.RichText,{tagName:"span",className:"alert-inner--text",placeholder:Object(l.a)("\u5185\u5bb9"),value:e.attributes.content,onChange:t})),wp.element.createElement(r.InspectorControls,{key:"setting"},wp.element.createElement(o.PanelBody,{title:Object(l.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u989c\u8272","argon")),wp.element.createElement(o.ColorPalette,{onChange:n,colors:[{name:"argon",color:"#7889e8"},{name:"green",color:"#4fd69c"},{name:"red",color:"#f75676"},{name:"blue",color:"#37d5f2"},{name:"orange",color:"#fc7c5f"},{name:"pink",color:"#fa7298"},{name:"black",color:"#3c4d69"}],value:e.attributes.color})),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u56fe\u6807","argon")),wp.element.createElement(o.TextControl,{value:e.attributes.fa_icon_name,onChange:a}),wp.element.createElement("p",{className:"help-text"},Object(l.a)("Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a","argon"),"\xa0",wp.element.createElement("a",{href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank"},Object(l.a)("\u6d4f\u89c8\u56fe\u6807","argon")))))))))},save:function(e){return wp.element.createElement("div",{className:"alert",style:{backgroundColor:e.attributes.color}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",{className:"alert-inner--icon"},wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name})),wp.element.createElement("span",{className:"alert-inner--text",dangerouslySetInnerHTML:{__html:e.attributes.content}}))}})},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"translations",function(){return a});var a={"\u63d0\u793a":"Alert","\u8b66\u544a":"Admonition","\u6298\u53e0\u533a\u5757":"Collapse Block","\u65f6\u95f4\u7ebf":"Timeline","\u8fdb\u5ea6\u6761":"Progress Bar","Github Repo \u4fe1\u606f\u5361":"Github Repo Card","\u533a\u5757\u8bbe\u7f6e":"Block Settings","\u989c\u8272":"Color","\u56fe\u6807":"Icon","Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a":"The name of Font Awesome icon, leave it blank to hide the icon.","\u6d4f\u89c8\u56fe\u6807":"View icons","\u6807\u9898":"Title","\u5185\u5bb9":"Content","\u90e8\u4ef6":"Components","\u72b6\u6001":"Status","\u9ed8\u8ba4\u6298\u53e0":"Collapsed by Default","\u5de6\u8fb9\u6846":"Left Border","\u8fdb\u5ea6 (%)":"Progress (%)","\u65f6\u95f4":"Time","\u6761\u76ee\u5185\u5bb9":"Item content..","+ \u6dfb\u52a0\u8282\u70b9":"+ Add Node","+ \u6dfb\u52a0\u6761\u76ee":"+ Add Item","Repo \u63cf\u8ff0\u5c06\u4f1a\u663e\u793a\u5728\u8fd9\u91cc":"Repo description will be displayed here."}},function(e,t,n){"use strict";var a=n(9),l=(n.n(a),n(0)),r=n(1),o=(n.n(r),n(2)),c=(n.n(o),n(3));(0,wp.blocks.registerBlockType)("argon/admonition",{title:Object(l.a)("\u8b66\u544a"),icon:"text-page",category:"argon",keywords:["argon",Object(l.a)("\u8b66\u544a")],attributes:{color:{type:"string",default:"#7889e8"},title:{type:"string",default:""},content:{type:"string",default:""},fa_icon_name:{type:"string",default:""},show_title:{type:"bool",default:!1},show_content:{type:"bool",default:!0}},edit:function(e){var t=function(t){e.setAttributes({title:t})},n=function(t){e.setAttributes({content:t})},a=function(t){e.setAttributes({color:t||"#7889e8"})},i=function(t){e.setAttributes({fa_icon_name:t})},s=function(t){e.setAttributes({show_title:t}),t||e.setAttributes({show_content:!0})},m=function(t){e.setAttributes({show_content:t}),t||e.setAttributes({show_title:!0})};return wp.element.createElement("div",null,wp.element.createElement("div",{className:"admonition shadow-sm",style:{borderLeftColor:e.attributes.color}},e.attributes.show_title&&wp.element.createElement("div",{className:"admonition-title",style:{backgroundColor:e.attributes.color+"33"}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name}),"\xa0"),wp.element.createElement(r.RichText,{tagName:"span",placeholder:Object(l.a)("\u6807\u9898"),value:e.attributes.title,onChange:t})),e.attributes.show_content&&wp.element.createElement(r.RichText,{tagName:"div",className:"admonition-body",placeholder:Object(l.a)("\u5185\u5bb9"),value:e.attributes.content,onChange:n})),wp.element.createElement(r.InspectorControls,{key:"setting"},wp.element.createElement(o.PanelBody,{title:Object(l.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u989c\u8272","argon")),wp.element.createElement(o.ColorPalette,{onChange:a,colors:[{name:"argon",color:"#7889e8"},{name:"green",color:"#4fd69c"},{name:"red",color:"#f75676"},{name:"blue",color:"#37d5f2"},{name:"orange",color:"#fc7c5f"},{name:"pink",color:"#fa7298"},{name:"black",color:"#3c4d69"},{name:"grey",color:"#888888"}],value:e.attributes.color})),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u90e8\u4ef6","argon")),wp.element.createElement(o.ToggleControl,{label:Object(l.a)("\u6807\u9898","argon"),checked:e.attributes.show_title,onChange:s}),wp.element.createElement(o.ToggleControl,{label:Object(l.a)("\u5185\u5bb9","argon"),checked:e.attributes.show_content,onChange:m})),e.attributes.show_title&&wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u56fe\u6807","argon")),wp.element.createElement(o.TextControl,{value:e.attributes.fa_icon_name,onChange:i}),wp.element.createElement("p",{className:"help-text"},Object(l.a)("Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a","argon"),"\xa0",wp.element.createElement("a",{href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank"},Object(l.a)("\u6d4f\u89c8\u56fe\u6807","argon")))))))))},save:function(e){return wp.element.createElement("div",{className:"admonition shadow-sm",style:{borderLeftColor:e.attributes.color}},e.attributes.show_title&&wp.element.createElement("div",{className:"admonition-title",style:{backgroundColor:e.attributes.color+"33"}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name}),"\xa0"),wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.attributes.title}})),e.attributes.show_content&&wp.element.createElement("div",{className:"admonition-body",dangerouslySetInnerHTML:{__html:e.attributes.content}}))}})},function(e,t){},function(e,t,n){"use strict";var a=n(11),l=(n.n(a),n(0)),r=n(1),o=(n.n(r),n(2)),c=(n.n(o),n(3)),i=wp.blocks.registerBlockType,s=function(e){return 7==e.length?e+"33":e};i("argon/collapse",{title:Object(l.a)("\u6298\u53e0\u533a\u5757"),icon:"align-wide",category:"argon",keywords:["argon",Object(l.a)("\u6298\u53e0\u533a\u5757")],attributes:{color:{type:"string",default:"#ffffff00"},title:{type:"string",default:""},content:{type:"string",default:""},fa_icon_name:{type:"string",default:""},collapsed:{type:"bool",default:!0},show_left_border:{type:"bool",default:!1}},edit:function(e){var t=function(t){e.setAttributes({title:t})},n=function(t){e.setAttributes({content:t})},a=function(t){e.setAttributes({color:t||"#ffffff00"})},i=function(t){e.setAttributes({fa_icon_name:t})},m=function(t){e.setAttributes({collapsed:t})},u=function(t){e.setAttributes({show_left_border:t})};return wp.element.createElement("div",null,wp.element.createElement("div",{className:"collapse-block shadow-sm collapsed "+(e.attributes.show_left_border?"":"hide-border-left"),style:{borderLeftColor:e.attributes.color}},wp.element.createElement("div",{className:"collapse-block-title",style:{backgroundColor:s(e.attributes.color)}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name}),"\xa0"),wp.element.createElement(r.RichText,{tagName:"span",className:"collapse-block-title-inner",placeholder:Object(l.a)("\u6807\u9898"),value:e.attributes.title,onChange:t}),wp.element.createElement("i",{className:"collapse-icon fa fa-angle-up"})),wp.element.createElement(r.RichText,{tagName:"div",className:"collapse-block-body",placeholder:Object(l.a)("\u5185\u5bb9"),value:e.attributes.content,onChange:n})),wp.element.createElement(r.InspectorControls,{key:"setting"},wp.element.createElement(o.PanelBody,{title:Object(l.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u989c\u8272","argon")),wp.element.createElement(o.ColorPalette,{onChange:a,colors:[{name:"transparent",color:"#ffffff00"},{name:"argon",color:"#7889e8"},{name:"green",color:"#4fd69c"},{name:"red",color:"#f75676"},{name:"blue",color:"#37d5f2"},{name:"orange",color:"#fc7c5f"},{name:"pink",color:"#fa7298"},{name:"black",color:"#3c4d69"},{name:"grey",color:"#888888"}],value:e.attributes.color}),wp.element.createElement(o.ToggleControl,{label:Object(l.a)("\u5de6\u8fb9\u6846","argon"),checked:e.attributes.show_left_border,onChange:u})),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u56fe\u6807","argon")),wp.element.createElement(o.TextControl,{value:e.attributes.fa_icon_name,onChange:i}),wp.element.createElement("p",{className:"help-text"},Object(l.a)("Font Awesome \u4e2d\u7684\u56fe\u6807\u540d\uff0c\u7559\u7a7a\u5219\u4e0d\u663e\u793a","argon"),"\xa0",wp.element.createElement("a",{href:"https://fontawesome.com/v4.7.0/icons/",target:"_blank"},Object(l.a)("\u6d4f\u89c8\u56fe\u6807","argon")))),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u72b6\u6001","argon")),wp.element.createElement(o.ToggleControl,{label:Object(l.a)("\u9ed8\u8ba4\u6298\u53e0","argon"),checked:e.attributes.collapsed,onChange:m})))))))},save:function(e){return wp.element.createElement("div",{className:"collapse-block shadow-sm "+(e.attributes.collapsed?"collapsed":"")+" "+(e.attributes.show_left_border?"":"hide-border-left"),style:{borderLeftColor:e.attributes.color}},wp.element.createElement("div",{className:"collapse-block-title",style:{backgroundColor:s(e.attributes.color)}},!(Object(c.a)(e.attributes.fa_icon_name)||""==e.attributes.fa_icon_name)&&wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-"+e.attributes.fa_icon_name}),"\xa0"),wp.element.createElement("span",{className:"collapse-block-title-inner",dangerouslySetInnerHTML:{__html:e.attributes.title}}),wp.element.createElement("i",{className:"collapse-icon fa fa-angle-down"})),wp.element.createElement("div",{className:"collapse-block-body",style:e.attributes.collapsed?"display: none":"",dangerouslySetInnerHTML:{__html:e.attributes.content}}))}})},function(e,t){},function(e,t,n){"use strict";var a=n(13),l=(n.n(a),n(0)),r=n(1),o=(n.n(r),n(2)),c=(n.n(o),wp.blocks.registerBlockType),i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").includes("mini")?"github-info-card-mini":"github-info-card-full"};c("argon/github",{title:Object(l.a)("Github Repo \u4fe1\u606f\u5361"),icon:"github fa fa-github",category:"argon",keywords:["argon","github",Object(l.a)("Github Repo \u4fe1\u606f\u5361")],styles:[{name:"github-info-card-full",label:"Full",isDefault:!0},{name:"github-info-card-mini",label:"Mini"}],attributes:{author:{type:"string",default:""},project:{type:"string",default:""}},edit:function(e){var t=function(t){e.setAttributes({author:t})},n=function(t){e.setAttributes({project:t})};return wp.element.createElement("div",null,wp.element.createElement("div",{className:"github-info-card shadow-sm "+i(e.className)},wp.element.createElement("div",{className:"github-info-card-header"},wp.element.createElement("a",{title:"Github"},wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-github"})," GitHub"))),wp.element.createElement("div",{className:"github-info-card-body"},wp.element.createElement("div",{className:"github-info-card-name-a"},wp.element.createElement("span",null,wp.element.createElement("span",{className:"github-info-card-name"},wp.element.createElement("span",{contentEditable:!0,"data-placeholder":"user",onBlur:function(e){return t(e.currentTarget.textContent)}},e.attributes.author),"\xa0/\xa0",wp.element.createElement("span",{contentEditable:!0,"data-placeholder":"project",onBlur:function(e){return n(e.currentTarget.textContent)}},e.attributes.project)))),wp.element.createElement("div",{className:"github-info-card-description"},Object(l.a)("Repo \u63cf\u8ff0\u5c06\u4f1a\u663e\u793a\u5728\u8fd9\u91cc"))),wp.element.createElement("div",{className:"github-info-card-bottom"},wp.element.createElement("span",{className:"github-info-card-meta github-info-card-meta-stars"},wp.element.createElement("i",{className:"fa fa-star"}),"\xa0",wp.element.createElement("span",{className:"github-info-card-stars"},"0")),wp.element.createElement("span",{className:"github-info-card-meta github-info-card-meta-forks"},wp.element.createElement("i",{className:"fa fa-code-fork"}),"\xa0",wp.element.createElement("span",{className:"github-info-card-forks"},"0")))),wp.element.createElement(r.InspectorControls,{key:"setting"},wp.element.createElement(o.PanelBody,{title:Object(l.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,"Repo"),wp.element.createElement(o.TextControl,{label:"User",value:e.attributes.author,onChange:t}),wp.element.createElement(o.TextControl,{label:"Project",value:e.attributes.project,onChange:n})))))))},save:function(e){return wp.element.createElement("div",{className:"github-info-card card shadow-sm "+i(e.className||e.attributes.className),"data-author":e.attributes.author,"data-project":e.attributes.project},wp.element.createElement("div",{className:"github-info-card-header"},wp.element.createElement("a",{href:"https://github.com/",ref:"nofollow",target:"_blank",title:"Github",rel:"noopener"},wp.element.createElement("span",null,wp.element.createElement("i",{className:"fa fa-github"}),"\xa0GitHub"))),wp.element.createElement("div",{className:"github-info-card-body"},wp.element.createElement("div",{className:"github-info-card-name-a"},wp.element.createElement("a",{href:"https://github.com/"+e.attributes.author+"/"+e.attributes.project,target:"_blank",rel:"noopener"},wp.element.createElement("span",{className:"github-info-card-name"},e.attributes.author,"/",e.attributes.project))),wp.element.createElement("div",{className:"github-info-card-description"})),wp.element.createElement("div",{className:"github-info-card-bottom"},wp.element.createElement("span",{className:"github-info-card-meta github-info-card-meta-stars"},wp.element.createElement("i",{className:"fa fa-star"}),"\xa0",wp.element.createElement("span",{className:"github-info-card-stars"})),wp.element.createElement("span",{className:"github-info-card-meta github-info-card-meta-forks"},wp.element.createElement("i",{className:"fa fa-code-fork"}),"\xa0",wp.element.createElement("span",{className:"github-info-card-forks"}))))}})},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=n(15),r=(n.n(l),n(0)),o=n(1),c=(n.n(o),n(2));n.n(c);(0,wp.blocks.registerBlockType)("argon/timelime",{title:Object(r.a)("\u65f6\u95f4\u7ebf"),icon:"clock",category:"argon",keywords:["argon",Object(r.a)("\u65f6\u95f4\u7ebf")],attributes:{list:{type:"array",default:[{time:"",title:"",content:"",id:0,deleted:!1}]}},edit:function(e){var t=function(){var t=[].concat(a(e.attributes.list),[{time:"",title:"",content:"",id:e.attributes.list.length,deleted:!1}]);e.setAttributes({list:t})},n=function(t){var n=e.attributes.list.map(function(e){return e.id==t?Object.assign({},e,{deleted:!0}):e});e.setAttributes({list:n})},l=function(t,n){var a=e.attributes.list.map(function(e){return e.id==n?Object.assign({},e,{time:t}):e});e.setAttributes({list:a})},i=function(t,n){var a=e.attributes.list.map(function(e){return e.id==n?Object.assign({},e,{title:t}):e});e.setAttributes({list:a})},s=function(t,n){var a=e.attributes.list.map(function(e){return e.id==n?Object.assign({},e,{content:t}):e});e.setAttributes({list:a})},m=function(e){var t=0;return e.map(function(e){e.deleted||t++}),t},u=e.attributes.list.map(function(t){if(1!=t.deleted)return wp.element.createElement("div",{class:"argon-timeline-node",key:t.id.toString()},wp.element.createElement(o.RichText,{tagName:"div",className:"argon-timeline-time",placeholder:Object(r.a)("\u65f6\u95f4"),value:t.time,onChange:function(e){return l(e,t.id)}}),wp.element.createElement("div",{class:"argon-timeline-card bg-gradient-secondary shadow-sm"},wp.element.createElement(o.RichText,{tagName:"div",className:"argon-timeline-title",placeholder:Object(r.a)("\u6807\u9898"),value:t.title,onChange:function(e){return i(e,t.id)}}),wp.element.createElement(o.RichText,{tagName:"div",className:"argon-timeline-content",placeholder:Object(r.a)("\u5185\u5bb9"),value:t.content,onChange:function(e){return s(e,t.id)}}),m(e.attributes.list)>1&&wp.element.createElement(c.Button,{className:"is-tertiary timeline-remove-item-btn",onClick:function(){return n(t.id)},style:{color:"#7889e8"}},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"}))))});return wp.element.createElement("div",null,wp.element.createElement("div",{class:"argon-timeline"},u,wp.element.createElement(c.Button,{className:"is-primary",onClick:t,style:{marginTop:8,backgroundColor:"#7889e8"}},Object(r.a)("+ \u6dfb\u52a0\u8282\u70b9"))))},save:function(e){var t=e.attributes.list.map(function(e){if(1!=e.deleted)return wp.element.createElement("div",{class:"argon-timeline-node"},""!=e.time&&wp.element.createElement("div",{className:"argon-timeline-time",dangerouslySetInnerHTML:{__html:e.time}}),wp.element.createElement("div",{class:"argon-timeline-card card bg-gradient-secondary shadow-sm"},""!=e.title&&wp.element.createElement("div",{className:"argon-timeline-title",dangerouslySetInnerHTML:{__html:e.title}}),""!=e.content&&wp.element.createElement("div",{className:"argon-timeline-content",dangerouslySetInnerHTML:{__html:e.content}})))});return wp.element.createElement("div",null,wp.element.createElement("div",{class:"argon-timeline"},t))}})},function(e,t){},function(e,t,n){"use strict";var a=n(17),l=(n.n(a),n(0)),r=n(1),o=(n.n(r),n(2)),c=(n.n(o),function(e,t,n){return Math.min(Math.max(e,t),n)});(0,wp.blocks.registerBlockType)("argon/progressbar",{title:Object(l.a)("\u8fdb\u5ea6\u6761"),icon:"chart-bar",category:"argon",keywords:["argon",Object(l.a)("\u8fdb\u5ea6\u6761")],attributes:{color:{type:"string",default:"#7889e8"},title:{type:"string",default:""},progress:{type:"number",default:50},show_title:{type:"bool",default:!0}},edit:function(e){var t=function(t){e.setAttributes({title:t})},n=function(t){e.setAttributes({color:t||"#5e72e4"})},a=function(t){e.setAttributes({progress:c(Number(t),0,100)})},i=function(t){e.setAttributes({show_title:t})};return wp.element.createElement("div",null,wp.element.createElement("div",{class:"progress-wrapper"},wp.element.createElement("div",{class:"progress-info"},e.attributes.show_title&&wp.element.createElement("div",{class:"progress-label"},wp.element.createElement(r.RichText,{tagName:"span",placeholder:Object(l.a)("\u6807\u9898"),value:e.attributes.title,onChange:t})),wp.element.createElement("div",{class:"progress-percentage"},wp.element.createElement("span",null,e.attributes.progress,"%"))),wp.element.createElement("div",{class:"progress"},wp.element.createElement("div",{class:"progress-bar",style:{width:e.attributes.progress.toString()+"%",backgroundColor:e.attributes.color}}))),wp.element.createElement(r.InspectorControls,{key:"setting"},wp.element.createElement(o.PanelBody,{title:Object(l.a)("\u533a\u5757\u8bbe\u7f6e"),icon:"more",initialOpen:!0},wp.element.createElement(o.PanelRow,null,wp.element.createElement("div",{id:"gutenpride-controls"},wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u989c\u8272","argon")),wp.element.createElement(o.ColorPalette,{onChange:n,colors:[{name:"argon",color:"#5e72e4"},{name:"green",color:"#4fd69c"},{name:"red",color:"#f75676"},{name:"blue",color:"#37d5f2"},{name:"orange",color:"#fc7c5f"},{name:"pink",color:"#fa7298"},{name:"black",color:"#3c4d69"}],value:e.attributes.color})),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u90e8\u4ef6","argon")),wp.element.createElement(o.ToggleControl,{label:Object(l.a)("\u6807\u9898","argon"),checked:e.attributes.show_title,onChange:i})),wp.element.createElement("fieldset",null,wp.element.createElement(o.PanelRow,null,Object(l.a)("\u8fdb\u5ea6 (%)","argon")),wp.element.createElement("input",{type:"number",min:"0",max:"100",step:"1",value:e.attributes.progress,onChange:function(e){return a(e.currentTarget.value)}})))))))},save:function(e){return wp.element.createElement("div",{class:"progress-wrapper"},wp.element.createElement("div",{class:"progress-info"},e.attributes.show_title&&wp.element.createElement("div",{class:"progress-label"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.attributes.title}})),wp.element.createElement("div",{class:"progress-percentage"},wp.element.createElement("span",null,e.attributes.progress,"%"))),wp.element.createElement("div",{class:"progress"},wp.element.createElement("div",{class:"progress-bar",style:{width:e.attributes.progress.toString()+"%",backgroundColor:e.attributes.color}})))}})},function(e,t){},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=n(19),r=(n.n(l),n(0)),o=n(1),c=(n.n(o),n(2));n.n(c);(0,wp.blocks.registerBlockType)("argon/todolist",{title:"Todo List",icon:"yes-alt",category:"argon",keywords:["argon","Todo list"],attributes:{list:{type:"array",default:[{content:"",checked:!1,id:0,deleted:!1}]}},edit:function(e){var t=function(){var t=[].concat(a(e.attributes.list),[{content:"",checked:!1,id:e.attributes.list.length,deleted:!1}]);e.setAttributes({list:t})},n=function(t){var n=e.attributes.list.map(function(e){return e.id==t?Object.assign({},e,{deleted:!0}):e});e.setAttributes({list:n})},l=function(t,n){var a=e.attributes.list.map(function(e){return e.id==n?Object.assign({},e,{content:t}):e});e.setAttributes({list:a})},i=function(t,n){console.log(t);var a=e.attributes.list.map(function(e){return e.id==n?Object.assign({},e,{checked:t}):e});e.setAttributes({list:a})},s=e.attributes.list.map(function(e){if(1!=e.deleted)return wp.element.createElement("div",{class:"shortcode-todo custom-control custom-checkbox",key:e.id.toString()},wp.element.createElement("input",{class:"custom-control-input",type:"checkbox",checked:e.checked}),wp.element.createElement("label",{class:"custom-control-label",onClick:function(t){return i(!e.checked,e.id)}}),wp.element.createElement(o.RichText,{tagName:"span",placeholder:Object(r.a)("\u6761\u76ee\u5185\u5bb9"),value:e.content,onChange:function(t){return l(t,e.id)}}),wp.element.createElement(c.Button,{className:"is-tertiary todolist-remove-item-btn",onClick:function(){return n(e.id)},style:{color:"#7889e8"}},wp.element.createElement("span",{class:"dashicon dashicons dashicons-trash"})))});return wp.element.createElement("div",null,s,wp.element.createElement(c.Button,{className:"is-primary",onClick:t,style:{marginTop:8,backgroundColor:"#7889e8"}},Object(r.a)("+ \u6dfb\u52a0\u6761\u76ee")))},save:function(e){var t=e.attributes.list.map(function(e){if(1!=e.deleted)return wp.element.createElement("div",{class:"shortcode-todo custom-control custom-checkbox"},wp.element.createElement("input",{class:"custom-control-input",type:"checkbox",checked:!!e.checked||null}),wp.element.createElement("label",{class:"custom-control-label"},wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:e.content}})))});return wp.element.createElement("div",null,t)}})},function(e,t){}]);