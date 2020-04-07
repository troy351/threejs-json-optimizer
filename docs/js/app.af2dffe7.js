(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],f=0,g=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{float:"left",width:"70%"}},[n("h3",[e._v("Optimizer")]),e._m(0),n("p",[e._v(" STEP 1: "),n("input",{attrs:{type:"file",multiple:"",accept:"application/json"},on:{change:e.fileChange}}),e._v(" Choose "),n("code",[e._v("app.json")]),e._v(" file that in editor published "),n("code",[e._v("zip")]),e._v(" file (note: all json files will be merged when multiple file selected) ")]),e.s2Visible?n("p",[e._v("STEP 2: "),n("button",{on:{click:e.analyse}},[e._v("Analyse")])]):e._e(),e.s3Visible?[n("p",[e._v("STEP 3: Choose optimize options")]),n("ul",[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.ignoreName,expression:"config.ignoreName"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.ignoreName)?e._i(e.config.ignoreName,null)>-1:e.config.ignoreName},on:{change:function(t){var n=e.config.ignoreName,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"ignoreName",n.concat([o])):a>-1&&e.$set(e.config,"ignoreName",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"ignoreName",i)}}}),e._v("ignore name ("),n("code",[e._v("name")]),e._v(" will be ignored while comparing two jsons)")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.toJPG,expression:"config.toJPG"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.toJPG)?e._i(e.config.toJPG,null)>-1:e.config.toJPG},on:{change:function(t){var n=e.config.toJPG,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"toJPG",n.concat([o])):a>-1&&e.$set(e.config,"toJPG",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"toJPG",i)}}}),e._v("convert png to jpg to reduce size")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.resizeImage,expression:"config.resizeImage"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.resizeImage)?e._i(e.config.resizeImage,null)>-1:e.config.resizeImage},on:{change:function(t){var n=e.config.resizeImage,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"resizeImage",n.concat([o])):a>-1&&e.$set(e.config,"resizeImage",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"resizeImage",i)}}}),e._v("reduce image resolution to less than 2048x2048")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeInvisible,expression:"config.removeInvisible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeInvisible)?e._i(e.config.removeInvisible,null)>-1:e.config.removeInvisible},on:{change:function(t){var n=e.config.removeInvisible,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"removeInvisible",n.concat([o])):a>-1&&e.$set(e.config,"removeInvisible",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"removeInvisible",i)}}}),e._v("remove invisible objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeObjects,expression:"config.removeObjects"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeObjects)?e._i(e.config.removeObjects,null)>-1:e.config.removeObjects},on:{change:function(t){var n=e.config.removeObjects,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"removeObjects",n.concat([o])):a>-1&&e.$set(e.config,"removeObjects",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"removeObjects",i)}}}),e._v("remove duplicate objects")]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.config.removeUserData,expression:"config.removeUserData"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.config.removeUserData)?e._i(e.config.removeUserData,null)>-1:e.config.removeUserData},on:{change:function(t){var n=e.config.removeUserData,r=t.target,i=!!r.checked;if(Array.isArray(n)){var o=null,a=e._i(n,o);r.checked?a<0&&e.$set(e.config,"removeUserData",n.concat([o])):a>-1&&e.$set(e.config,"removeUserData",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.config,"removeUserData",i)}}}),e._v("remove userData")]),n("li",[n("button",{on:{click:e.optimize}},[e._v("Optimize")])])])]:e._e(),e.s4Visible?n("p",[e._v("STEP 4: "),n("button",{on:{click:e.download}},[e._v("download")])]):e._e(),n("hr"),n("h3",[e._v("Utility")]),n("p",[e._v("Find UUID Usage")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchUUID,expression:"searchUUID"}],attrs:{type:"text",placeholder:"input the uuid here"},domProps:{value:e.searchUUID},on:{input:function(t){t.target.composing||(e.searchUUID=t.target.value)}}}),n("button",{staticStyle:{"margin-left":"10px"},on:{click:e.search}},[e._v("Search")])]),n("p",[n("pre",[e._v(e._s(e.searchResult))])])],2),n("div",{staticStyle:{float:"left",width:"30%"}},[n("p",[e._v("logs")]),e.logs.length?n("ul",{staticClass:"log"},e._l(e.logs,(function(t,r){return n("li",{key:r},[e._v(e._s(t))])})),0):e._e()])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v(" This tool was designed to optimize json file exported by "),n("a",{attrs:{href:"https://threejs.org/editor",target:"_blank"}},[e._v("threejs editor")]),e._v(" to reduce its size and improve performance. ")])}],a=(n("99af"),n("a623"),n("d81d"),n("fb6a"),n("b0c0"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),c=n("2909"),s=n("5530");function u(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return new Promise((function(t){var n=new FileReader;n.onload=function(){var e=JSON.parse(this.result);t(e)},n.readAsText(e)}))})));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}n("4160"),n("159b"),n("25f0");for(var f=[],g=0;g<256;g++)f[g]=(g<16?"0":"")+g.toString(16);function d(){var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0,i=f[255&e]+f[e>>8&255]+f[e>>16&255]+f[e>>24&255]+"-"+f[255&t]+f[t>>8&255]+"-"+f[t>>16&15|64]+f[t>>24&255]+"-"+f[63&n|128]+f[n>>8&255]+"-"+f[n>>16&255]+f[n>>24&255]+f[255&r]+f[r>>8&255]+f[r>>16&255]+f[r>>24&255];return i.toUpperCase()}var v=/^[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}$/;function h(e){return"string"===typeof e&&v.test(e)}n("4fad");var m=n("3835"),p=n("53ca");function b(e,t){null!==e&&"object"===Object(p["a"])(e)&&Object.entries(e).forEach((function(n){var r=Object(m["a"])(n,2),i=r[0],o=r[1];e.uuid&&t(o,i,e),"parent"!==i&&b(o,t)}))}function j(e){var t={};b(e,(function(e,n){"uuid"!==n||t[e]||(t[e]=d())})),b(e,(function(e,n,r){h(e)&&(r[n]=t[e]||e)}))}var y=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise((function(t){setTimeout((function(){t(e.apply(void 0,n))}),0)}))}};function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Group";return{uuid:d(),type:t,name:e,layers:1,matrix:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],children:[]}}var x=["geometries","images","materials","textures"],O=y((function(e,t){e.forEach((function(e){return j(e)}));var n=Object(s["a"])({},e[0]);return x.forEach((function(e){return n[e]=[]})),n.object=w("merged-group"),e.forEach((function(e,r){x.forEach((function(t){return n[t]=n[t].concat(e[t])}));var i=w(t[r]);i.children=e.object.children,n.object.children.push(i)})),n})),_=(n("4de4"),n("13d5"),n("90d7"),n("ac1f"),n("6062"),n("466d"),n("2ca0"),n("caad"),n("a434"),!0);function k(e){_=e}function P(){return _}function A(e,t){e.sort((function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}))}function I(e){e.forEach((function(e){var t=Object(s["a"])({},e);delete t.uuid,_&&delete t.name,e.json=JSON.stringify(t)})),A(e,"json")}function U(e){e.forEach((function(e){return delete e.json}))}function S(e,t,n){var r=1,i=0;while(r<e.length)t(e[r])===t(e[r-1])?(n.set(e[r].uuid,e[r-1].uuid),e.splice(r,1),i++):r++;return i}function N(e){return["Group","Object3D","Scene"].includes(e.type)}var E=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];function D(e){return e&&e.matrix.toString()===E.toString()}function J(e,t,n){return new Promise((function(r){var i=e.url,o=new Image;o.src=i,o.onload=function(){var a=Math.log2(o.width),c=Math.log2(o.height),s=Math.floor(a)!==a||Math.floor(c)!==c||n&&a>11||n&&c>11,u=t&&!i.startsWith("data:image/jpeg");if(s||u){var l=Math.pow(2,Math.round(a)),f=Math.pow(2,Math.round(c)),g=Math.pow(2,11);s&&(l>g&&(f=f/l*g,l=g),f>g&&(l=l/f*g,f=g));var d=document.createElement("canvas");d.width=l,d.height=f;var v=d.getContext("2d");v.drawImage(o,0,0,l,f),e.url=d.toDataURL(t?"image/jpeg":i.match(/:(.+);/)[1],t?.6:1),r(!0)}else r(!1)}}))}var z=y((function(e,t){return A(e,"url"),S(e,(function(e){return e.url}),t)})),$=y((function(e,t){e.forEach((function(e){var n=t.get(e.image);n&&(e.image=n)})),I(e);var n=S(e,(function(e){return e.json}),t);return U(e),n})),M=y((function(e,t){e.forEach((function(e){Object.entries(e).forEach((function(n){var r=Object(m["a"])(n,2),i=r[0],o=r[1];h(o)&&t.has(o)&&(e[i]=t.get(o))}))})),I(e);var n=S(e,(function(e){return e.json}),t);return U(e),n})),R=y((function(e,t){I(e);var n=S(e,(function(e){return e.json}),t);return U(e),n})),G=y((function(e,t){var n=0;function r(e){Object.entries(e).forEach((function(i){var o=Object(m["a"])(i,2),a=o[0],c=o[1];"children"===a&&Array.isArray(c)?c.forEach((function(e){return r(e)})):(h(c)&&(e[a]=t.get(c)||c),e[a]!==c&&n++)}))}return r(e),n})),T=y((function(e){var t=0;return b(e,(function(e,n,r){if(r.children){var i=r.children.length;r.children=r.children.filter((function(e){return!1!==e.visible})),t+=i-r.children.length}})),t})),C=y((function(e){var t=JSON.parse(JSON.stringify(e)),n={},r=[];b(t,(function(e,t,i){n[i.uuid]||(n[i.uuid]=!0,r.push([i.uuid,i])),P()&&delete i.name,delete i.uuid,i.children&&i.children.forEach((function(e){return e.parent=i}))}));var i=r.map((function(e){var t=Object(m["a"])(e,2),n=t[0],r=t[1];if(!N(r)){var i=JSON.parse(JSON.stringify(e[1],(function(e,t){return"children"===e?void 0:t}))),o=i;while(o){while(D(o.parent))o.parent=o.parent.parent;o=o.parent}return[n,JSON.stringify(i)]}})).filter((function(e){return e}));A(i,1);var o=0,a=new Set;return i.forEach((function(e,t,n){t&&e[1]===n[t-1][1]&&(a.add(n[t][0]),o++)})),b(e,(function(e,t,n){n.children&&(n.children=n.children.filter((function(e){return!a.has(e.uuid)})))})),o})),V=y((function(e){var t={},n=x.reduce((function(t,n){return t+(e[n]||[]).length}),0),r=function(){var t=!1;if(b(e.object,(function(e,r,i){i.children&&(i.children=i.children.filter((function(e){var r=!N(e)||i.children.length;return t=t||!r,n+=!r,r})))})),!t)return"break"};while(1){var i=r();if("break"===i)break}return b(e.object,(function(e){h(e)&&(t[e]=!0)})),e.geometries&&(e.geometries=e.geometries.filter((function(e){return t[e.uuid]})),e.geometries.forEach((function(e){return t[e.uuid]=!0}))),e.materials&&(e.materials=e.materials.filter((function(e){return t[e.uuid]})),e.materials.forEach((function(e){return Object.entries(e).forEach((function(e){var n=Object(m["a"])(e,2),r=(n[0],n[1]);h(r)&&(t[r]=!0)}))}))),e.textures&&(e.textures=e.textures.filter((function(e){return t[e.uuid]})),e.textures.forEach((function(e){return t[e.image]=!0}))),e.images&&(e.images=e.images.filter((function(e){return t[e.uuid]}))),n-x.reduce((function(t,n){return t+(e[n]||[]).length}),0)})),F=y((function(e){var t=0;return b(e,(function(e,n,r){"userData"===n&&(delete r.userData,t++)})),t}));n("2b3d");function L(e,t){var n=document.createElement("a");n.download=e,n.href=URL.createObjectURL(t),n.click()}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"app";L(t+"-optimize.json",new Blob([JSON.stringify(e)]))}n("7db0"),n("a15b"),n("07ac"),n("2532"),n("38cf");function B(e,t){if("object"===Object(p["a"])(e)){e.uuid&&t.set(e.uuid,e);var n=Array.isArray(e)?e:Object.values(e);n.forEach((function(e){return B(e,t)}))}}function W(e,t){var n=new Map;B(e,n);var r=[];return n.forEach((function(e){var n=Object.values(e),i=n.find((function(e){return e.toString().includes(t)}));i&&r.push(e)})),r.length?r.map((function(e){return JSON.stringify(e,(function(e,t){return Array.isArray(t)&&"number"===typeof t[0]?t.length>5?JSON.stringify(t.slice(0,5)).slice(0,-1)+" ...]":JSON.stringify(t):t}),2)})).join("\n\n".concat("-".repeat(50),"\n\n")):"Nothing found"}var q={ignoreName:!0,toJPG:!0,resizeImage:!0,removeInvisible:!0,removeObjects:!0,removeUserData:!0,separateImages:!1},H={name:"app",data:function(){return{files:[],logs:[],step:0,config:Object(s["a"])({},q),searchUUID:"",searchResult:""}},computed:{s2Visible:function(){return!!this.files.length},s3Visible:function(){return this.s2Visible&&this.step>=3},s4Visible:function(){return this.s3Visible&&this.step>=4}},methods:{reset:function(){this.logs=[],this.config=Object(s["a"])({},q)},fileChange:function(e){this.files=Object(c["a"])(e.target.files),this.step=1,this.json=null},log:function(e){this.logs.push(e)},fileCheck:function(){return this.files.length?(this.log("".concat(this.files.length," file").concat(this.files.length>1?"s":""," detected")),!!this.files.every((function(e){return"application/json"===e.type}))||alert("Only json files are accepted")):alert("Plase choose files at STEP 1")},loadFile:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.log("loading"),t.next=3,u(e.files);case 3:if(n=t.sent,n.every((function(e){return e.metadata}))){t.next=6;break}return t.abrupt("return",alert("Please choose valid json files exported by threejs editor"));case 6:e.log("load complete"),e.jsons=n.map((function(e){return"App"===e.metadata.type?e.scene:e}));case 8:case"end":return t.stop()}}),t)})))()},analyse:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.reset(),e.fileCheck()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,e.loadFile();case 5:if(n=e.jsons,e.json=n[0],!(n.length>1)){t.next=13;break}return e.log("merging files"),t.next=11,O(n,e.files.map((function(e){return e.name.slice(0,-5)})));case 11:e.json=t.sent,e.log("merging complete");case 13:e.step=3;case 14:case"end":return t.stop()}}),t)})))()},optimize:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i,o,a,c,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.json,r=e.config,i=new Map,o=0,k(r.ignoreName),a=n.images||[],e.log("removing duplicate images"),t.next=9,z(a,i);case 9:o=t.sent,e.log("".concat(o," image").concat(o>1?"s were":" was"," removed")),e.log("processing images"),e.log("0 image was processed"),o=0,c=0;case 15:if(!(c<a.length)){t.next=23;break}return t.next=18,J(a[c],r.toJPG,r.resizeImage);case 18:s=t.sent,s&&(o++,e.logs.pop(),e.log("".concat(o," image").concat(o>1?"s were":" was"," processed")));case 20:c++,t.next=15;break;case 23:return e.log("removing duplicate textures"),t.next=26,$(n.textures||[],i);case 26:return o=t.sent,e.log("".concat(o," texture").concat(o>1?"s were":" was"," removed")),e.log("removing duplicate materials"),t.next=31,M(n.materials||[],i);case 31:return o=t.sent,e.log("".concat(o," material").concat(o>1?"s were":" was"," removed")),e.log("removing duplicate geometries"),t.next=36,R(n.geometries||[],i);case 36:return o=t.sent,e.log("".concat(o," geometr").concat(o>1?"ies were":"y was"," removed")),e.log("reattach object attached uuids"),t.next=41,G(n.object||[],i);case 41:if(o=t.sent,e.log("".concat(o," object").concat(o>1?"s were":" was"," reattached")),!r.removeInvisible){t.next=49;break}return e.log("removing invisible objects"),t.next=47,T(n.object||[]);case 47:o=t.sent,e.log("".concat(o," object").concat(o>1?"s were":" was"," removed"));case 49:if(!r.removeObjects){t.next=55;break}return e.log("removing duplicate objects"),t.next=53,C(n.object||[]);case 53:o=t.sent,e.log("".concat(o," object").concat(o>1?"s were":" was"," removed"));case 55:return e.log("removing unused resources"),t.next=58,V(n);case 58:if(o=t.sent,e.log("".concat(o," unused resource").concat(o>1?"s were":" was"," removed")),!r.removeUserData){t.next=66;break}return e.log("removing userData"),t.next=64,F(n);case 64:o=t.sent,e.log("".concat(o," userData was removed"));case 66:e.step=4;case 67:case"end":return t.stop()}}),t)})))()},download:function(){Z(this.json,this.files[0].name.slice(0,-5))},search:function(){return h(this.searchUUID)?this.json?this.files.length>1?alert("Only support search in one json file"):void(this.searchResult=W(this.json,this.searchUUID)):alert("Please analyse a json in optimizer first"):alert("Please input a valid uuid")}}},K=H,Q=n("2877"),X=Object(Q["a"])(K,i,o,!1,null,null,null),Y=X.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Y)}}).$mount("#app")}});