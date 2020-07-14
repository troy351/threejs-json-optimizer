(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{float:"left",width:"70%"}},[n("h3",[e._v("Optimizer")]),e._m(0),n("p",[e._v(" STEP 1: "),n("input",{attrs:{type:"file",multiple:"",accept:"application/json"},on:{change:e.fileChange}}),e._v(" Select "),n("code",[e._v("app.json")]),e._v(" which was inside "),n("code",[e._v("untitled.zip")]),e._v(" which was generated by "),n("em",[e._v("Publish")]),e._v(", or "),n("code",[e._v("scene.json")]),e._v(" which was generated by "),n("em",[e._v("Export Scene")]),e._v(" (NOTE: All jsons will be merged when multiple files selected) ")]),e.s2Visible?n("p",[e._v("STEP 2: "),n("button",{on:{click:e.analyse}},[e._v("Analyse")])]):e._e(),e.s3Visible?[n("p",[e._v("STEP 3: Choose optimize options")]),n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.ignoreName,expression:"config.ignoreName"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.ignoreName)?e._i(e.config.ignoreName,null)>-1:e.config.ignoreName},on:{change:function(t){var n=e.config.ignoreName,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"ignoreName",n.concat([a])):o>-1&&e.$set(e.config,"ignoreName",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"ignoreName",i)}}}),e._v("ignore name ("),n("code",[e._v("name")]),e._v(" will be ignored while comparing two jsons)")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.toJPG,expression:"config.toJPG"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.toJPG)?e._i(e.config.toJPG,null)>-1:e.config.toJPG},on:{change:function(t){var n=e.config.toJPG,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"toJPG",n.concat([a])):o>-1&&e.$set(e.config,"toJPG",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"toJPG",i)}}}),e._v("convert png to jpg to reduce size")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.resizeImage,expression:"config.resizeImage"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.resizeImage)?e._i(e.config.resizeImage,null)>-1:e.config.resizeImage},on:{change:function(t){var n=e.config.resizeImage,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"resizeImage",n.concat([a])):o>-1&&e.$set(e.config,"resizeImage",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"resizeImage",i)}}}),e._v("reduce image resolution to less than 2048x2048")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeInvisible,expression:"config.removeInvisible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeInvisible)?e._i(e.config.removeInvisible,null)>-1:e.config.removeInvisible},on:{change:function(t){var n=e.config.removeInvisible,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"removeInvisible",n.concat([a])):o>-1&&e.$set(e.config,"removeInvisible",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"removeInvisible",i)}}}),e._v("remove invisible objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeObjects,expression:"config.removeObjects"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeObjects)?e._i(e.config.removeObjects,null)>-1:e.config.removeObjects},on:{change:function(t){var n=e.config.removeObjects,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"removeObjects",n.concat([a])):o>-1&&e.$set(e.config,"removeObjects",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"removeObjects",i)}}}),e._v("remove duplicate objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeUserData,expression:"config.removeUserData"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeUserData)?e._i(e.config.removeUserData,null)>-1:e.config.removeUserData},on:{change:function(t){var n=e.config.removeUserData,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,o=e._i(n,a);r.checked?o<0&&e.$set(e.config,"removeUserData",n.concat([a])):o>-1&&e.$set(e.config,"removeUserData",n.slice(0,o).concat(n.slice(o+1)))}else e.$set(e.config,"removeUserData",i)}}}),e._v("remove userData")]),n("li",[n("button",{on:{click:e.optimize}},[e._v("Optimize")])])])]:e._e(),e.s4Visible?n("p",[e._v("STEP 4: "),n("button",{on:{click:e.download}},[e._v("download")])]):e._e(),n("hr"),e._m(1),n("p",[e._v("Size Rank"),n("button",{staticStyle:{"margin-left":"10px"},on:{click:e.rank}},[e._v("Go")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.rankResult.length,expression:"rankResult.length"}]},[n("em",[e._v("Only shows geometries and images larger than 500KB")]),n("table",{staticStyle:{"font-family":"monospace",width:"100%","text-align":"center"},attrs:{border:"1"}},[e._m(2),n("tbody",e._l(e.rankResult,(function(t){return n("tr",{key:t.uuid},[n("td",[e._v(e._s(t.uuid))]),n("td",[e._v(e._s(t.type))]),n("td",[e._v(e._s(t.size))]),n("td",{staticStyle:{"text-align":"left"},domProps:{innerHTML:e._s(t.owner)}})])})),0)])]),n("hr",{attrs:{width:"500",align:"left"}}),n("p",[e._v("Object Trace")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.traceKeyword,expression:"traceKeyword"}],staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"uuid or name"},domProps:{value:e.traceKeyword},on:{input:function(t){t.target.composing||(e.traceKeyword=t.target.value)}}}),n("button",{staticStyle:{"margin-left":"10px"},on:{click:e.trace}},[e._v("Trace")])]),n("div",e._l(e.traceResult,(function(t,r){return n("p",{key:r,style:{textIndent:20*r+"px"}},[e._v(" - "),n("em",[e._v(e._s(t.name))]),e._v(" ("+e._s(t.uuid)+") ")])})),0),n("hr",{attrs:{width:"500",align:"left"}}),n("p",[e._v("UUID Search")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchUUID,expression:"searchUUID"}],staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"uuid"},domProps:{value:e.searchUUID},on:{input:function(t){t.target.composing||(e.searchUUID=t.target.value)}}}),n("button",{staticStyle:{"margin-left":"10px"},on:{click:e.search}},[e._v("Search")])]),n("p",[n("pre",[e._v(e._s(e.searchResult))])])],2),n("div",{staticStyle:{float:"left",width:"30%"}},[n("p",[e._v("logs")]),e.logs.length?n("ul",{staticClass:"log"},e._l(e.logs,(function(t,r){return n("li",{key:r},[e._v(e._s(t))])})),0):e._e()])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v(" This tool was designed to optimize json file exported by "),n("a",{attrs:{href:"https://threejs.org/editor",target:"_blank"}},[e._v("threejs editor")]),e._v(" to reduce its size and improve performance. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v("Utility"),n("sub",{staticStyle:{"font-weight":"normal","margin-left":"10px",color:"gray"}},[e._v("use after "),n("em",[e._v("Analyse")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{width:"320"}},[e._v("uuid")]),n("th",{attrs:{width:"90"}},[e._v("type")]),n("th",{attrs:{width:"90"}},[e._v("size")]),n("th",[e._v("owner")])])])}],o=(n("99af"),n("a623"),n("4de4"),n("7db0"),n("4160"),n("caad"),n("d81d"),n("fb6a"),n("45fc"),n("b0c0"),n("4ec9"),n("b680"),n("4fad"),n("d3b7"),n("2532"),n("3ca3"),n("498a"),n("159b"),n("ddb0"),n("3835")),c=(n("96cf"),n("1da1")),s=n("2909"),u=n("5530");function l(e){return f.apply(this,arguments)}function f(){return f=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return new Promise((function(t){var n=new FileReader;n.onload=function(){var e=JSON.parse(this.result);t(e)},n.readAsText(e)}))})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}n("25f0");for(var d=[],g=0;g<256;g++)d[g]=(g<16?"0":"")+g.toString(16);function m(){var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,i=d[255&e]+d[e>>8&255]+d[e>>16&255]+d[e>>24&255]+"-"+d[255&t]+d[t>>8&255]+"-"+d[t>>16&15|64]+d[t>>24&255]+"-"+d[63&n|128]+d[n>>8&255]+"-"+d[n>>16&255]+d[n>>24&255]+d[255&r]+d[r>>8&255]+d[r>>16&255]+d[r>>24&255];return i.toUpperCase()}var h=/^[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}$/;function v(e){return"string"===typeof e&&h.test(e)}function p(e){return e.every(v)}function b(e,t){return v(e)?t.get(e)||e:Array.isArray(e)&&p(e)?e.map((function(e){return t.get(e)||e})):e}var y=n("53ca");function w(e,t){null!==e&&"object"===Object(y["a"])(e)&&Object.entries(e).forEach((function(n){var r=Object(o["a"])(n,2),i=r[0],a=r[1];e.uuid&&t(a,i,e),"parent"!==i&&w(a,t)}))}function j(e){var t=new Map;w(e,(function(e,n){"uuid"!==n||t.get(e)||t.set(e,m())})),w(e,(function(e,n,r){r[n]=b(e,t)}))}var _=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise((function(t){setTimeout((function(){t(e.apply(void 0,n))}),0)}))}};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Group";return{uuid:m(),type:t,name:e,layers:1,matrix:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],children:[]}}var O=["geometries","images","materials","textures"],k=_((function(e,t){e.forEach((function(e){return j(e)}));var n=Object(u["a"])({},e[0]);return O.forEach((function(e){return n[e]=[]})),n.object=x("merged-group"),e.forEach((function(e,r){O.forEach((function(t){return n[t]=n[t].concat(e[t]||[])})),e.object.name=t[r],n.object.children.push(e.object)})),n})),S=(n("13d5"),n("90d7"),n("ac1f"),n("6062"),n("466d"),n("a434"),!0);function A(e){S=e}function P(){return S}function E(e,t){e.sort((function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}))}function N(e){e.forEach((function(e){var t=Object(u["a"])({},e);delete t.uuid,S&&delete t.name,e.json=JSON.stringify(t)})),E(e,"json")}function I(e){e.forEach((function(e){return delete e.json}))}function U(e,t,n){var r=1,i=0;while(r<e.length)t(e[r])===t(e[r-1])?(n.set(e[r].uuid,e[r-1].uuid),e.splice(r,1),i++):r++;return i}function z(e){return["Group","Object3D","Scene"].includes(e.type)}var J=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function D(e){return e&&e.matrix.toString()===J.toString()}function M(e,t,n){return new Promise((function(r){var i=e.url,a=new Image;a.src=i,a.onload=function(){var o=Math.pow(2,Math.round(Math.log2(a.width))),c=Math.pow(2,Math.round(Math.log2(a.width))),s=Math.pow(2,11);n&&(o>s&&(c=c/o*s,o=s),c>s&&(o=o/c*s,c=s));var u=document.createElement("canvas");u.width=o,u.height=c;var l=u.getContext("2d");l.drawImage(a,0,0,o,c),e.url=u.toDataURL(t?"image/jpeg":i.match(/:(.+);/)[1],t?.6:1),r(!0)}}))}var R=_((function(e,t){return E(e,"url"),U(e,(function(e){return e.url}),t)})),$=_((function(e,t){e.forEach((function(e){var n=t.get(e.image);n&&(e.image=n)})),N(e);var n=U(e,(function(e){return e.json}),t);return I(e),n})),T=_((function(e,t){e.forEach((function(e){Object.entries(e).forEach((function(n){var r=Object(o["a"])(n,2),i=r[0],a=r[1];v(a)&&t.has(a)&&(e[i]=t.get(a))}))})),N(e);var n=U(e,(function(e){return e.json}),t);return I(e),n})),G=_((function(e,t){N(e);var n=U(e,(function(e){return e.json}),t);return I(e),n})),K=_((function(e,t){var n=0;function r(e){Object.entries(e).forEach((function(i){var a=Object(o["a"])(i,2),c=a[0],s=a[1];"children"===c&&Array.isArray(s)?s.forEach((function(e){return r(e)})):(e[c]=b(s,t),e[c]!==s&&n++)}))}return r(e),n})),C=_((function(e){var t=0;return w(e,(function(e,n,r){if(r.children){var i=r.children.length;r.children=r.children.filter((function(e){return!1!==e.visible})),t+=i-r.children.length}})),t})),V=_((function(e){var t=JSON.parse(JSON.stringify(e)),n={},r=[];w(t,(function(e,t,i){n[i.uuid]||(n[i.uuid]=!0,r.push([i.uuid,i])),P()&&delete i.name,delete i.uuid,i.children&&i.children.forEach((function(e){return e.parent=i}))}));var i=r.map((function(e){var t=Object(o["a"])(e,2),n=t[0],r=t[1];if(!z(r)){var i=JSON.parse(JSON.stringify(e[1],(function(e,t){return"children"===e?void 0:t}))),a=i;while(a){while(D(a.parent))a.parent=a.parent.parent;a=a.parent}return[n,JSON.stringify(i)]}})).filter((function(e){return e}));E(i,1);var a=0,c=new Set;return i.forEach((function(e,t,n){t&&e[1]===n[t-1][1]&&(c.add(n[t][0]),a++)})),w(e,(function(e,t,n){n.children&&(n.children=n.children.filter((function(e){return!c.has(e.uuid)})))})),a})),F=_((function(e){var t={},n=O.reduce((function(t,n){return t+(e[n]||[]).length}),0),r=function(){var t=!1;if(w(e.object,(function(e,r,i){i.children&&(i.children=i.children.filter((function(e){var r=!z(e)||i.children.length;return t=t||!r,n+=!r,r})))})),!t)return"break"};while(1){var i=r();if("break"===i)break}function a(e){v(e)?t[e]=!0:Array.isArray(e)&&p(e)&&e.forEach((function(e){return t[e]=!0}))}return w(e.object,a),e.geometries&&(e.geometries=e.geometries.filter((function(e){return t[e.uuid]})),e.geometries.forEach((function(e){return t[e.uuid]=!0}))),e.materials&&(e.materials=e.materials.filter((function(e){return t[e.uuid]})),e.materials.forEach((function(e){return Object.entries(e).forEach((function(e){var t=Object(o["a"])(e,2),n=(t[0],t[1]);return a(n)}))}))),e.textures&&(e.textures=e.textures.filter((function(e){return t[e.uuid]})),e.textures.forEach((function(e){return t[e.image]=!0}))),e.images&&(e.images=e.images.filter((function(e){return t[e.uuid]}))),n-O.reduce((function(t,n){return t+(e[n]||[]).length}),0)})),B=_((function(e){var t=0;return w(e,(function(e,n,r){"userData"===n&&(delete r.userData,t++)})),t}));n("2b3d");function L(e,t){var n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(t),n.click()}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"app";L(t+"-optimize.json",new Blob([JSON.stringify(e)]))}n("a15b"),n("07ac"),n("38cf"),n("2ca0");function H(e,t){if("object"===Object(y["a"])(e)){e.uuid&&t.set(e.uuid,e);var n=Array.isArray(e)?e:Object.values(e);n.forEach((function(e){return H(e,t)}))}}function W(e,t){var n=new Map;H(e,n);var r=[];return n.forEach((function(e){var n=Object.values(e),i=n.find((function(e){return e.toString().includes(t)}));i&&r.push(e)})),r.length?r.map((function(e){return JSON.stringify(e,(function(e,t){return Array.isArray(t)&&"number"===typeof t[0]?t.length>5?JSON.stringify(t.slice(0,5)).slice(0,-1)+" ...]":JSON.stringify(t):"string"===typeof t&&t.startsWith("data:image")?t.slice(0,100)+" ...":t}),2)})).join("\n\n".concat("-".repeat(50),"\n\n")):"Nothing found"}var q={ignoreName:!0,toJPG:!0,resizeImage:!0,removeInvisible:!0,removeObjects:!0,removeUserData:!0,separateImages:!1},Q={name:"app",data:function(){return{files:[],logs:[],step:0,config:Object(u["a"])({},q),searchUUID:"",searchResult:"",rankResult:[],traceKeyword:"",traceResult:[]}},computed:{s2Visible:function(){return!!this.files.length},s3Visible:function(){return this.s2Visible&&this.step>=3},s4Visible:function(){return this.s3Visible&&this.step>=4}},methods:{reset:function(){this.logs=[],this.config=Object(u["a"])({},q)},fileChange:function(e){this.files=Object(s["a"])(e.target.files),this.step=1,this.json=null},log:function(e){this.logs.push(e)},fileCheck:function(){return this.files.length?(this.log("".concat(this.files.length," file").concat(this.files.length>1?"s":""," detected")),!!this.files.every((function(e){return"application/json"===e.type}))||alert("Only json files are accepted")):alert("Plase choose files at STEP 1")},loadFile:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.log("loading"),t.next=3,l(e.files);case 3:if(n=t.sent,n.every((function(e){return e.metadata}))){t.next=6;break}return t.abrupt("return",alert("Please choose valid json files exported by threejs editor"));case 6:e.log("load complete"),e.jsons=n.map((function(e){return"App"===e.metadata.type?e.scene:e}));case 8:case"end":return t.stop()}}),t)})))()},analyse:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.reset(),e.fileCheck()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.loadFile();case 5:if(n=e.jsons,e.json=n[0],!(n.length>1)){t.next=13;break}return e.log("merging files"),t.next=11,k(n,e.files.map((function(e){return e.name.slice(0,-5)})));case 11:e.json=t.sent,e.log("merging complete");case 13:e.step=3;case 14:case"end":return t.stop()}}),t)})))()},optimize:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a,o,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.json,r=e.config,i=new Map,a=0,A(r.ignoreName),o=n.images||[],e.log("removing duplicate images"),t.next=9,R(o,i);case 9:a=t.sent,e.log("".concat(a," image").concat(a>1?"s were":" was"," removed")),e.log("processing images"),e.log("0 image was processed"),a=0,c=0;case 15:if(!(c<o.length)){t.next=23;break}return t.next=18,M(o[c],r.toJPG,r.resizeImage);case 18:s=t.sent,s&&(a++,e.logs.pop(),e.log("".concat(a," image").concat(a>1?"s were":" was"," processed")));case 20:c++,t.next=15;break;case 23:return e.log("removing duplicate textures"),t.next=26,$(n.textures||[],i);case 26:return a=t.sent,e.log("".concat(a," texture").concat(a>1?"s were":" was"," removed")),e.log("removing duplicate materials"),t.next=31,T(n.materials,i);case 31:return a=t.sent,e.log("".concat(a," material").concat(a>1?"s were":" was"," removed")),e.log("removing duplicate geometries"),t.next=36,G(n.geometries,i);case 36:return a=t.sent,e.log("".concat(a," geometr").concat(a>1?"ies were":"y was"," removed")),e.log("reattach object attached uuids"),t.next=41,K(n.object,i);case 41:if(a=t.sent,e.log("".concat(a," object").concat(a>1?"s were":" was"," reattached")),!r.removeInvisible){t.next=49;break}return e.log("removing invisible objects"),t.next=47,C(n.object);case 47:a=t.sent,e.log("".concat(a," object").concat(a>1?"s were":" was"," removed"));case 49:if(!r.removeObjects){t.next=55;break}return e.log("removing duplicate objects"),t.next=53,V(n.object);case 53:a=t.sent,e.log("".concat(a," object").concat(a>1?"s were":" was"," removed"));case 55:return e.log("removing unused resources"),t.next=58,F(n);case 58:if(a=t.sent,e.log("".concat(a," unused resource").concat(a>1?"s were":" was"," removed")),!r.removeUserData){t.next=66;break}return e.log("removing userData"),t.next=64,B(n);case 64:a=t.sent,e.log("".concat(a," userData was removed"));case 66:e.step=4;case 67:case"end":return t.stop()}}),t)})))()},download:function(){Z(this.json,this.files[0].name.slice(0,-5))},search:function(){return v(this.searchUUID)?this.json?this.files.length>1?alert("Only support search in one json file"):void(this.searchResult=W(this.json,this.searchUUID)):alert("Please analyse a json in optimizer first"):alert("Please input a valid uuid")},rank:function(){if(this.json){var e=this.json,t=[];e.images&&e.images.forEach((function(e){return t.push({type:"image",uuid:e.uuid,len:JSON.stringify(e).length})})),e.geometries&&e.geometries.forEach((function(e){return t.push({type:"geometry",uuid:e.uuid,len:JSON.stringify(e).length})}));var n=1024,r=Math.pow(n,2);this.rankResult=t.sort((function(e,t){return t.len-e.len})).filter((function(e){return e.len>r/2})),this.rankResult.forEach((function(e){e.size=e.len>r?"".concat((e.len/r).toFixed(2)," MB"):"".concat((e.len/n).toFixed(2)," KB"),e.owner=i(e)}))}else alert("Please analyse a json in optimizer first");function i(t){var n;if("geometry"===t.type)return w(e.object,(function(e,r,i){return i.geometry===t.uuid&&(n=i)})),"Mesh: <em>".concat(n.name,"</em> (").concat(n.uuid,")");if("image"===t.type){var r,i,a=e.textures.find((function(e){return e.image===t.uuid})),c=e.materials.find((function(e){return Object.entries(e).some((function(e){var t=Object(o["a"])(e,2),n=t[0],i=t[1];return i===a.uuid&&(r=n)}))}));return w(e.object,(function(e,t,n){return n.material&&(Array.isArray(n.material)?n.material.includes(c.uuid):n.material===c.uuid)&&(i=n)})),"Mesh: <em>".concat(i.name,"</em> (").concat(i.uuid,")<br>Material: <em>").concat(c.name,"</em> (").concat(c.uuid,")<br>MapType: <em>").concat(r,"</em> (").concat(a.uuid,")")}}},trace:function(){if(!this.traceKeyword)return alert("Please input a valid uuid or name");if(!this.json)return alert("Please analyse a json in optimizer first");if(this.files.length>1)return alert("Only support trace in one json file");var e,t=this.traceKeyword.trim(),n=v(t),r=JSON.parse(JSON.stringify(this.json.object));w(r,(function(r,i,a){a.children&&a.children.forEach((function(e){return e.parent=a})),t===(n?a.uuid:a.name)&&(e=a)}));var i=[];while(e)i.push({name:e.name,uuid:e.uuid}),e=e.parent;this.traceResult=i.reverse()}}},X=Q,Y=n("2877"),ee=Object(Y["a"])(X,i,a,!1,null,null,null),te=ee.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(te)}}).$mount("#app")}});