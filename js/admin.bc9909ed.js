(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"1abc":function(t,e,i){"use strict";var n=i("a797");e["a"]=n["a"]},"2c64":function(t,e,i){},3530:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[[i("v-tabs",{attrs:{"background-color":"deep-red","center-active":"",centered:"",dark:""}},[i("v-tab",{attrs:{to:"/admin/products"}},[i("h2",[t._v("商品管理")])]),i("v-tab",{attrs:{to:"/admin/orders"}},[i("h2",[t._v("訂單管理")])])],1)]],2),i("v-col",{attrs:{cols:"12"}},[i("router-view")],1)],1)],1)],1)},a=[],r=i("2877"),o=i("6544"),s=i.n(o),l=i("7496"),c=i("62ad"),u=i("a523"),d=i("0fd9"),h=i("71a3"),v=i("fe57"),f={},p=Object(r["a"])(f,n,a,!1,null,null,null);e["default"]=p.exports;s()(p,{VApp:l["a"],VCol:c["a"],VContainer:u["a"],VRow:d["a"],VTab:h["a"],VTabs:v["a"]})},"368e":function(t,e,i){},"3c93":function(t,e,i){},"3d86":function(t,e,i){},a797:function(t,e,i){"use strict";var n=i("5530"),a=(i("a9e3"),i("3c93"),i("a9ad")),r=i("7560"),o=i("f2e7"),s=i("58df");e["a"]=Object(s["a"])(a["a"],r["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},aa93:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-row",{staticClass:"d-flex flex-column",attrs:{justify:"center"}},[i("v-dialog",{attrs:{"max-width":"600px"},on:{"click:outside":function(e){return t.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",a,!1),n),[t._v(" 新增商品 ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.isEdit))])]),i("v-form",{directives:[{name:"modal",rawName:"v-modal",value:t.valid,expression:"valid"}],ref:"form",attrs:{"lazy-validation":""}},[i("v-container",[i("v-row",[i("v-col",[i("img-inputer",{attrs:{accept:"image/*",theme:"light",size:"large","bottom-text":"點選或拖拽圖片以修改","hover-text":"點選或拖拽圖片以修改",placeholder:"點選或拖拽選擇圖片","max-size":1024,"exceed-size-text":"檔案大小不能超過"},model:{value:t.form.image,callback:function(e){t.$set(t.form,"image",e)},expression:"form.image"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"商品名稱",rules:t.nameRules,counter:10,required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"商品價格",required:"",prefix:"$"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-select",{attrs:{label:"商品分類",items:t.categories,required:"",rules:[function(t){return!!t||"Item is required"}]},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{label:"商品說明",counter:20,required:""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-radio-group",{attrs:{mandatory:""},model:{value:t.form.sell,callback:function(e){t.$set(t.form,"sell",e)},expression:"form.sell"}},[i("v-radio",{attrs:{label:"上架",value:!0}}),i("v-radio",{attrs:{label:"下架",value:!1}})],1)],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:t.modalSubmitting,color:"error"},on:{click:function(e){return t.resetForm()}}},[t._v(" 取消 ")]),i("v-btn",{attrs:{disabled:!t.valid||t.modalSubmitting,color:"success"},on:{click:function(e){t.validate(),t.submitModal()}}},[t._v(" 送出 ")])],1)],1)],1),i("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",t._l(t.theads,(function(e){return i("th",{key:e.name,staticClass:"text-left"},[t._v(" "+t._s(e)+" ")])})),0)]),i("tbody",t._l(t.products,(function(e,n){return i("tr",{key:e._id},[i("td",[e.image?i("img",{staticStyle:{height:"50px"},attrs:{src:e.image}}):t._e()]),i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.price))]),i("td",[t._v(t._s(e.category))]),i("td",[t._v(t._s(e.description))]),i("td",[i("h1",[t._v(t._s(e.sell?"v":""))])]),i("td",[i("v-btn",{on:{click:function(e){return t.editProduct(n)}}},[t._v("編輯")])],1)])})),0)]},proxy:!0}])})],1)],1)},a=[],r=i("5530"),o=i("1da1"),s=(i("96cf"),i("a434"),i("b0c0"),{data:function(){return{dialog:!1,valid:!0,modalSubmitting:!1,products:[],form:{name:"",price:null,description:"",image:null,sell:!1,category:"",_id:"",index:-1},nameRules:[function(t){return!!t||"商品名稱必填"},function(t){return t.length<=10||"商品名稱最多十個字"},function(t){return t.length>=2||"商品名稱最少兩個字"}],priceRules:[function(t){return!!t||"商品價格必填"},function(t){return t.length>=0||"商品價格最少0元"}],categories:[{text:"請選擇分類",value:""},"豚骨","醬油","雞白湯","叉燒"],theads:["圖片","名稱","價格","分類","說明","上架","操作"]}},computed:{isEdit:function(){return this.form._id?"編輯商品":"新增商品"},editDontNeedImg:function(){return 0===this.form._id.length?"":null===this.form.image}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset(),this.form={image:null,category:null,_id:"",index:-1}},submitModal:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,n,a,r,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t.modalSubmitting=!0,i=new FormData,t.form)"_id"!==n&&i.append(n,t.form[n]);if(e.prev=3,0!==t.form._id.length){e.next=12;break}return e.next=7,t.api.post("/products",i,{headers:{authorization:"Bearer "+t.user.token}});case 7:a=e.sent,r=a.data,t.products.push(r.result),e.next=18;break;case 12:return e.next=14,t.api.patch("/products/"+t.form._id,i,{headers:{authorization:"Bearer "+t.user.token}});case 14:o=e.sent,s=o.data,console.log(s),t.products.splice(t.form.index,1,s.result);case 18:t.dialog=!1,t.reset(),e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](3),""===t.form.name||null===t.form.price||null===t.form.category?t.$swal({icon:"error",title:"錯誤",text:"必填欄位不能為空"}):null===t.form.image?t.$swal({icon:"error",title:"錯誤",text:"圖片欄位不得為空"}):t.$swal({icon:"error",title:"錯誤",text:e.t0.response.data.message});case 25:t.modalSubmitting=!1;case 26:case"end":return e.stop()}}),e,null,[[3,22]])})))()},resetForm:function(t){this.modalSubmitting&&t.preventDefault(),this.dialog=!1,this.form={name:"",price:null,description:"",image:null,sell:!1,category:null,index:-1}},editProduct:function(t){this.form=Object(r["a"])(Object(r["a"])({},this.products[t]),{},{image:null,index:t}),this.dialog=!0}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/products/all",{headers:{authorization:"Bearer "+t.user.token}});case 3:i=e.sent,n=i.data,t.products=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"取得商品失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),l=s,c=i("2877"),u=i("6544"),d=i.n(u),h=i("7496"),v=i("8336"),f=i("b0af"),p=i("99d9"),m=i("62ad"),g=i("a523"),b=i("2909"),y=i("ade3"),x=(i("a9e3"),i("498a"),i("caad"),i("2532"),i("d3b7"),i("7db0"),i("368e"),i("480e")),w=i("4ad4"),k=i("b848"),C=i("75eb"),_=i("1abc"),S=i("80d2"),O=i("2b0e"),$=O["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new _["a"]({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(S["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(S["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[S["x"].up,S["x"].pageup],i=[S["x"].down,S["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var i,n,a=e.shiftKey||e.deltaX?"x":"y",r="y"===a?e.deltaY:e.deltaX||e.deltaY;"y"===a?(i=0===t.scrollTop,n=t.scrollTop+t.clientHeight===t.scrollHeight):(i=0===t.scrollLeft,n=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=r<0,s=r>0;return!(i||!o)||(!(n||!s)||!(!i&&!n)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(S["g"])(t);if("keydown"===t.type&&e[0]===document.body){var i=this.$refs.dialog,n=window.getSelection().anchorNode;return!(i&&this.hasScrollbar(i)&&this.isInside(n,i))||!this.shouldScroll(i,t)}for(var a=0;a<e.length;a++){var r=e[a];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return!this.shouldScroll(r,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(S["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),A=i("e4d3"),V=i("21be"),j=i("f2e7"),E=i("a293"),I=i("58df"),B=i("d9bd"),L=Object(I["a"])(w["a"],k["a"],C["a"],$,A["a"],V["a"],j["a"]),T=L.extend({name:"v-dialog",directives:{ClickOutside:E["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(y["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(y["a"])(t,"v-dialog--active",this.isActive),Object(y["a"])(t,"v-dialog--persistent",this.persistent),Object(y["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(y["a"])(t,"v-dialog--scrollable",this.scrollable),Object(y["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(B["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):$.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===S["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(b["a"])(i).find((function(t){return!t.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(x["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(r["a"])({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(r["a"])(Object(r["a"])({},t.style),{},{maxWidth:Object(S["h"])(this.maxWidth),width:Object(S["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),D=i("4bd4"),F=i("15fd"),N=(i("2c64"),i("ba87")),R=i("9d26"),z=i("c37a"),G=i("7e2b"),M=i("a9ad"),q=i("4e82"),Z=i("5607"),P=O["a"].extend({name:"rippleable",directives:{ripple:Z["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),W=i("7560"),K=(i("25f0"),i("4de4"),i("8547"));function Y(t){t.preventDefault()}var H=Object(I["a"])(z["a"],P,K["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=z["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:Y},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:Y},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),X=i("d9f7"),J=["title"],U=Object(I["a"])(G["a"],M["a"],P,Object(q["a"])("radioGroup"),W["a"]),Q=U.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return H.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return z["a"].options.computed.computedId.call(this)},hasLabel:z["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return H.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return H.options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(N["a"],{on:{click:Y},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(S["s"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(F["a"])(t,J));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(R["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(r["a"])({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(X["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}}),tt=(i("ec29"),i("3d86"),i("604c")),et=Object(I["a"])(tt["a"],z["a"]),it=et.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},z["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},z["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=z["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=z["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:tt["a"].options.methods.onClick},render:function(t){var e=z["a"].options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}}),nt=i("0fd9"),at=i("b974"),rt=i("1f4f"),ot=(i("20f6"),Object(S["i"])("spacer","div","v-spacer")),st=i("8654"),lt=Object(c["a"])(l,n,a,!1,null,null,null);e["default"]=lt.exports;d()(lt,{VApp:h["a"],VBtn:v["a"],VCard:f["a"],VCardActions:p["a"],VCardTitle:p["d"],VCol:m["a"],VContainer:g["a"],VDialog:T,VForm:D["a"],VRadio:Q,VRadioGroup:it,VRow:nt["a"],VSelect:at["a"],VSimpleTable:rt["a"],VSpacer:ot,VTextField:st["a"]})},c732:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("h1",{staticClass:"text-center"},[t._v("請選擇管理項目")])])},a=[],r=i("2877"),o=i("6544"),s=i.n(o),l=i("7496"),c={},u=Object(r["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports;s()(u,{VApp:l["a"]})},ec29:function(t,e,i){},ec5c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-data-table",{attrs:{headers:t.headers,items:t.orders,"items-per-page":5},scopedSlots:t._u([{key:"item.date",fn:function(e){var i=e.item;return[t._v(" "+t._s(new Date(i.date).toLocaleString("zh-tw"))+" ")]}},{key:"item.products",fn:function(e){var n=e.item;return[i("ul",t._l(n.products,(function(e){return i("li",{key:e._id},[t._v(" "+t._s(e.product.name)+" x "+t._s(e.quantity)+" ")])})),0)]}}])})],1)},a=[],r=i("1da1"),o=(i("96cf"),{data:function(){return{orders:[],headers:[{text:"單號",value:"_id"},{text:"日期",value:"date"},{text:"商品",value:"products"}]}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.api.get("/orders/me",{headers:{authorization:"Bearer "+t.user.token}});case 3:i=e.sent,n=i.data,t.orders=n.result,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗",text:"取得訂單失敗"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}),s=o,l=i("2877"),c=i("6544"),u=i.n(c),d=i("a523"),h=i("8fea"),v=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=v.exports;u()(v,{VContainer:d["a"],VDataTable:h["a"]})}}]);
//# sourceMappingURL=admin.bc9909ed.js.map