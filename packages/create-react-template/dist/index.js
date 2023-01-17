/*!
 * @likun./create-react-template
 * version: 1.0.8
 * 2023/1/17 21:40:35
 */(()=>{"use strict";var e,r,t={6865:function(e,r,t){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.gen=r.currentDir=r.resolvePath=void 0;const o=s(t(1723)),a=s(t(7147)),u=s(t(1017)),i=s(t(4500));r.resolvePath=(...e)=>u.default.resolve(__dirname,...e),r.currentDir=(()=>{const e=process.cwd();return()=>e})();r.gen=e=>{const t=(0,r.resolvePath)((0,r.currentDir)(),e);o.default.existsSync(t)?i.default.error(`path ${t} already exists`):o.default.copy((0,r.resolvePath)("../templates/react-ts-template"),t,{overwrite:!1,errorOnExist:!0}).then((()=>{n(t,{name:e})&&i.default.success(`🚀download ${e} successfully!`)})).catch((e=>{i.default.error(e)}))};const n=(e,t={})=>{try{const s=(0,r.resolvePath)(e,"package.json"),o=a.default.readFileSync(s,"utf-8")||"{}",u=JSON.parse(o);return Object.entries(t).forEach((([e,r])=>{u[e]=r})),a.default.writeFileSync(s,JSON.stringify(u,null,2),"utf-8"),!0}catch(e){return i.default.error(e),!1}}},7494:(e,r,t)=>{const s=t(9137),o=t(6865);s.program.argument("[name]","project name","react-ts-template").description("Create a react project template.").action(((e,r)=>(0,o.gen)(e))).parse()},4500:function(e,r,t){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=s(t(7309)),a=e=>(...r)=>{console.log(e(...r))};r.default={error:a(o.default.redBright),warn:a(o.default.yellowBright),info:a(o.default.blueBright),success:a(o.default.greenBright)}},9491:e=>{e.exports=require("assert")},2081:e=>{e.exports=require("child_process")},2057:e=>{e.exports=require("constants")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},7282:e=>{e.exports=require("process")},2781:e=>{e.exports=require("stream")},6224:e=>{e.exports=require("tty")},3837:e=>{e.exports=require("util")}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,o.x=()=>{var e=o.O(void 0,[94],(()=>o(7494)));return e=o.O(e)},e=[],o.O=(r,t,s,a)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,a]=e[c],i=!0,n=0;n<t.length;n++)(!1&a||u>=a)&&Object.keys(o.O).every((e=>o.O[e](t[n])))?t.splice(n--,1):(i=!1,a<u&&(u=a));if(i){e.splice(c--,1);var l=s();void 0!==l&&(r=l)}}return r}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,s,a]},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>{if(94===e)return"js/94.44a93e761573e7e9d5e0.js"},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:1};o.O.require=r=>e[r];o.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,s=r.ids,a=r.runtime;for(var u in t)o.o(t,u)&&(o.m[u]=t[u]);a&&a(o);for(var i=0;i<s.length;i++)e[s[i]]=1;o.O()})(require("./"+o.u(r)))}})(),r=o.x,o.x=()=>(o.e(94),r());o.x()})();