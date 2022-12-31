/*!
 * @likun./create-react-template
 * version: 1.0.2
 * 2022/12/31 13:21:56
 */(()=>{"use strict";var e,r,t={6865:function(e,r,t){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.gen=r.currentDir=r.resolvePath=void 0;const s=o(t(1723)),n=o(t(1017)),a=o(t(7309));function i(...e){return n.default.resolve(__dirname,...e)}r.resolvePath=i,r.currentDir=function(){const e=process.cwd();return()=>e}(),r.gen=function(e){s.default.copy(i("../templates/react-ts-template"),i((0,r.currentDir)(),e)).then((()=>{console.log(a.default.greenBright(`🚀download ${e} successfully!`))})).catch((()=>{console.log(a.default.redBright(`download ${e} failed!`))}))}},7494:(e,r,t)=>{const o=t(9137),s=t(6865);o.program.argument("[name]","project name","react-ts-template").option("-t, --template <string>","Input a template").description("Create a react project template").action(((e,r)=>(0,s.gen)(e))).parse()},9491:e=>{e.exports=require("assert")},2081:e=>{e.exports=require("child_process")},2057:e=>{e.exports=require("constants")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},7282:e=>{e.exports=require("process")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},3837:e=>{e.exports=require("util")}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=t,s.x=()=>{var e=s.O(void 0,[94],(()=>s(7494)));return e=s.O(e)},e=[],s.O=(r,t,o,n)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,o,n]=e[c],i=!0,u=0;u<t.length;u++)(!1&n||a>=n)&&Object.keys(s.O).every((e=>s.O[e](t[u])))?t.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(c--,1);var l=o();void 0!==l&&(r=l)}}return r}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,o,n]},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>{if(94===e)return"js/94.5d070d4f190f99b2dec1.js"},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:1};s.O.require=r=>e[r];s.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,o=r.ids,n=r.runtime;for(var a in t)s.o(t,a)&&(s.m[a]=t[a]);n&&n(s);for(var i=0;i<o.length;i++)e[o[i]]=1;s.O()})(require("./"+s.u(r)))}})(),r=s.x,s.x=()=>(s.e(94),r());s.x()})();