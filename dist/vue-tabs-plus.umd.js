(function(e,h){typeof exports=="object"&&typeof module<"u"?module.exports=h(require("vue"),require("vue-router")):typeof define=="function"&&define.amd?define(["vue","vue-router"],h):(e=typeof globalThis<"u"?globalThis:e||self,e.vueTabsPlus=h(e.Vue,e.vueRouter))})(this,function(e,h){"use strict";const C={__name:"icon",props:{iconObj:{type:Object,requured:!0}},setup(a){return(N,T)=>{const d=e.resolveComponent("el-icon");return a.iconObj.type==="custom"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.iconObj.icon),e.normalizeProps(e.mergeProps({key:0},a.iconObj.attrs)),null,16)):a.iconObj.type==="el"?(e.openBlock(),e.createBlock(d,e.normalizeProps(e.mergeProps({key:1},a.iconObj.attrs)),{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(a.iconObj.icon)))]),_:1},16)):a.iconObj.type==="iconfont"?(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:2,class:["icon iconfont","icon-"+a.iconObj.icon]},a.iconObj.attrs),null,16)):(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:3,class:a.iconObj.type},a.iconObj.attrs),e.toDisplayString(a.iconObj.icon),17))}}},ae="",H=["title","onClick","onContextmenu"],U={class:"text-box"},q=["onClick"],J=e.createStaticVNode('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V9.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="32;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M6 9L3 12M6 9L9 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>',1),Y=e.createStaticVNode('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate></path></g></svg></div>',1),Z=e.createStaticVNode('<div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12H15.5M2 12H8.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></animate></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12L18 15M9 12L6 15M15 12L18 9M9 12L6 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></animate></path></g></svg></div>',1),F=e.createElementVNode("div",{class:"icon"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[e.createElementVNode("path",{fill:"currentColor",d:"M11.92 19.92L4 12l7.92-7.92l1.41 1.42l-5.5 5.5H22v2H7.83l5.51 5.5l-1.42 1.42M4 12V2H2v20h2V12Z"})])],-1),G=e.createElementVNode("div",{class:"icon"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24"},[e.createElementVNode("path",{fill:"currentColor",d:"M12.08 4.08L20 12l-7.92 7.92l-1.41-1.42l5.5-5.5H2v-2h14.17l-5.5-5.5l1.41-1.42M20 12v10h2V2h-2v10Z"})])],-1),K=[{__name:"index",props:{type:{type:String,default:"button"},i18n:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},leftIcon:{type:Object,default:()=>({icon:"＜"})},rightIcon:{type:Object,default:()=>({icon:"＞"})},closeIcon:{type:Object,default:()=>({icon:"x"})},stepPercentage:{type:Number,default:10}},emits:["reloadPage"],setup(a,{expose:N,emit:T}){const d=a,v=h.useRoute(),k=h.useRouter(),Q=(t,o)=>{let n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;for(;t&&!n.call(t,o);)t=t.parentElement;return t},_=(t,o)=>{let n=[],u=x=>{x.forEach(y=>{ee(y,o)&&n.push(y),y.childNodes&&y.childNodes.length>0&&u(y.childNodes)})};return u(t.childNodes),n},ee=(t,o)=>t.classList?t.classList.contains(o):new RegExp("\\s"+o+"\\s").test(" "+t.className+" "),m=t=>{let o=t instanceof Array?[]:{};for(let n in t)o[n]=typeof t[n]=="object"?m(t[n]):t[n];return o},te=t=>window.btoa(encodeURIComponent(JSON.stringify(t))),oe=t=>JSON.parse(decodeURIComponent(window.atob(t))),l=e.ref([]);e.watch(()=>l.value.length,()=>{sessionStorage.setItem("_VUETABSARR_",te(l.value))}),e.watch(v,()=>{X(v)});const r=e.ref({}),B=e.ref(!1),g=e.ref(!1),V=e.ref(!1),E=e.ref(!1);let b=0,L=0,M=0,S=0,I=0;const c=e.ref(null),f=()=>{i.value=!1;const t=_(c.value,"item");l.value.forEach((o,n)=>{n===0?(o.btnMoveX=0,o.chromeMoveX=0):(o.btnMoveX=l.value[n-1].btnMoveX+t[n].clientWidth+12,o.chromeMoveX=l.value[n-1].chromeMoveX+t[n].clientWidth)}),M=c.value.clientWidth-20,b=0,L=0,t.forEach((o,n)=>{L+=o.clientWidth,b+=o.clientWidth+2,n!==0&&(b+=10)}),O()},O=()=>{B.value=M<(d.type==="button"?b:L),S=(d.type==="button"?b:L)-M,I=S/d.stepPercentage,B.value?(c.value.scrollLeft=l.value.filter(t=>t.path===r.value.path)[0][d.type==="button"?"btnMoveX":"chromeMoveX"],D(),g.value||c.value.addEventListener("wheel",z),g.value=!0):(g.value&&c.value.removeEventListener("wheel",z),g.value=!1)};e.watch(()=>d.type,()=>O());const D=()=>{V.value=c.value.scrollLeft===0,E.value=c.value.scrollLeft===S},p=(t=!0)=>{c.value.scrollLeft=c.value.scrollLeft+(t?I:-I),D()},z=t=>{i.value=!1,t.wheelDelta?t.wheelDelta>0?p(!1):t.wheelDelta<0&&p():t.detail&&(t.wheelDelta<0?p(!1):t.wheelDelta>0&&p())},i=e.ref(!1);e.watch(i,()=>{i.value?document.body.addEventListener("click",j):document.body.removeEventListener("click",j)});const R=e.ref(0),W=e.ref(0),s=e.ref({data:{},index:0}),ne=(t,o)=>{s.value.data=m(t),s.value.index=o,R.value=event.pageX+120>document.body.clientWidth?document.body.clientWidth-120:event.pageX,W.value=event.pageY,i.value=!0},j=()=>{Q(event.target,".tabs-pop")===null&&(i.value=!1)},w=t=>{switch(t){case 1:i.value=!1,T("reloadPage");break;case 2:i.value=!1,$(s.value.data,s.value.index);break;case 3:l.value=[m(s.value.data)],i.value=!1,l.value.findIndex(o=>o.path===r.value.path)===-1&&k.push(s.value.data.path);break;case 4:l.value=m(l.value.slice(s.value.index)),l.value.findIndex(o=>o.path===r.value.path)===-1?(i.value=!1,k.push(s.value.data.path)):e.nextTick(()=>{f()});break;case 5:l.value=m(l.value.slice(0,s.value.index+1)),l.value.findIndex(o=>o.path===r.value.path)===-1?(i.value=!1,k.push(s.value.data.path)):e.nextTick(()=>{f()});break}},X=t=>{const o={label:t.meta.title,supLabel:t.query.tabsSupTit||"",name:t.name,path:t.fullPath,icon:t.meta.icon};l.value.findIndex(n=>d.multiple?n.path===o.path:n.name===o.name)===-1?(l.value.push(o),A(o)):A(o,!1)},$=(t,o)=>{l.value.splice(o,1),e.nextTick(()=>{t.path===r.value.path?k.push(l.value[o===l.value.length?o-1:o].path):f()})},A=(t,o=!0)=>{r.value=m(t),o?e.nextTick(()=>{f()}):O()};return sessionStorage.getItem("_VUETABSARR_")&&(l.value=oe(sessionStorage.getItem("_VUETABSARR_"))),X(v),e.onMounted(()=>{f(),window.addEventListener("resize",f)}),e.onBeforeUnmount(()=>{window.removeEventListener("resize",f),document.body.removeEventListener("click",j),sessionStorage.removeItem("_VUETABSARR_"),g.value&&c.value.removeEventListener("wheel",z)}),N({dealSize:f}),(t,o)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["vue-tabs-plus",a.type!=="button"?"chrome-tab":""])},[e.unref(B)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["go-left",e.unref(V)?"is-dis":""]),onClick:o[0]||(o[0]=n=>e.unref(V)?null:p(!1))},[a.leftIcon&&(a.leftIcon.icon||a.leftIcon.type)?(e.openBlock(),e.createBlock(C,{key:0,iconObj:a.leftIcon},null,8,["iconObj"])):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0),e.createElementVNode("div",{ref_key:"itemBox",ref:c,class:"item-box"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l),(n,u)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["item",n.path===e.unref(r).path?"active":""]),title:(a.i18n?t.$t(n.label):n.label)+n.supLabel,key:u,onClick:x=>n.path===e.unref(r).path?null:e.unref(k).push(n.path),onContextmenu:e.withModifiers(x=>ne(n,u),["prevent"])},[n.icon&&(n.icon.icon||n.icon.type)?(e.openBlock(),e.createBlock(C,{key:0,class:"menu-icon",iconObj:n.icon},null,8,["iconObj"])):e.createCommentVNode("",!0),e.createElementVNode("div",U,e.toDisplayString(a.i18n?t.$t(n.label):n.label)+e.toDisplayString(n.supLabel),1),e.unref(l).length>1?(e.openBlock(),e.createElementBlock("div",{key:1,class:"icon-box",onClick:e.withModifiers(x=>{$(n,u),i.value=!1},["stop"])},[a.closeIcon&&(a.closeIcon.icon||a.closeIcon.type)?(e.openBlock(),e.createBlock(C,{key:0,iconObj:a.closeIcon},null,8,["iconObj"])):e.createCommentVNode("",!0)],8,q)):e.createCommentVNode("",!0)],42,H))),128)),e.unref(i)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"tabs-pop",style:e.normalizeStyle({left:e.unref(R)+"px",top:e.unref(W)+"px"})},[e.createElementVNode("div",{class:e.normalizeClass(["tabs-pop-item",e.unref(s).data.path===e.unref(r).path?"":"dis"]),onClick:o[1]||(o[1]=n=>e.unref(s).data.path===e.unref(r).path?w(1):null)},[J,e.createTextVNode(" 重新加载 ")],2),e.createElementVNode("div",{class:e.normalizeClass(["tabs-pop-item",e.unref(l).length===1?"dis":""]),onClick:o[2]||(o[2]=n=>w(2))},[Y,e.createTextVNode(" 关闭当前 ")],2),e.createElementVNode("div",{class:e.normalizeClass(["tabs-pop-item",e.unref(l).length===1?"dis":""]),onClick:o[3]||(o[3]=n=>w(3))},[Z,e.createTextVNode(" 关闭其他 ")],2),e.createElementVNode("div",{class:e.normalizeClass(["tabs-pop-item",e.unref(s).index===0?"dis":""]),onClick:o[4]||(o[4]=n=>w(4))},[F,e.createTextVNode(" 关闭左侧 ")],2),e.createElementVNode("div",{class:e.normalizeClass(["tabs-pop-item",e.unref(s).index===e.unref(l).length-1?"dis":""]),onClick:o[5]||(o[5]=n=>w(5))},[G,e.createTextVNode(" 关闭右侧 ")],2)],4)):e.createCommentVNode("",!0)],512),e.unref(B)?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["go-right",e.unref(E)?"is-dis":""]),onClick:o[6]||(o[6]=n=>e.unref(E)?null:p())},[a.rightIcon&&(a.rightIcon.icon||a.rightIcon.type)?(e.openBlock(),e.createBlock(C,{key:0,iconObj:a.rightIcon},null,8,["iconObj"])):e.createCommentVNode("",!0)],2)):e.createCommentVNode("",!0)],2))}}],P={install(a){K.forEach(N=>{a.component("vueTabsPlus",N)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(P),P});
