parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"R0W2":[function(require,module,exports) {

},{}],"x3RA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.பட்டியலி=void 0;var e="<div class='கட்டங்கள்'> %s </div>",s="<div class='கட்டம் %s'><span> %s </span></div>",c={"செதுக்கு":function(c,n){var r="";n.forEach(function(e){r+=s.replace(/%s/g,e["பெயர்"])+"\n"}),c(e.replace("%s",r),function(){n.forEach(function(e){document.querySelector("."+e["பெயர்"]).addEventListener("click",e["தீண்டுவினை"])})})}};exports.பட்டியலி=c;
},{}],"ARet":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"yU0Q":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"ARet"}],"oG8U":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைகள்=void 0;var e={"தேர்வு":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html"))},"தரிசனம்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html"))},"எஞ்சினியர்":function(){return require("_bundle_loader")(require.resolve("../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html"))}};exports.சிறுகதைகள்=e;
},{"_bundle_loader":"yU0Q","../../களஞ்சியம்/சிறுகதைகள்/தேர்வு.html":[["தேர்வு.1ccfa966.html","A16C"],"A16C"],"../../களஞ்சியம்/சிறுகதைகள்/தரிசனம்.html":[["தரிசனம்.8b28395f.html","OmUu"],"OmUu"],"../../களஞ்சியம்/சிறுகதைகள்/எஞ்சினியர்.html":[["எஞ்சினியர்.a9e594b9.html","32HY"],"32HY"]}],"zxgV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதைப்பட்டியலி=void 0;var e=require("./சிறுகதைகள்.js"),r=e.சிறுகதைகள்,o={"பட்டியலைத்தா":function(){var e=[];return Object.keys(r).forEach(function(r){e.push({"பெயர்":r,"தீண்டுவினை":function(){window.location.href+="/"+r}})}),e}};exports.சிறுகதைப்பட்டியலி=o;
},{"./சிறுகதைகள்.js":"oG8U"}],"HueU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.யாக்கு=void 0;var e=function(e){for(var r=e.replace(/\\t/g,"&emsp;&emsp;").replace(/(\\n)|(\\n\\r)/g," <br><br> ").split(" "),t="",p=0;p<r.length;p++)t+=" "+r[p].replace(/<c>/gi,'<div style="text-align: center">').replace(/<\/c>/gi,"</div>");return t};exports.யாக்கு=e;
},{}],"fake":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_சேவை=void 0;var e=require("../கோப்பு/சிறுகதைகள்.js"),r=require("./யாக்கு.js"),s=e.சிறுகதைகள்,t=r.யாக்கு,i={},o={"கதையைத்தா":function(e){return void 0===i[e]?s[e]().then(function(r){var s='<div class="சிறுகதைகள்">'+t(r)+"</div>";return i[e]=s,s}):Promise.resolve(i[e])}};exports.சிறுகதை_சேவை=o;
},{"../கோப்பு/சிறுகதைகள்.js":"oG8U","./யாக்கு.js":"HueU"}],"cUXn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.சிறுகதை_திசைவி=void 0;var e=require("../../பாகங்கள்/பட்டியல்/பட்டியல்.js"),r=require("../கோப்பு/சிறுகதைப்பட்டியல்.js"),s=require("../சேவை/சிறுகதை.js"),i=e.பட்டியலி,t=r.சிறுகதைப்பட்டியலி,u=s.சிறுகதை_சேவை,o={"திசைவி":function(e,r){if(e.includes("/")){var s=e.split("/");u.கதையைத்தா(s[1]).then(function(e){r(e)})}else i.செதுக்கு(r,t.பட்டியலைத்தா())}};exports.சிறுகதை_திசைவி=o;
},{"../../பாகங்கள்/பட்டியல்/பட்டியல்.js":"x3RA","../கோப்பு/சிறுகதைப்பட்டியல்.js":"zxgV","../சேவை/சிறுகதை.js":"fake"}],"/4TS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.விழித்தளவி=void 0;var e=require("../../சுவடிகள்/சேவை/யாக்கு.js"),r=e.யாக்கு,t={"செதுக்கு":function(e){require("_bundle_loader")(require.resolve("./விழித்தளம்.html")).then(function(t){return e(t,function(){var e=document.querySelector(".விழித்தளவுரை");require("_bundle_loader")(require.resolve("../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html")).then(function(t){e.innerHTML=r(t)})})})}};exports.விழித்தளவி=t;
},{"../../சுவடிகள்/சேவை/யாக்கு.js":"HueU","_bundle_loader":"yU0Q","./விழித்தளம்.html":[["விழித்தளம்.14a764b0.html","rGpi"],"rGpi"],"../../களஞ்சியம்/உரைகள்/விழித்தளவுரை.html":[["விழித்தளவுரை.5e21f0a0.html","EyyM"],"EyyM"]}],"U7sE":[function(require,module,exports) {
"use strict";var n=require("./சிறுகதை.js"),e=require("../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js"),i=document.querySelector(".தளம்"),t=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};i.innerHTML=n,e()},o=function(i){var o=i.split("#");if(2==o.length){var r=decodeURI(o[1]);null!=r.match("^சிறுகதைகள்")&&n.சிறுகதை_திசைவி.திசைவி(r,t)}else e.விழித்தளவி.செதுக்கு(t)};window.addEventListener("hashchange",function(n){o(n.newURL)}),window.addEventListener("load",function(n){o(window.location.href)});
},{"./சிறுகதை.js":"cUXn","../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js":"/4TS"}],"C4a9":[function(require,module,exports) {
"use strict";require("../பாங்குகள்.நடு.css"),require("../பாகங்கள்/விழித்தளம்/விழித்தளம்.நடு.css"),require("../பாங்குகள்/சிறுகதைகள்.நடு.css"),require("../பாகங்கள்/பட்டியல்/பட்டியல்.நடு.css"),require("../சுவடிகள்/திசைவி/திசைவி.js"),window.addEventListener("load",function(e){document.querySelector(".சிறுகதையின்கொக்கி").addEventListener("click",function(e){window.location.href.includes("#")?window.location.href=window.location.href.split("#")[0]+"#சிறுகதைகள்":window.location+="#சிறுகதைகள்"})});
},{"../பாங்குகள்.நடு.css":"R0W2","../பாகங்கள்/விழித்தளம்/விழித்தளம்.நடு.css":"R0W2","../பாங்குகள்/சிறுகதைகள்.நடு.css":"R0W2","../பாகங்கள்/பட்டியல்/பட்டியல்.நடு.css":"R0W2","../சுவடிகள்/திசைவி/திசைவி.js":"U7sE"}],"OkSu":[function(require,module,exports) {
module.exports=function(t){return fetch(t).then(function(t){return t.text()})};
},{}],0:[function(require,module,exports) {
var b=require("yU0Q");b.register("html",require("OkSu"));
},{}]},{},[0,"C4a9"], null)
//# sourceMappingURL=முகப்பு.4b1e3928.js.map