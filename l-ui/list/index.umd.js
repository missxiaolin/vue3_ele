(function(e,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l(require("vue")):typeof define=="function"&&define.amd?define(["vue"],l):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=l(e.Vue))})(this,function(e){"use strict";const l=o=>o.replace(/(A-Z)g/,"-$1").toLocaleLowerCase();var $="",_=(o,a)=>{const r=o.__vccOpts||o;for(const[i,n]of a)r[i]=n;return r};const m={class:"list-tabs__item"},k=["onClick"],p={key:0,class:"avatar"},B={class:"content"},f={key:0,class:"title"},y={key:1,class:"time"},C={key:2,class:"time"},h={class:"actions"},g=["onClick"],x={key:0,class:"a-icon"},E={class:"a-text"};var V=_(e.defineComponent({props:{list:{type:Array,required:!0},actions:{type:Array,default:()=>[]}},emits:["clickItem","clickAction"],setup(o,{emit:a}){let r=(n,s)=>{a("clickItem",{item:n,index:s})},i=(n,s)=>{a("clickAction",{item:n,index:s})};return(n,s)=>{const b=e.resolveComponent("el-avatar"),A=e.resolveComponent("el-tag"),D=e.resolveComponent("el-scrollbar"),L=e.resolveComponent("el-tab-pane"),w=e.resolveComponent("el-tabs");return e.openBlock(),e.createElementBlock("div",m,[e.createVNode(w,null,{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.list,(d,S)=>(e.openBlock(),e.createBlock(L,{key:S,label:d.title},{default:e.withCtx(()=>[e.createVNode(D,{"max-height":"300px"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.content,(t,c)=>(e.openBlock(),e.createElementBlock("div",{class:"container",onClick:I=>e.unref(r)(t,c),key:c},[t.avatar?(e.openBlock(),e.createElementBlock("div",p,[e.createVNode(b,{size:"default",src:t.avatar},null,8,["src"])])):e.createCommentVNode("",!0),e.createElementVNode("div",B,[t.title?(e.openBlock(),e.createElementBlock("div",f,[e.createElementVNode("div",null,e.toDisplayString(t.title),1),t.tag?(e.openBlock(),e.createBlock(A,{key:0,size:"small"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.tag),1)]),_:2},1024)):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0),t.desc?(e.openBlock(),e.createElementBlock("div",y,e.toDisplayString(t.desc),1)):e.createCommentVNode("",!0),t.time?(e.openBlock(),e.createElementBlock("div",C,e.toDisplayString(t.time),1)):e.createCommentVNode("",!0)])],8,k))),128)),e.createElementVNode("div",h,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.actions,(t,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["a-item",{border:c!==o.actions.length}]),key:c,onClick:I=>e.unref(i)(t,c)},[t.icon?(e.openBlock(),e.createElementBlock("div",x,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(`el-icon-${e.unref(l)(t.icon)}`)))])):e.createCommentVNode("",!0),e.createElementVNode("div",E,e.toDisplayString(t.text),1)],10,g))),128))])]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})])}}}),[["__scopeId","data-v-3698af18"]]),N={install(o){o.component("l-list",V)}};return N});