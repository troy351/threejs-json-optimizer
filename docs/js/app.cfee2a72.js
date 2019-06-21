(function(e){function t(t){for(var r,c,a=t[0],s=t[1],u=t[2],f=0,h=[];f<a.length;f++)c=a[f],i[c]&&h.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{float:"left",width:"70%"}},[n("h3",[e._v("Optimizer")]),e._m(0),n("p",[e._v("\n      STEP 1:\n      "),n("input",{attrs:{type:"file",multiple:"",accept:"application/json"},on:{change:e.fileChange}}),e._v("\n      Choose\n      "),n("code",[e._v("app.json")]),e._v("\n      file that in editor published\n      "),n("code",[e._v("zip")]),e._v("\n      file (note: all json files will be merged when multiple file selected)\n    ")]),e.s2Visible?n("p",[e._v("STEP 2: "),n("button",{on:{click:e.analyse}},[e._v("Analyse")])]):e._e(),e.s3Visible?[n("p",[e._v("STEP 3: Choose optimize options")]),n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.ignoreName,expression:"config.ignoreName"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.ignoreName)?e._i(e.config.ignoreName,null)>-1:e.config.ignoreName},on:{change:function(t){var n=e.config.ignoreName,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"ignoreName",n.concat([o])):c>-1&&e.$set(e.config,"ignoreName",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"ignoreName",i)}}}),e._v("ignore name ("),n("code",[e._v("name")]),e._v(" will be ignored while comparing two jsons)")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.toJPG,expression:"config.toJPG"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.toJPG)?e._i(e.config.toJPG,null)>-1:e.config.toJPG},on:{change:function(t){var n=e.config.toJPG,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"toJPG",n.concat([o])):c>-1&&e.$set(e.config,"toJPG",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"toJPG",i)}}}),e._v("convert png to jpg to reduce size")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.resizeImage,expression:"config.resizeImage"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.resizeImage)?e._i(e.config.resizeImage,null)>-1:e.config.resizeImage},on:{change:function(t){var n=e.config.resizeImage,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"resizeImage",n.concat([o])):c>-1&&e.$set(e.config,"resizeImage",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"resizeImage",i)}}}),e._v("reduce image resolution to less than 2048x2048")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeInvisible,expression:"config.removeInvisible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeInvisible)?e._i(e.config.removeInvisible,null)>-1:e.config.removeInvisible},on:{change:function(t){var n=e.config.removeInvisible,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"removeInvisible",n.concat([o])):c>-1&&e.$set(e.config,"removeInvisible",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"removeInvisible",i)}}}),e._v("remove invisible objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeObjects,expression:"config.removeObjects"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeObjects)?e._i(e.config.removeObjects,null)>-1:e.config.removeObjects},on:{change:function(t){var n=e.config.removeObjects,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"removeObjects",n.concat([o])):c>-1&&e.$set(e.config,"removeObjects",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"removeObjects",i)}}}),e._v("remove duplicate objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.compress,expression:"config.compress"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.compress)?e._i(e.config.compress,null)>-1:e.config.compress},on:{change:function(t){var n=e.config.compress,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,c=e._i(n,o);r.checked?c<0&&e.$set(e.config,"compress",n.concat([o])):c>-1&&e.$set(e.config,"compress",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.config,"compress",i)}}}),e._v("compress json via "),n("a",{attrs:{href:"https://github.com/msgpack/msgpack-javascript",target:"_blank"}},[e._v("msgpack")])]),n("li",[n("button",{on:{click:e.optimize}},[e._v("Optimize")])])])]:e._e(),e.s4Visible?n("p",[e._v("STEP 4: "),n("button",{on:{click:e.download}},[e._v("download")])]):e._e(),n("hr"),n("h3",[e._v("Utility")]),n("p",[e._v("Find UUID Usage")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchUUID,expression:"searchUUID"}],attrs:{type:"text",placeholder:"input the uuid here"},domProps:{value:e.searchUUID},on:{input:function(t){t.target.composing||(e.searchUUID=t.target.value)}}}),n("button",{staticStyle:{"margin-left":"10px"},on:{click:e.search}},[e._v("Search")])]),n("p",[n("pre",[e._v(e._s(e.searchResult))])])],2),n("div",{staticStyle:{float:"left",width:"30%"}},[n("p",[e._v("logs")]),e.logs.length?n("ul",{staticClass:"log"},e._l(e.logs,function(t,r){return n("li",{key:r},[e._v(e._s(t))])}),0):e._e()])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v("\n      This tool was designed to optimize json file exported by\n      "),n("a",{attrs:{href:"https://threejs.org/editor",target:"_blank"}},[e._v("threejs editor")]),e._v("\n      to reduce its size and improve performance.\n    ")])}],c=(n("5df3"),n("f400"),n("7f7f"),n("96cf"),n("3b8d")),a=n("75fc");n("456d"),n("ac6a");function s(e){return u.apply(this,arguments)}function u(){return u=Object(c["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(){var e=JSON.parse(this.result);t(e)},n.readAsText(e)})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),u.apply(this,arguments)}n("6b54");for(var l=[],f=0;f<256;f++)l[f]=(f<16?"0":"")+f.toString(16);function h(){var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,i=l[255&e]+l[e>>8&255]+l[e>>16&255]+l[e>>24&255]+"-"+l[255&t]+l[t>>8&255]+"-"+l[t>>16&15|64]+l[t>>24&255]+"-"+l[63&n|128]+l[n>>8&255]+"-"+l[n>>16&255]+l[n>>24&255]+l[255&r]+l[r>>8&255]+l[r>>16&255]+l[r>>24&255];return i.toUpperCase()}var g=/^[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}$/;function p(e){return"string"===typeof e&&g.test(e)}var d=n("768b"),m=(n("ffc1"),n("7618"));function v(e,t){null!==e&&"object"===Object(m["a"])(e)&&Object.entries(e).forEach(function(n){var r=Object(d["a"])(n,2),i=r[0],o=r[1];e.uuid&&t(o,i,e),"parent"!==i&&v(o,t)})}function b(e){var t={};v(e,function(e,n){"uuid"!==n||t[e]||(t[e]=h())}),v(e,function(e,n,r){p(e)&&(r[n]=t[e]||e)});var n={};Object.keys(e.scripts).forEach(function(r){n[t[r]]=e.scripts[r]}),e.scripts=n}var j=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise(function(t){setTimeout(function(){t(e.apply(void 0,n))},0)})}};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Group";return{uuid:h(),type:t,name:e,layers:1,matrix:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],children:[]}}var w=["geometries","images","materials","textures"],O=j(function(e,t){e.forEach(function(e){return b(e)});var n=JSON.parse(JSON.stringify(e[0])),r=n.scene;return n.scripts={},w.forEach(function(e){return r[e]=[]}),r.object=y("Scene","Scene"),r.object.background=e[0].scene.object.background,e.forEach(function(e,i){var o=e.scene;Object.assign(n.scripts,e.scripts),w.forEach(function(e){return r[e]=r[e].concat(o[e])});var c=y(t[i]);c.children=o.object.children,r.object.children.push(c)}),n}),_=(n("4f7f"),n("4917"),n("f559"),n("a69f"),n("6762"),n("2fdb"),n("cebc")),x=(n("55dd"),!0);function k(e){x=e}function A(){return x}function P(e,t){e.sort(function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0})}function S(e){e.forEach(function(e){var t=Object(_["a"])({},e);delete t.uuid,x&&delete t.name,e.json=JSON.stringify(t)}),P(e,"json")}function I(e){e.forEach(function(e){return delete e.json})}function N(e,t,n){var r=1,i=0;while(r<e.length)t(e[r])===t(e[r-1])?(n.set(e[r].uuid,e[r-1].uuid),e.splice(r,1),i++):r++;return i}function E(e){return["Group","Object3D","Scene"].includes(e.type)}var J=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function z(e){return e&&e.matrix.toString()===J.toString()}function U(e,t,n){return new Promise(function(r){var i=e.url,o=new Image;o.src=i,o.onload=function(){var c=Math.log2(o.width),a=Math.log2(o.height),s=Math.floor(c)!==c||Math.floor(a)!==a||n&&c>11||n&&a>11,u=t&&!i.startsWith("data:image/jpeg");if(s||u){var l=Math.pow(2,Math.round(c)),f=Math.pow(2,Math.round(a)),h=Math.pow(2,11);s&&(l>h&&(f=f/l*h,l=h),f>h&&(l=l/f*h,f=h));var g=document.createElement("canvas");g.width=l,g.height=f;var p=g.getContext("2d");p.drawImage(o,0,0,l,f),e.url=g.toDataURL(t?"image/jpeg":i.match(/:(.+);/)[1],t?.6:1),r(!0)}else r(!1)}})}var $=j(function(e,t){return P(e,"url"),N(e,function(e){return e.url},t)}),M=j(function(e,t){e.forEach(function(e){var n=t.get(e.image);n&&(e.image=n)}),S(e);var n=N(e,function(e){return e.json},t);return I(e),n}),R=j(function(e,t){e.forEach(function(e){Object.entries(e).forEach(function(n){var r=Object(d["a"])(n,2),i=r[0],o=r[1];p(o)&&t.has(o)&&(e[i]=t.get(o))})}),S(e);var n=N(e,function(e){return e.json},t);return I(e),n}),G=j(function(e,t){S(e);var n=N(e,function(e){return e.json},t);return I(e),n}),T=j(function(e,t){var n=0;function r(e){Object.entries(e).forEach(function(i){var o=Object(d["a"])(i,2),c=o[0],a=o[1];"children"===c&&Array.isArray(a)?a.forEach(function(e){return r(e)}):(p(a)&&(e[c]=t.get(a)||a),e[c]!==a&&n++)})}return r(e),n}),D=j(function(e){var t=0;return v(e,function(e,n,r){if(r.children){var i=r.children.length;r.children=r.children.filter(function(e){return!1!==e.visible}),t+=i-r.children.length}}),t}),C=j(function(e){var t=JSON.parse(JSON.stringify(e)),n={},r=[];v(t,function(e,t,i){n[i.uuid]||(n[i.uuid]=!0,r.push([i.uuid,i])),A()&&delete i.name,delete i.uuid,i.children&&i.children.forEach(function(e){return e.parent=i})});var i=r.map(function(e){var t=Object(d["a"])(e,2),n=t[0],r=t[1];if(!E(r)){var i=JSON.parse(JSON.stringify(e[1],function(e,t){return"children"===e?void 0:t})),o=i;while(o){while(z(o.parent))o.parent=o.parent.parent;o=o.parent}return[n,JSON.stringify(i)]}}).filter(function(e){return e});P(i,1);var o=0,c=new Set;return i.forEach(function(e,t,n){t&&e[1]===n[t-1][1]&&(c.add(n[t][0]),o++)}),v(e,function(e,t,n){n.children&&(n.children=n.children.filter(function(e){return!c.has(e.uuid)}))}),o}),V=j(function(e){var t={},n=w.reduce(function(t,n){return t+e[n].length},0),r=function(){var t=!1;if(v(e.object,function(e,r,i){i.children&&(i.children=i.children.filter(function(e){var r=!E(e)||i.children.length;return t=t||!r,n+=!r,r}))}),!t)return"break"};while(1){var i=r();if("break"===i)break}return v(e.object,function(e){p(e)&&(t[e]=!0)}),e.geometries=e.geometries.filter(function(e){return t[e.uuid]}),e.geometries.forEach(function(e){return t[e.uuid]=!0}),e.materials=e.materials.filter(function(e){return t[e.uuid]}),e.materials.forEach(function(e){return Object.entries(e).forEach(function(e){var n=Object(d["a"])(e,2),r=(n[0],n[1]);p(r)&&(t[r]=!0)})}),e.textures=e.textures.filter(function(e){return t[e.uuid]}),e.textures.forEach(function(e){return t[e.image]=!0}),e.images=e.images.filter(function(e){return t[e.uuid]}),n-w.reduce(function(t,n){return t+e[n].length},0)}),F=n("8ef7");function L(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"app",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=document.createElement("a");r?(t=new Blob([Object(F["encode"])(e)],{type:"application/octet-stream"}),i.download=n+"-optimize.msgpack"):(t=new Blob([JSON.stringify(e)]),i.download=n+"-optimize.json"),i.href=URL.createObjectURL(t),i.click()}n("14b9"),n("7514"),n("8615");function Z(e,t){if("object"===Object(m["a"])(e)){e.uuid&&t.set(e.uuid,e);var n=Array.isArray(e)?e:Object.values(e);n.forEach(function(e){return Z(e,t)})}}function B(e,t){var n=new Map;Z(e,n);var r=[];return n.forEach(function(e){var n=Object.values(e),i=n.find(function(e){return e.toString().includes(t)});i&&r.push(e)}),r.length?r.map(function(e){return JSON.stringify(e,function(e,t){return Array.isArray(t)&&"number"===typeof t[0]?t.length>5?JSON.stringify(t.slice(0,5)).slice(0,-1)+" ...]":JSON.stringify(t):t},2)}).join("\n\n".concat("-".repeat(50),"\n\n")):"Nothing found"}var W={name:"app",data:function(){return{files:[],logs:[],step:0,config:{ignoreName:!0,toJPG:!0,resizeImage:!0,removeInvisible:!0,removeObjects:!0,compress:!1},searchUUID:"",searchResult:""}},computed:{s2Visible:function(){return!!this.files.length},s3Visible:function(){return this.s2Visible&&this.step>=3},s4Visible:function(){return this.s3Visible&&this.step>=4}},methods:{reset:function(){var e=this;this.logs=[],Object.keys(this.config).forEach(function(t){return e.config[t]=!0}),this.config.compress=!1},fileChange:function(e){this.files=Object(a["a"])(e.target.files),this.step=1,this.json=null},log:function(e){this.logs.push(e)},fileCheck:function(){return this.files.length?(this.log("".concat(this.files.length," file").concat(this.files.length>1?"s":""," detected")),!!this.files.every(function(e){return"application/json"===e.type})||alert("Only json files are accepted")):alert("Plase choose files at STEP 1")},loadFile:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.log("loading"),e.next=3,s(this.files);case 3:if(t=e.sent,t.every(function(e){return e.metadata&&"App"===e.metadata.type})){e.next=6;break}return e.abrupt("return",alert("Please choose valid json files exported by threejs editor"));case 6:this.log("load complete"),this.jsons=t;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),analyse:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.reset(),this.fileCheck()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.loadFile();case 5:if(t=this.jsons,this.json=t[0],!(t.length>1)){e.next=13;break}return this.log("merging files"),e.next=11,O(t,this.files.map(function(e){return e.name.slice(0,-5)}));case 11:this.json=e.sent,this.log("merging complete");case 13:this.step=3;case 14:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),optimize:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n,r,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.json.scene,n=this.config,r=new Map,i=0,k(n.ignoreName),this.log("removing duplicate images"),e.next=8,$(t.images,r);case 8:i=e.sent,this.log("".concat(i," image").concat(i>1?"s were":" was"," removed")),this.log("processing images"),this.log("0 image was processed"),i=0,o=0;case 14:if(!(o<t.images.length)){e.next=22;break}return e.next=17,U(t.images[o],n.toJPG,n.resizeImage);case 17:c=e.sent,c&&(i++,this.logs.pop(),this.log("".concat(i," image").concat(i>1?"s were":" was"," processed")));case 19:o++,e.next=14;break;case 22:return this.log("removing duplicate textures"),e.next=25,M(t.textures,r);case 25:return i=e.sent,this.log("".concat(i," texture").concat(i>1?"s were":" was"," removed")),this.log("removing duplicate materials"),e.next=30,R(t.materials,r);case 30:return i=e.sent,this.log("".concat(i," material").concat(i>1?"s were":" was"," removed")),this.log("removing duplicate geometries"),e.next=35,G(t.geometries,r);case 35:return i=e.sent,this.log("".concat(i," geometr").concat(i>1?"ies were":"y was"," removed")),this.log("reattach object attached uuids"),e.next=40,T(t.object,r);case 40:if(i=e.sent,this.log("".concat(i," object").concat(i>1?"s were":" was"," reattached")),!n.removeInvisible){e.next=48;break}return this.log("removing invisible objects"),e.next=46,D(t.object);case 46:i=e.sent,this.log("".concat(i," object").concat(i>1?"s were":" was"," removed"));case 48:if(!n.removeObjects){e.next=54;break}return this.log("removing duplicate objects"),e.next=52,C(t.object);case 52:i=e.sent,this.log("".concat(i," object").concat(i>1?"s were":" was"," removed"));case 54:return this.log("removing unused resources"),e.next=57,V(t);case 57:i=e.sent,this.log("".concat(i," unused resource").concat(i>1?"s were":" was"," removed")),this.step=4;case 60:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),download:function(){L(this.json,this.files[0].name.slice(0,-5),this.config.compress)},search:function(){return p(this.searchUUID)?this.json?this.files.length>1?alert("Only support search in one json file"):void(this.searchResult=B(this.json,this.searchUUID)):alert("Please analyse a json in optimizer first"):alert("Please input a valid uuid")}}},q=W,H=n("2877"),K=Object(H["a"])(q,i,o,!1,null,null,null),Q=K.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Q)}}).$mount("#app")}});