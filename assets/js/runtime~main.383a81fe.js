(()=>{"use strict";var e,a,c,f,t,r={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=d,e=[],b.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",776:"ef276c0a",1174:"b11a9de9",1343:"85fc5543",1472:"32542af3",1716:"843f4692",1781:"ce379c77",1841:"0af15f83",1906:"f61a5c21",2202:"a26bc33a",2446:"c482c5c2",2535:"814f3328",2735:"ccdadcd2",3085:"1f391b9e",3089:"a6aa9e1f",3608:"9e4087bc",3617:"ce1e8b78",3675:"29a3b828",4013:"01a85c17",4195:"c4f5d8e4",4368:"a94703ab",4916:"687e0953",5233:"8944e4cd",5452:"094cb14f",5686:"fc06b166",5705:"80d5e433",5775:"dd9b25b7",5877:"b1c63090",5924:"c75008c8",6103:"ccc49370",6258:"6c947463",6469:"06aa5f65",6773:"2950caf6",7414:"393be207",7704:"fd9ff242",7725:"fc2a6135",7850:"f71ac4b9",7918:"17896441",8150:"859979d8",8255:"62c81552",8362:"b5983d52",8427:"64ab6f27",8518:"a7bd4aaa",8553:"00f3b3a3",8610:"6875c492",9195:"f64953a1",9326:"3057cb6d",9450:"4a6c0894",9503:"2388a94f",9626:"3dd28ba4",9647:"1fe354ac",9661:"5e95c892",9671:"0e384e19"}[e]||e)+"."+{53:"d1b158ea",776:"6a22c9f2",1174:"f0caf04f",1343:"4513a060",1472:"935e15e2",1716:"15157604",1772:"8829bd80",1781:"59cda8df",1841:"64d762e0",1906:"2308d0a6",2202:"d4a6b08b",2446:"6ee07b18",2535:"350a0a68",2735:"cb2eb4cb",3085:"4010bfa6",3089:"88ca30f9",3608:"e4ca4139",3617:"c8a7cdf4",3675:"63fe16d9",3821:"c02bd3d0",4013:"e9049f09",4195:"9229410e",4368:"c2396cea",4916:"3c8f266d",5233:"bc29a396",5452:"42a632f0",5686:"51e95909",5705:"6c32ab3a",5775:"c086e63d",5877:"704c1e5a",5924:"a67ef09f",6103:"fddb36c8",6258:"17cb2a57",6469:"f88e812d",6773:"c070bc01",7414:"1a38e796",7704:"7af4aae1",7725:"9b2303de",7850:"f108d702",7918:"11dc28d3",8150:"d71a3009",8255:"ba6c6655",8362:"9c5567d3",8427:"fc701c38",8518:"56935186",8553:"07b2ee1e",8610:"b44a4dbe",9195:"9c2bb0bf",9326:"e867d89f",9450:"6688c59c",9503:"d9c22872",9626:"a86c32ca",9647:"656026a3",9661:"97408143",9671:"7fc53526",9677:"2bdcf95b"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="labvr-doc:",b.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){d=l;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/LABVR-DOC/",b.gca=function(e){return e={17896441:"7918","935f2afb":"53",ef276c0a:"776",b11a9de9:"1174","85fc5543":"1343","32542af3":"1472","843f4692":"1716",ce379c77:"1781","0af15f83":"1841",f61a5c21:"1906",a26bc33a:"2202",c482c5c2:"2446","814f3328":"2535",ccdadcd2:"2735","1f391b9e":"3085",a6aa9e1f:"3089","9e4087bc":"3608",ce1e8b78:"3617","29a3b828":"3675","01a85c17":"4013",c4f5d8e4:"4195",a94703ab:"4368","687e0953":"4916","8944e4cd":"5233","094cb14f":"5452",fc06b166:"5686","80d5e433":"5705",dd9b25b7:"5775",b1c63090:"5877",c75008c8:"5924",ccc49370:"6103","6c947463":"6258","06aa5f65":"6469","2950caf6":"6773","393be207":"7414",fd9ff242:"7704",fc2a6135:"7725",f71ac4b9:"7850","859979d8":"8150","62c81552":"8255",b5983d52:"8362","64ab6f27":"8427",a7bd4aaa:"8518","00f3b3a3":"8553","6875c492":"8610",f64953a1:"9195","3057cb6d":"9326","4a6c0894":"9450","2388a94f":"9503","3dd28ba4":"9626","1fe354ac":"9647","5e95c892":"9661","0e384e19":"9671"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=b.p+b.u(a),d=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunklabvr_doc=self.webpackChunklabvr_doc||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();