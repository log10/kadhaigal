parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"T0Vo":[function(require,module,exports) {

},{}],"dROn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.பட்டியலி=void 0;var e="<div class='கட்டங்கள்'> %s </div>",s="<div class='கட்டம் %s_கட்டம்'><span> %s </span></div>",c={"செதுக்கு":function(c,n){var r="";n.forEach(function(e){r+=s.replace(/%s/g,e["பெயர்"])+"\n"}),c(e.replace("%s",r),function(){n.forEach(function(e){document.querySelector("."+e["பெயர்"]+"_கட்டம்").addEventListener("click",e["தீண்டுவினை"])})})}};exports.பட்டியலி=c;
},{}],"ARet":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"yU0Q":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ARet"}],"VV5v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.பக்கக்குறிப்பி=void 0;var e=document.querySelector(".உடல்"),t=document.querySelector(".தளம்"),o="_சுருள்நிலை_சுட்டி",n="தொடு",r=function(){var e=document.querySelector(".பக்கக்குறிப்பு span");window.onscroll().கோர்(function(){var t=Math.ceil(100*document.scrollingElement.scrollTop/document.scrollingElement.scrollHeight);t>=0&&(e.innerHTML=(t<10?"0":"")+t),e.parentNode.classList.remove(n)})},c=function(e){var t=localStorage.getItem(e+o);t&&(window.scrollTo({top:parseInt(t),left:0,behavior:"auto"}),setTimeout(function(){return document.querySelector(".பக்கக்குறிப்பு").classList.add(n)},800))},l=function(e){var t=document.querySelector(".பக்கக்குறிப்பு");t.addEventListener("click",function(){localStorage.setItem(e+o,document.scrollingElement.scrollTop),t.classList.add(n)})},s={"செதுக்கு":function(e){require("_bundle_loader")(require.resolve("./பக்கக்குறிப்பு.html")).then(function(o){t.insertAdjacentHTML("beforeend",o),c(e),l(e),r()})}};exports.பக்கக்குறிப்பி=s;
},{"_bundle_loader":"yU0Q","./பக்கக்குறிப்பு.html":[["பக்கக்குறிப்பு.1d919e74.html","A1Aa"],"A1Aa"]}],"oG8U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைகள்=void 0;var e={"தேர்வு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html"))},"தரிசனம்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html"))},"எஞ்சினியர்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html"))}};exports.சிறுகதைகள்=e;
},{"_bundle_loader":"yU0Q","../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html":[["தேர்வு.0a8fef72.html","A16C"],"A16C"],"../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html":[["தரிசனம்.96075a32.html","OmUu"],"OmUu"],"../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html":[["எஞ்சினியர்.12dedb46.html","32HY"],"32HY"]}],"zxgV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைப்பட்டியலி=void 0;var e=require("./சிறுகதைகள்.js"),o=e.சிறுகதைகள்,r="#சிறுகதைகள்/",t={"பட்டியலைத்தா":function(){var e=[];return Object.keys(o).forEach(function(o){e.push({"பெயர்":o,"தீண்டுவினை":function(){window.location.href=window.location.href.split("#")[0]+r+o}})}),e}};exports.சிறுகதைப்பட்டியலி=t;
},{"./சிறுகதைகள்.js":"oG8U"}],"fake":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_சேவை=void 0;var e=require("../கோப்பு/சிறுகதைகள்.js"),r=e.சிறுகதைகள்,t={},o={"கதையைத்தா":function(e){return void 0===t[e]?r[e]().then(function(r){var o='<div class="சிறுகதைகள்">'+r+"</div>";return t[e]=o,o}):Promise.resolve(t[e])}};exports.சிறுகதை_சேவை=o;
},{"../கோப்பு/சிறுகதைகள்.js":"oG8U"}],"cUXn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_திசைவி=void 0;var e=require("../../பாகங்கள்/பட்டியல்/பட்டியல்.js"),r=require("../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js"),i=require("../கோப்பு/சிறுகதைப்பட்டியல்.js"),s=require("../சேவை/சிறுகதை.js"),t=e.பட்டியலி,u=i.சிறுகதைப்பட்டியலி,n=s.சிறுகதை_சேவை,o=r.பக்கக்குறிப்பி,c={"திசைவி":function(e,r){if(e.includes("/")){var i=e.split("/");n.கதையைத்தா(i[1]).then(function(e){r(e,function(){o.செதுக்கு(i[1])})})}else t.செதுக்கு(r,u.பட்டியலைத்தா())}};exports.சிறுகதை_திசைவி=c;
},{"../../பாகங்கள்/பட்டியல்/பட்டியல்.js":"dROn","../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js":"VV5v","../கோப்பு/சிறுகதைப்பட்டியல்.js":"zxgV","../சேவை/சிறுகதை.js":"fake"}],"/4TS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.விழித்தளவி=void 0;var e={"செதுக்கு":function(e){require("_bundle_loader")(require.resolve("./விழித்தளம்.html")).then(function(r){return e(r,function(){var e=document.querySelector(".விழித்தளவுரை");require("_bundle_loader")(require.resolve("../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html")).then(function(r){e.innerHTML=r})})})}};exports.விழித்தளவி=e;
},{"_bundle_loader":"yU0Q","./விழித்தளம்.html":[["விழித்தளம்.14a764b0.html","rGpi"],"rGpi"],"../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html":[["விழித்தளவுரை.8aaccb9c.html","EyyM"],"EyyM"]}],"U7sE":[function(require,module,exports) {
"use strict";var n=require("./சிறுகதை.js"),e=require("../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js"),t=document.querySelector(".தளம்"),i=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};t.innerHTML=n,e()},o=function(t){var o=t.split("#");if(2==o.length){var r=decodeURI(o[1]);null!=r.match("^சிறுகதைகள்")&&n.சிறுகதை_திசைவி.திசைவி(r,i)}else e.விழித்தளவி.செதுக்கு(i)},r=function(){var n=[],e=!0;window.onscroll=function(t){return t&&e&&(setTimeout(function(){n.forEach(function(n){return n()}),e=!0},500),e=!1),{"கோர்":function(e){n.push(e)}}}};window.addEventListener("hashchange",function(n){o(n.newURL),r()}),window.addEventListener("load",function(n){o(window.location.href),r()});
},{"./சிறுகதை.js":"cUXn","../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js":"/4TS"}],"C4a9":[function(require,module,exports) {
"use strict";require("./பாங்குகள்.css"),require("./பாகங்கள்/விழித்தளம்/விழித்தளம்.css"),require("./பாங்குகள்/சிறுகதைகள்.css"),require("./பாகங்கள்/பட்டியல்/பட்டியல்.css"),require("./பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.css"),require("./சுவடிகள்/திசைவி/திசைவி.js"),window.addEventListener("load",function(e){document.querySelector(".தலைப்பு").addEventListener("click",function(e){window.location.href.includes("#")&&(window.location.href=window.location.href.split("#")[0])}),document.querySelector(".சிறுகதையின்கொக்கி").addEventListener("click",function(e){window.location.href.includes("#")?window.location.href=window.location.href.split("#")[0]+"#சிறுகதைகள்":window.location+="#சிறுகதைகள்"}),document.querySelector(".தொடர்பின்கொக்கி").addEventListener("click",function(e){window.location="https://docs.google.com/forms/d/e/1FAIpQLSf4riS491tEFuv9YiCtZ2g8PL7Jj3XL6redsUr1NYJndRkCyA/viewform?usp=sf_link"})});
},{"./பாங்குகள்.css":"T0Vo","./பாகங்கள்/விழித்தளம்/விழித்தளம்.css":"T0Vo","./பாங்குகள்/சிறுகதைகள்.css":"T0Vo","./பாகங்கள்/பட்டியல்/பட்டியல்.css":"T0Vo","./பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.css":"T0Vo","./சுவடிகள்/திசைவி/திசைவி.js":"U7sE"}],"OkSu":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("yU0Q");b.register("html",require("OkSu"));
},{}]},{},[0,"C4a9"], null)
//# sourceMappingURL=முகப்பு.9bb68ca0.js.map