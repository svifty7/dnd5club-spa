"use strict";(self["webpackChunkdnd5club_spa"]=self["webpackChunkdnd5club_spa"]||[]).push([[174],{4771:function(e,t,o){o.d(t,{Z:function(){return O}});var r=o(3396),l=o(7139);const s={class:"content-layout__body"},i={class:"content-layout__list"},n={key:0,class:"content-layout__filter"},p={class:"content-layout__items"},c={key:0,class:"content-layout__selected"};function a(e,t,o,a,u,d){const y=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",{class:(0,l.C_)(["content-layout",d.layoutClasses])},[(0,r._)("div",s,[(0,r._)("div",i,[e.$slots.filter?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.WI)(e.$slots,"filter",{},void 0,!0)])):(0,r.kq)("",!0),(0,r._)("div",p,[(0,r.WI)(e.$slots,"items",{},void 0,!0)])]),o.showRightSide?((0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(y)])):(0,r.kq)("",!0)])],2)}var u=o(9254),d={name:"ContentLayout",props:{showRightSide:{type:Boolean,default:!1}},data:()=>({uiStore:(0,u.H)()}),computed:{layoutClasses(){return{"is-showed-right-side":this.showRightSide,"is-fullscreen":this.uiStore.getContentConfig.fullscreen,"is-small":!this.uiStore.getContentConfig.fullscreen}}}},y=o(89);const b=(0,y.Z)(d,[["render",a],["__scopeId","data-v-60271a05"]]);var O=b},6680:function(e,t,o){o.d(t,{Z:function(){return L}});var r=o(3396),l=o(9242),s=o(7139);const i=e=>((0,r.dD)("data-v-2b534e8a"),e=e(),(0,r.Cn)(),e),n={class:"filter"},p={class:"filter__body"},c={class:"filter__search"},a={class:"filter__search_field"},u={class:"filter__search_field_icon"},d=i((()=>(0,r._)("span",null,"Фильтр",-1))),y={key:0,class:"filter__dropdown"},b={class:"filter__dropdown_body"};function O(e,t,o,i,O,m){const f=(0,r.up)("svg-icon"),w=(0,r.up)("filter-item-sources"),j=(0,r.up)("filter-item-checkboxes"),v=(0,r.Q2)("tooltip");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",p,[(0,r._)("div",c,[(0,r._)("label",a,[(0,r._)("span",u,[(0,r.Wm)(f,{"icon-name":"search"})]),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.search=t),type:"text",placeholder:"Поиск...",onInput:t[1]||(t[1]=(0,l.iM)((t=>e.$emit("search",e.search)),["prevent"]))},null,544),[[l.nr,e.search]])]),e.search?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"filter__search_clear",onClick:t[2]||(t[2]=(0,l.iM)((t=>e.search=""),["left","exact","prevent"]))},[(0,r.Wm)(f,{"icon-name":"close"})])):(0,r.kq)("",!0)]),m.filter?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:(0,s.C_)(["filter__button",{"is-opened":e.showed}]),onClick:t[3]||(t[3]=(0,l.iM)((t=>e.showed=!e.showed),["left","exact","prevent"]))},[(0,r.Wm)(f,{"icon-name":m.isFilterCustomized?"filter-customized":"filter","stroke-enable":!1,"fill-enable":!0},null,8,["icon-name"]),d],2)):(0,r.kq)("",!0),m.filter&&m.isFilterCustomized?(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{key:1,type:"button",class:"filter__button",onClick:t[4]||(t[4]=(0,l.iM)(((...e)=>m.resetFilter&&m.resetFilter(...e)),["left","exact","prevent"]))},[(0,r.Wm)(f,{"icon-name":"clear-filter"})])),[[v,"Стереть фильтр",void 0,{"bottom-end":!0}]]):(0,r.kq)("",!0)]),m.filter?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",y,[(0,r._)("div",b,[m.filter?.sources?((0,r.wg)(),(0,r.j4)(w,{key:0,"model-value":m.filter.sources,"onUpdate:modelValue":t[5]||(t[5]=e=>m.setSourcesValue(e))},null,8,["model-value"])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.otherFilters,((e,t)=>((0,r.wg)(),(0,r.j4)(j,{key:t,"model-value":e.values,name:e.name,"onUpdate:modelValue":e=>m.setOtherValue(e,t)},null,8,["model-value","name","onUpdate:modelValue"])))),128))])],512)),[[l.F8,e.showed]]):(0,r.kq)("",!0)])}var m=o(6986),f=o(6684);const w=e=>((0,r.dD)("data-v-5514b9f2"),e=e(),(0,r.Cn)(),e),j={class:"filter-item__header"},v=w((()=>(0,r._)("div",{class:"filter-item__name"}," Источники ",-1))),h={key:0,class:"filter-item__body"},g={key:0,class:"filter-item__source-group_head"},_={class:"filter-item__source-group_name"},P={class:"filter-item__source-group_body"};function k(e,t,o,i,n,p){const c=(0,r.up)("svg-icon"),a=(0,r.up)("field-checkbox");return o.modelValue?.length?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,s.C_)(["filter-item",{"is-active":e.opened}])},[(0,r._)("div",j,[(0,r._)("div",{class:"filter-item__trigger",onClick:t[1]||(t[1]=(0,l.iM)((t=>e.opened=!e.opened),["left","exact","prevent"]))},[v,(0,r._)("button",{type:"button",class:"filter-item__button filter-item__button--toggle",onClick:t[0]||(t[0]=(0,l.iM)((t=>e.opened=!e.opened),["self","left","exact","prevent"]))},[(0,r.Wm)(c,{"icon-name":"arrow-stroke"})])]),p.isFilterCustomized?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"filter-item__button filter-item__button--reset",onClick:t[2]||(t[2]=(0,l.iM)(((...e)=>p.resetSources&&p.resetSources(...e)),["left","exact","prevent"]))},[(0,r.Wm)(c,{"icon-name":"close"})])):(0,r.kq)("",!0)]),e.opened?((0,r.wg)(),(0,r.iD)("div",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.modelValue,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"filter-item__source-group"},[e.name?((0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",_,(0,s.zw)(e.name),1),(0,r.Wm)(a,{type:"toggle","model-value":p.isGroupActive(t),"onUpdate:modelValue":e=>p.setGroupStatus(e,t)},null,8,["model-value","onUpdate:modelValue"])])):(0,r.kq)("",!0),(0,r._)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.values,((e,o)=>((0,r.wg)(),(0,r.j4)(a,{key:o,"model-value":e.value,tooltip:e.tooltip,"onUpdate:modelValue":e=>p.setSourceValue(e,t,o)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.label),1)])),_:2},1032,["model-value","tooltip","onUpdate:modelValue"])))),128))])])))),128))])):(0,r.kq)("",!0)],2)):(0,r.kq)("",!0)}const S=e=>((0,r.dD)("data-v-3e4cfd52"),e=e(),(0,r.Cn)(),e),D={class:"field-checkbox__label"},I=S((()=>(0,r._)("div",{class:"field-checkbox__faker"},null,-1))),V={key:0,class:"field-checkbox__label"};function C(e,t,o,i,n,p){const c=(0,r.Q2)("tooltip");return"crumb"===o.type?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,s.C_)(["field-checkbox field-checkbox--crumb",{"is-active":p.value}]),onClick:t[0]||(t[0]=(0,l.iM)((e=>p.value=!p.value),["left","exact","prevent"]))},[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",D,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])),[[c,o.tooltip]])],2)):"toggle"===o.type?((0,r.wg)(),(0,r.iD)("div",{key:1,class:(0,s.C_)(["field-checkbox field-checkbox--toggle",{"is-active":p.value}]),onClick:t[1]||(t[1]=(0,l.iM)((e=>p.value=!p.value),["left","exact","prevent"]))},[I,e.$slots.default?((0,r.wg)(),(0,r.iD)("div",V,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])):(0,r.kq)("",!0)],2)):(0,r.kq)("",!0)}o(6699);var E={name:"FieldCheckbox",props:{modelValue:{type:Boolean,default:!1},type:{type:String,default:"crumb",validator:e=>["crumb","toggle"].includes(e)},tooltip:{type:String,default:""}},emits:["update:model-value"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:model-value",e)}}}},x=o(89);const F=(0,x.Z)(E,[["render",C],["__scopeId","data-v-3e4cfd52"]]);var q=F,z=o(4806),U=o.n(z),W={name:"FilterItemSources",components:{FieldCheckbox:q,SvgIcon:m.Z},props:{modelValue:{type:Array,default:void 0}},emits:["update:model-value"],data:()=>({opened:!0}),computed:{isFilterCustomized(){if(!this.modelValue)return!1;for(const e of this.modelValue)for(const t of e.values)if(t.value!==t.default)return!0;return!1}},methods:{setGroupStatus(e,t){if(!this.modelValue[t]?.values?.length)return;const o=U().cloneDeep(this.modelValue);for(let r=0;r<o[t].values.length;r++)o[t].values[r].value=e;this.emitSources(o)},isGroupActive(e){if(!this.modelValue[e]?.values?.length)return!1;for(let t=0;t<this.modelValue[e].values.length;t++)if(this.modelValue[e].values[t].value)return!0;return!1},resetSources(){const e=U().cloneDeep(this.modelValue).map((e=>({...e,values:e.values.map((e=>({...e,value:e.default})))})));this.emitSources(e)},setSourceValue(e,t,o){const r=U().cloneDeep(this.modelValue);r[t].values[o].value=e,this.emitSources(r)},emitSources(e){this.$emit("update:model-value",e)}}};const M=(0,x.Z)(W,[["render",k],["__scopeId","data-v-5514b9f2"]]);var $=M;const Z={class:"filter-item__header"},H={class:"filter-item__name"},R={key:0,class:"filter-item__body"};function Y(e,t,o,i,n,p){const c=(0,r.up)("svg-icon"),a=(0,r.up)("field-checkbox");return o.modelValue?.length?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,s.C_)(["filter-item",{"is-active":e.opened}])},[(0,r._)("div",Z,[(0,r._)("div",{class:"filter-item__trigger",onClick:t[1]||(t[1]=(0,l.iM)((t=>e.opened=!e.opened),["left","exact","prevent"]))},[(0,r._)("div",H,(0,s.zw)(o.name),1),(0,r._)("button",{type:"button",class:"filter-item__button filter-item__button--toggle",onClick:t[0]||(t[0]=(0,l.iM)((t=>e.opened=!e.opened),["self","left","exact","prevent"]))},[(0,r.Wm)(c,{"icon-name":"arrow-stroke"})])]),p.isFilterCustomized?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"button",class:"filter-item__button filter-item__button--reset",onClick:t[2]||(t[2]=(0,l.iM)(((...e)=>p.resetValues&&p.resetValues(...e)),["left","exact","prevent"]))},[(0,r.Wm)(c,{"icon-name":"close"})])):(0,r.kq)("",!0)]),e.opened?((0,r.wg)(),(0,r.iD)("div",R,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.modelValue,((e,t)=>((0,r.wg)(),(0,r.j4)(a,{key:t,"model-value":e.value,tooltip:e.tooltip,"onUpdate:modelValue":e=>p.setValue(e,t)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(e.label),1)])),_:2},1032,["model-value","tooltip","onUpdate:modelValue"])))),128))])):(0,r.kq)("",!0)],2)):(0,r.kq)("",!0)}var A={name:"FilterItemCheckboxes",components:{FieldCheckbox:q,SvgIcon:m.Z},props:{name:{type:String,default:"",required:!0},modelValue:{type:Array,default:void 0}},emits:["update:model-value"],data:()=>({opened:!1}),computed:{isFilterCustomized(){if(!this.modelValue)return!1;for(const e of this.modelValue)if(e.value!==e.default)return!0;return!1}},beforeMount(){this.opened=this.isFilterCustomized},methods:{resetValues(){const e=U().cloneDeep(this.modelValue).map((e=>({...e,value:e.default})));this.emitValues(e)},setValue(e,t){const o=U().cloneDeep(this.modelValue);o[t].value=e,this.emitValues(o)},emitValues(e){this.$emit("update:model-value",e)}}};const G=(0,x.Z)(A,[["render",Y],["__scopeId","data-v-8c7b8d88"]]);var K=G,B={name:"ListFilter",components:{FilterItemCheckboxes:K,FilterItemSources:$,SvgIcon:m.Z},emits:["clear-filter","search","update"],data:()=>({search:"",showed:!1,filterStore:(0,f.r)()}),computed:{filter:{get(){return this.filterStore?.getFilter||void 0},async set(e){await this.filterStore.saveFilter(e),this.$emit("update",this.filterStore.getQueryParams())}},otherFilters:{get(){return this.filter?.other||this.filter||[]},set(e){this.filter?.other?this.filter={...this.filter,other:e}:this.filter=e}},isFilterCustomized(){return this.filterStore.isFilterCustomized}},methods:{setSourcesValue(e){this.filter={...this.filter,sources:e}},setOtherValue(e,t){const o=U().cloneDeep(this.otherFilters);o[t].values=e,this.otherFilters=o},async resetFilter(){await this.filterStore.resetFilter()}}};const Q=(0,x.Z)(B,[["render",O],["__scopeId","data-v-2b534e8a"]]);var L=Q},3061:function(e,t,o){o.d(t,{yU7:function(){return O}});o(6699),o(2801),o(8675),o(3462),o(1703);var r=o(4870);Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;function l(e){return!!(0,r.nZ)()&&((0,r.EB)(e),!0)}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const s="undefined"!==typeof window;Object.prototype.toString;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var i=o(3396);function n(e){var t;const o=(0,r.SU)(e);return null!=(t=null==o?void 0:o.$el)?t:o}const p=s?window:void 0;s&&window.document,s&&window.navigator,s&&window.location;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},a="__vueuse_ssr_handlers__";c[a]=c[a]||{};c[a];Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,b=(e,t)=>{var o={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&y.call(e,r)&&(o[r]=e[r]);return o};function O(e,t,o={}){const r=o,{window:s=p}=r,c=b(r,["window"]);let a;const u=s&&"ResizeObserver"in s,d=()=>{a&&(a.disconnect(),a=void 0)},y=(0,i.YP)((()=>n(e)),(e=>{d(),u&&s&&e&&(a=new ResizeObserver(t),a.observe(e,c))}),{immediate:!0,flush:"post"}),O=()=>{d(),y()};return l(O),{isSupported:u,stop:O}}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var m,f;s&&(null==window?void 0:window.navigator)&&(null==(m=null==window?void 0:window.navigator)?void 0:m.platform)&&/iP(ad|hone|od)/.test(null==(f=null==window?void 0:window.navigator)?void 0:f.platform);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable}}]);