parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"R0W2":[function(require,module,exports) {

},{}],"dROn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.பட்டியலி=void 0;var e="<div class='கட்டங்கள்'> %s </div>",n="<div class='கட்டம் 1_கட்டம்'><span> 2 </span></div>",r=function(e){var n="பெருந்தலைப்பு";return e.length<12?n="குறுந்தலைப்பு":e.length<30&&(n="நெடுந்தலைப்பு"),n+" "+e},c={"செதுக்கு":function(c,t){var a="";t.forEach(function(e){a+=n.replace(/1/g,r(e["பெயர்"])).replace(/2/g,e["பெயர்"].replace(/_/g," "))+"\n"}),c(e.replace("%s",a),function(){t.forEach(function(e){document.querySelector("."+e["பெயர்"]+"_கட்டம்").addEventListener("click",e["தீண்டுவினை"])})})}};exports.பட்டியலி=c;
},{}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"VV5v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.பக்கக்குறிப்பி=void 0;var e=document.querySelector(".உடல்"),t=document.querySelector(".தளம்"),o="_சுருள்நிலை_சுட்டி",n="தொடு",r=function(){var e=document.querySelector(".பக்கக்குறிப்பு span");window.onscroll().கோர்(function(){var t=Math.ceil(100*document.scrollingElement.scrollTop/document.scrollingElement.scrollHeight);t>=0&&(e.innerHTML=(t<10?"0":"")+t),e.parentNode.classList.remove(n)})},c=function(e){var t=localStorage.getItem(e+o);t&&(window.scrollTo({top:parseInt(t),left:0,behavior:"auto"}),setTimeout(function(){return document.querySelector(".பக்கக்குறிப்பு").classList.add(n)},800))},l=function(e){var t=document.querySelector(".பக்கக்குறிப்பு");t.addEventListener("click",function(){localStorage.setItem(e+o,document.scrollingElement.scrollTop),t.classList.add(n)})},s={"செதுக்கு":function(e){require("_bundle_loader")(require.resolve("./பக்கக்குறிப்பு.html")).then(function(o){t.insertAdjacentHTML("beforeend",o),c(e),l(e),r()})}};exports.பக்கக்குறிப்பி=s;
},{"_bundle_loader":"TUK3","./பக்கக்குறிப்பு.html":[["பக்கக்குறிப்பு.968ff713.html","A1Aa"],"A1Aa"]}],"BRdM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைகள்=void 0;var e={"தேர்வு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html"))},"தரிசனம்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html"))},"எஞ்சினியர்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html"))}};exports.சிறுகதைகள்=e;
},{"_bundle_loader":"TUK3","../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html":[["தேர்வு.0a8fef72.html","A16C"],"A16C"],"../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html":[["தரிசனம்.96075a32.html","OmUu"],"OmUu"],"../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html":[["எஞ்சினியர்.84eeeccf.html","HYO8"],"HYO8"]}],"x3hi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைப்பட்டியலி=void 0;var e=require("../கோப்பு/சிறுகதைகள்.js"),o=e.சிறுகதைகள்,r="#சிறுகதைகள்/",t={"பட்டியலைத்தா":function(){var e=[];return Object.keys(o).forEach(function(o){e.push({"பெயர்":o,"தீண்டுவினை":function(){window.location.href=window.location.href.split("#")[0]+r+o}})}),e}};exports.சிறுகதைப்பட்டியலி=t;
},{"../கோப்பு/சிறுகதைகள்.js":"BRdM"}],"scDL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_பணி=void 0;var e=require("../கோப்பு/சிறுகதைகள்.js"),r=e.சிறுகதைகள்,t={},o={"கதையைத்தா":function(e){return void 0===t[e]?r[e]().then(function(r){var o='<div class="சிறுகதைகள்">'+r+"</div>";return t[e]=o,o}):Promise.resolve(t[e])}};exports.சிறுகதை_பணி=o;
},{"../கோப்பு/சிறுகதைகள்.js":"BRdM"}],"tB3J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_திசைவி=void 0;var e=require("../../பாகங்கள்/பட்டியல்/பட்டியல்.js"),r=require("../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js"),i=require("../பணி/சிறுகதைப்பட்டியல்.js"),t=require("../பணி/சிறுகதை.js"),s=e.பட்டியலி,u=i.சிறுகதைப்பட்டியலி,n=t.சிறுகதை_பணி,o=r.பக்கக்குறிப்பி,c=document.querySelector(".கொக்கி"),l={"திசைவி":function(e,r){if(c.innerHTML="சிறுகதைகள்",e.includes("/")){var i=e.split("/");n.கதையைத்தா(i[1]).then(function(e){r(e,function(){o.செதுக்கு(i[1])})})}else s.செதுக்கு(r,u.பட்டியலைத்தா())}};exports.சிறுகதை_திசைவி=l;
},{"../../பாகங்கள்/பட்டியல்/பட்டியல்.js":"dROn","../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js":"VV5v","../பணி/சிறுகதைப்பட்டியல்.js":"x3hi","../பணி/சிறுகதை.js":"scDL"}],"xNUP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.கட்டுரைகள்=void 0;var e={"மக்களாட்சி":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/கட்டுரைகள்/மக்களாட்சி.html"))}};exports.கட்டுரைகள்=e;
},{"_bundle_loader":"TUK3","../../களஞ்சியம்/கட்டுரைகள்/மக்களாட்சி.html":[["மக்களாட்சி.49fc4d7c.html","Ukmz"],"Ukmz"]}],"cl26":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.கட்டுரைப்பட்டியலி=void 0;var e=require("../கோப்பு/கட்டுரைகள்.js"),o=e.கட்டுரைகள்,r="#கட்டுரைகள்/",t={"பட்டியலைத்தா":function(){var e=[];return Object.keys(o).forEach(function(o){e.push({"பெயர்":o,"தீண்டுவினை":function(){window.location.href=window.location.href.split("#")[0]+r+o}})}),e}};exports.கட்டுரைப்பட்டியலி=t;
},{"../கோப்பு/கட்டுரைகள்.js":"xNUP"}],"hJ1T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.கட்டுரை_பணி=void 0;var e=require("../கோப்பு/கட்டுரைகள்.js"),r=e.கட்டுரைகள்,t={},o={"கதையைத்தா":function(e){return void 0===t[e]?r[e]().then(function(r){var o='<div class="சிறுகதைகள்">'+r+"</div>";return t[e]=o,o}):Promise.resolve(t[e])}};exports.கட்டுரை_பணி=o;
},{"../கோப்பு/கட்டுரைகள்.js":"xNUP"}],"Qedl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.கட்டுரை_திசைவி=void 0;var e=require("../../பாகங்கள்/பட்டியல்/பட்டியல்.js"),r=require("../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js"),i=require("../பணி/கட்டுரைப்பட்டியல்.js"),t=require("../பணி/கட்டுரை.js"),s=e.பட்டியலி,u=i.கட்டுரைப்பட்டியலி,n=t.கட்டுரை_பணி,o=r.பக்கக்குறிப்பி,c=document.querySelector(".கொக்கி"),l={"திசைவி":function(e,r){if(c.innerHTML="கட்டுரைகள்",e.includes("/")){var i=e.split("/");n.கதையைத்தா(i[1]).then(function(e){r(e,function(){o.செதுக்கு(i[1])})})}else s.செதுக்கு(r,u.பட்டியலைத்தா())}};exports.கட்டுரை_திசைவி=l;
},{"../../பாகங்கள்/பட்டியல்/பட்டியல்.js":"dROn","../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js":"VV5v","../பணி/கட்டுரைப்பட்டியல்.js":"cl26","../பணி/கட்டுரை.js":"hJ1T"}],"uzms":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.மொழிபெயரியல்கள்_கோப்பு=void 0;var e={"ஆனாப்பிராங்கின்_நாட்குறிப்பு":{"முன்னுரை":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/முன்னுரை.html"))},"இயல்_ஒன்று":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஒன்று.html"))},"இயல்_இரண்டு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_இரண்டு.html"))},"இயல்_மூன்று":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_மூன்று.html"))},"இயல்_நான்கு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_நான்கு.html"))},"இயல்_ஐந்து":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஐந்து.html"))},"இயல்_ஆறு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஆறு.html"))},"இயல்_ஏழு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஏழு.html"))},"இயல்_எட்டு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_எட்டு.html"))},"பெயர்கள்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/பெயர்கள்.html"))}}};exports.மொழிபெயரியல்கள்_கோப்பு=e;
},{"_bundle_loader":"TUK3","../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/முன்னுரை.html":[["முன்னுரை.de2df711.html","y66y"],"y66y"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஒன்று.html":[["இயல்_ஒன்று.9945906c.html","aFLn"],"aFLn"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_இரண்டு.html":[["இயல்_இரண்டு.0aeb05b5.html","OIER"],"OIER"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_மூன்று.html":[["இயல்_மூன்று.7a81e514.html","A2bQ"],"A2bQ"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_நான்கு.html":[["இயல்_நான்கு.9abfd74a.html","Z9zI"],"Z9zI"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஐந்து.html":[["இயல்_ஐந்து.637cfd01.html","z0Ia"],"z0Ia"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஆறு.html":[["இயல்_ஆறு.fd0bf692.html","dgYh"],"dgYh"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_ஏழு.html":[["இயல்_ஏழு.2886bb6d.html","fwC0"],"fwC0"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/இயல்_எட்டு.html":[["இயல்_எட்டு.2a39a235.html","zcLs"],"zcLs"],"../../களஞ்சியம்/மொழிபெயர்ப்புகள்/ஆனாப்பிராங்கின்_நாட்குறிப்பு/பெயர்கள்.html":[["பெயர்கள்.4290be70.html","AJrh"],"AJrh"]}],"K65v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.மொழிபெயர்ப்பட்டியலி=void 0;var o=require("../கோப்பு/மொழிபெயரியல்கள்.js"),e=o.மொழிபெயரியல்கள்_கோப்பு,n="#மொழிபெயர்ப்புகள்/",t={"பட்டியலைத்தா":function(){var o=[];return Object.keys(e).forEach(function(e){o.push({"பெயர்":e,"தீண்டுவினை":function(){window.location.href=window.location.href.split("#")[0]+n+e}})}),o},"உட்பட்டியலைத்தா":function(o){var t=[];return Object.keys(e[o]).forEach(function(e){t.push({"பெயர்":e,"தீண்டுவினை":function(){window.location.href=window.location.href.split("#")[0]+n+o+"/"+e}})}),t}};exports.மொழிபெயர்ப்பட்டியலி=t;
},{"../கோப்பு/மொழிபெயரியல்கள்.js":"uzms"}],"Yapf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.மொழிபெயர்ப்பு_பணி=void 0;var e=require("../கோப்பு/மொழிபெயரியல்கள்.js"),r=e.மொழிபெயரியல்கள்_கோப்பு,t={},n={"உட்பட்டியலுடையாதா":function(e){return!(r[e]instanceof Function)},"கதையைத்தா":function(e,n){var o=e+"_|_"+n;return void 0===t[o]?(n?r[e][n]:r[e])().then(function(e){var r='<div class="சிறுகதைகள்">'+e+"</div>";return t[o]=r,r}):Promise.resolve(t[o])}};exports.மொழிபெயர்ப்பு_பணி=n;
},{"../கோப்பு/மொழிபெயரியல்கள்.js":"uzms"}],"zPwA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.மொழிபெயர்ப்பு_திசைவி=void 0;var e=require("../../பாகங்கள்/பட்டியல்/பட்டியல்.js"),r=require("../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js"),t=require("../பணி/மொழிபெயர்ப்பட்டியல்.js"),i=require("../பணி/மொழிபெயர்ப்பு.js"),n=e.பட்டியலி,s=t.மொழிபெயர்ப்பட்டியலி,u=i.மொழிபெயர்ப்பு_பணி,o=r.பக்கக்குறிப்பி,c=document.querySelector(".கொக்கி"),l={"திசைவி":function(e,r){if(c.innerHTML="மொழிபெயர்ப்புகள்",e.includes("/")){var t=e.split("/");2==t.length&&u.உட்பட்டியலுடையாதா(t[1])?n.செதுக்கு(r,s.உட்பட்டியலைத்தா(t[1])):u.கதையைத்தா(t[1],t[2]).then(function(e){r(e,function(){o.செதுக்கு(t[1]+"_|_"+t[2])})})}else n.செதுக்கு(r,s.பட்டியலைத்தா())}};exports.மொழிபெயர்ப்பு_திசைவி=l;
},{"../../பாகங்கள்/பட்டியல்/பட்டியல்.js":"dROn","../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js":"VV5v","../பணி/மொழிபெயர்ப்பட்டியல்.js":"K65v","../பணி/மொழிபெயர்ப்பு.js":"Yapf"}],"TSkI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.விழித்தளவி=void 0;var e={"செதுக்கு":function(e){require("_bundle_loader")(require.resolve("./விழித்தளம்.html")).then(function(r){return e(r,function(){var e=document.querySelector(".விழித்தளவுரை");require("_bundle_loader")(require.resolve("../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html")).then(function(r){e.innerHTML=r})})})}};exports.விழித்தளவி=e;
},{"_bundle_loader":"TUK3","./விழித்தளம்.html":[["விழித்தளம்.f3b7c6f1.html","rGpi"],"rGpi"],"../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html":[["விழித்தளவுரை.43cd8a9f.html","EyyM"],"EyyM"]}],"iMRT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.இணைப்பு_பணி=void 0;var e="தொடு_முனை",t="இலக்கு_முனை",o={_:e,"-":t},i={"உருவாக்கு":function(){var i=document.querySelectorAll(".இணைப்பு"),n={};i.forEach(function(e){if(e.attributes["இணைப்பு"]){var t=e.attributes["இணைப்பு"].value,i=t[t.length-1];t=t.substring(0,t.length-1),n[t]=n[t]||{},n[t][o[i]]=e}else e.attributes["வெளி_இணைப்பு"].value&&e.addEventListener("click",function(t){window.location.href=window.location.href.split("#")[0]+"#"+e.attributes["வெளி_இணைப்பு"].value})});var r=function(e,t,o){n[e][t]&&n[e][o]&&n[e][t].addEventListener("click",function(t){var i,r,l;window.scrollTo({top:(i=n[e][o].offsetTop,r=document.scrollingElement.scrollHeight,l=window.screen.availHeight,i<r-(l-=.15*l)&&(i-=.18*l),i),left:0,behavior:"auto"})})};Object.keys(n).forEach(function(o){r(o,e,t),r(o,t,e)})}};exports.இணைப்பு_பணி=i;
},{}],"DU64":[function(require,module,exports) {
"use strict";var n=require("./சிறுகதை.js"),e=require("./கட்டுரை.js"),t=require("./மொழிபெயர்ப்பு.js"),i=require("../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js"),r=require("../பணி/இணைப்பு.js"),o=document.querySelector(".தளம்"),u=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};o.innerHTML=n,e(),r.இணைப்பு_பணி.உருவாக்கு()},c=function(r){var o=r.split("#");if(2==o.length){var c=decodeURI(o[1]);null!=c.match("^சிறுகதைகள்")?n.சிறுகதை_திசைவி.திசைவி(c,u):null!=c.match("^மொழிபெயர்ப்புகள்")?t.மொழிபெயர்ப்பு_திசைவி.திசைவி(c,u):null!=c.match("^கட்டுரைகள்")&&e.கட்டுரை_திசைவி.திசைவி(c,u)}else i.விழித்தளவி.செதுக்கு(u)},a=function(){var n=[],e=!0;window.onscroll=function(t){return t&&e&&(setTimeout(function(){n.forEach(function(n){return n()}),e=!0},500),e=!1),{"கோர்":function(e){n.push(e)}}}};window.addEventListener("hashchange",function(n){c(n.newURL),a()}),window.addEventListener("load",function(n){c(window.location.href),a()});
},{"./சிறுகதை.js":"tB3J","./கட்டுரை.js":"Qedl","./மொழிபெயர்ப்பு.js":"zPwA","../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js":"TSkI","../பணி/இணைப்பு.js":"iMRT"}],"KOIX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சூழற்கொத்தாக்கி=void 0;var e=document.querySelector(".உடல்"),o=document.querySelector(".கொக்கி"),n=["சிறுகதைகள்","கட்டுரைகள்","மொழிபெயர்ப்புகள்"],t=function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.insertAdjacentHTML("beforeend",o),n()},r=function(){var e=document.querySelector("div.திரை");e.parentNode.removeChild(e);var o=document.querySelector("div.சூழற்கொத்து");o.parentNode.removeChild(o)},i={"செதுக்கு":function(){require("_bundle_loader")(require.resolve("./சூழற்கொத்து.html")).then(function(e){return t(e,function(){n.forEach(function(e){document.querySelector("."+e+"_சூழல்").addEventListener("click",function(n){o.innerHTML=e,r();var t="#"+e;window.location.href.includes("#")?window.location.href=window.location.href.split("#")[0]+t:window.location+=t})}),document.querySelector(".தொடர்புக்கு_சூழல்").addEventListener("click",function(e){window.location="https://docs.google.com/forms/d/e/1FAIpQLSf4riS491tEFuv9YiCtZ2g8PL7Jj3XL6redsUr1NYJndRkCyA/viewform?usp=sf_link"}),document.querySelector(".திரை").addEventListener("click",function(e){r()})})})}};exports.சூழற்கொத்தாக்கி=i;
},{"_bundle_loader":"TUK3","./சூழற்கொத்து.html":[["சூழற்கொத்து.7915f00b.html","Q1e1"],"Q1e1"]}],"C4a9":[function(require,module,exports) {
"use strict";require("../பாங்குகள்.நடு.css"),require("../பாகங்கள்/விழித்தளம்/விழித்தளம்.நடு.css"),require("../பாங்குகள்/சிறுகதைகள்.நடு.css"),require("../பாகங்கள்/பட்டியல்/பட்டியல்.நடு.css"),require("../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.நடு.css"),require("../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.நடு.css"),require("../சுவடிகள்/திசைவி/திசைவி.js");var e=require("../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.js");window.addEventListener("load",function(i){document.querySelector(".தலைப்பு").addEventListener("click",function(e){window.location.href.includes("#")&&(window.location.href=window.location.href.split("#")[0])}),document.querySelector(".கொக்கி").addEventListener("click",function(e){var i="#"+e.srcElement.innerHTML;window.location.href.includes("#")?window.location.href=window.location.href.split("#")[0]+i:window.location+=i}),document.querySelector("i.சூழற்கொத்து").addEventListener("click",function(i){e.சூழற்கொத்தாக்கி.செதுக்கு()})});
},{"../பாங்குகள்.நடு.css":"R0W2","../பாகங்கள்/விழித்தளம்/விழித்தளம்.நடு.css":"R0W2","../பாங்குகள்/சிறுகதைகள்.நடு.css":"R0W2","../பாகங்கள்/பட்டியல்/பட்டியல்.நடு.css":"R0W2","../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.நடு.css":"R0W2","../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.நடு.css":"R0W2","../சுவடிகள்/திசைவி/திசைவி.js":"DU64","../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.js":"KOIX"}],"A3BY":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("html",require("A3BY"));
},{}]},{},[0,"C4a9"], null)
//# sourceMappingURL=முகப்பு.e745813a.js.map