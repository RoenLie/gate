(self.webpackChunkfrost_flow_client=self.webpackChunkfrost_flow_client||[]).push([["src_app_features_inventory_features_manager_router_inventory-manager_module_ts"],{1026:(t,e,i)=>{"use strict";i.r(e),i.d(e,{InventoryManagerModule:()=>dt});var o=i(1116),n=i(6728),s=i(91),r=i(3316),l=i(7425);let c=(()=>{class t{constructor(){this.resizeElements=[],this.fractions=new l.X([])}resetFractions(){const t=window.getComputedStyle(this.hostEl).getPropertyValue("grid-template-columns").replace(/px/g,"").split(" ").map((t,e)=>{var i;const o=Number(t),n=(null===(i=this.resizeElements[e])||void 0===i?void 0:i.minWidth)||0;return o>n?o:n});this.fractions.next(t)}setFractions(t,e,i,o){const n=this.fractions.value;return!(i<(this.resizeElements[t].minWidth||0))&&(n[t]=i,n[e]-o<(this.resizeElements[e].minWidth||0)?void 0:(n[e]-=o,this.fractions.next(n),!0))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"platform"}),t})(),a=(()=>{class t{constructor(t,e,i){this.resizeService=t,this.elementRef=e,this.rd=i}ngOnInit(){this.resizeService.hostEl=this.elementRef.nativeElement,this.resizeService.hostRect=this.elementRef.nativeElement.getBoundingClientRect(),this.resizeService.fractions.subscribe(t=>{this.rd.setStyle(this.elementRef.nativeElement,"grid-template-columns",t.map(t=>t/100+"fr").join(" "))}),this.resizeService.resetFractions()}hostResize(t){this.resizeService.resetFractions()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c),r.Y36(r.SBq),r.Y36(r.Qsj))},t.\u0275dir=r.lG2({type:t,selectors:[["","resizeHost",""]],hostBindings:function(t,e){1&t&&r.NdJ("resize",function(t){return e.hostResize(t)},!1,r.Jf7)},inputs:{options:["resizeHost","options"]},features:[r._Bn([c])]}),t})(),d=(()=>{class t{constructor(t,e,i){this.resizeService=t,this.elementRef=e,this.rd=i,this.defaultColor="inherit",this.highlightColor="rgba(150,150,150)",this.activeColor="rgba(200,200,200)",this.dynamicResize=!0}ngAfterViewInit(){this.createMainDiv(),this.createEvents()}createMainDiv(){switch(this.elementRef.nativeElement.getBoundingClientRect(),this.div=this.rd.createElement("div"),this.rd.setStyle(this.div,"position","absolute"),this.rd.setStyle(this.div,"background-color",this.defaultColor),this.rd.setStyle(this.div,this.direction,"0"),this.direction){case"left":case"right":this.rd.setStyle(this.div,"height","100%"),this.rd.setStyle(this.div,"width","0.2rem"),this.rd.setStyle(this.div,"cursor","ew-resize"),this.rd.setStyle(this.div,"top","0");break;default:console.log("got into the default"),this.rd.setStyle(this.div,"width","100%"),this.rd.setStyle(this.div,"height","0.2rem"),this.rd.setStyle(this.div,"cursor","ns-resize")}this.rd.appendChild(this.elementRef.nativeElement,this.div)}createGhostDiv(){const t=this.div.getBoundingClientRect();this.ghostDiv=this.rd.createElement("div"),this.rd.setStyle(this.ghostDiv,"position","fixed"),this.rd.setStyle(this.ghostDiv,"z-index","1"),this.rd.setStyle(this.ghostDiv,"height",t.height+"px"),this.rd.setStyle(this.ghostDiv,"user-select","none"),this.rd.setStyle(this.ghostDiv,"width",t.width+"px"),this.rd.setStyle(this.ghostDiv,"background-color",this.activeColor),this.rd.appendChild(this.div,this.ghostDiv)}createEvents(){this.createMousedown(),this.createMouseenter(),this.createMouseout()}createMousedown(){this.mousedownListener=this.rd.listen(this.div,"mousedown",()=>{this.createMouseup(),this.createMousemove(),this.createGhostDiv()})}createMouseup(){this.mouseupListener=this.rd.listen(window,"mouseup",t=>{this.x=0,this.y=0,this.rd.removeChild(this.div,this.ghostDiv),this.rd.setStyle(this.div,"background-color",this.defaultColor),this.mousemoveListener(),this.mouseupListener()})}createMousemove(){this.mousemoveListener=this.rd.listen(window,"mousemove",t=>{t.preventDefault(),1!=t.buttons&&(this.mousemoveListener(),this.mouseupListener()),this.xPrev=this.x||t.clientX,this.yPrev=this.y||t.clientY,this.x=t.clientX,this.y=t.clientY;const e=this.x===this.xPrev?0:this.x>this.xPrev?1:-1;if(0===e)return;const i=this.elementRef.nativeElement.getBoundingClientRect(),o=this.x-this.xPrev;if("right"==this.direction){const t=i.width+o,n=this.options.index+1,s=this.resizeService.resizeElements[n],r=s.element.getBoundingClientRect().width;if(s.minWidth&&e>0&&r<=s.minWidth)return;if(this.options.minWidth&&e<0&&t<=this.options.minWidth)return;if(!this.resizeService.setFractions(this.options.index,n,t,o))return;this.rd.setStyle(this.ghostDiv,"left",i.right+"px")}})}createMouseenter(){this.mouseenterListener=this.rd.listen(this.div,"mouseenter",t=>{t.buttons>=1||this.rd.setStyle(this.div,"background-color",this.highlightColor)})}createMouseout(){this.mouseoutListener=this.rd.listen(this.div,"mouseout",()=>{this.rd.setStyle(this.div,"background-color",this.defaultColor)})}ngOnDestroy(){var t,e,i,o,n;null===(t=this.mousedownListener)||void 0===t||t.call(this),null===(e=this.mousemoveListener)||void 0===e||e.call(this),null===(i=this.mouseupListener)||void 0===i||i.call(this),null===(o=this.mouseenterListener)||void 0===o||o.call(this),null===(n=this.mouseoutListener)||void 0===n||n.call(this)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c),r.Y36(r.SBq),r.Y36(r.Qsj))},t.\u0275dir=r.lG2({type:t,selectors:[["","resizable",""]],inputs:{direction:["resizable","direction"],options:["resizeOptions","options"],defaultColor:"defaultColor",highlightColor:"highlightColor",activeColor:"activeColor",dynamicResize:"dynamicResize"}}),t})(),u=(()=>{class t{constructor(t,e,i){this.resizeService=t,this.elementRef=e,this.rd=i}ngOnInit(){this.resizeService.resizeElements.push({element:this.elementRef.nativeElement,index:this.options.index,maxWidth:this.options.maxWidth,minWidth:this.options.minWidth})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(c),r.Y36(r.SBq),r.Y36(r.Qsj))},t.\u0275dir=r.lG2({type:t,selectors:[["","resizeOptions",""]],inputs:{options:["resizeOptions","options"]}}),t})();var h=i(4762);const g=()=>(0,h.mG)(void 0,void 0,void 0,function*(){return C}),f=t=>(0,h.mG)(void 0,void 0,void 0,function*(){return O.filter(e=>e.itemId==t)}),m=t=>(0,h.mG)(void 0,void 0,void 0,function*(){return _.filter(e=>e.flowId==t)}),v=t=>(0,h.mG)(void 0,void 0,void 0,function*(){return _.find(e=>e.id==t)}),p=t=>(0,h.mG)(void 0,void 0,void 0,function*(){return P.find(e=>e.id==t)}),w=(t,e,i)=>(0,h.mG)(void 0,void 0,void 0,function*(){const[o,n]=yield b(t,e);if(!o||!n)return!1;for(const t in i.controls)n.formData[t]=i.controls[t].value;return"INVALID"==i.status&&(o.status="error"),"VALID"==i.status&&(o.status="ongoing"),!0}),b=(t,e)=>(0,h.mG)(void 0,void 0,void 0,function*(){return yield Promise.all([v(t),p(e)])}),C=[{id:1,name:"item1"},{id:2,name:"item2"},{id:3,name:"item3"},{id:4,name:"item4"},{id:5,name:"item5"}],O=[{id:1,itemId:1,name:"flow1"},{id:2,itemId:1,name:"flow2"},{id:3,itemId:2,name:"flow3"},{id:4,itemId:2,name:"flow4"},{id:5,itemId:3,name:"flow5"},{id:6,itemId:3,name:"flow6"},{id:7,itemId:4,name:"flow7"},{id:8,itemId:4,name:"flow8"},{id:9,itemId:5,name:"flow9"},{id:10,itemId:5,name:"flow10"}],_=[{id:1,flowId:1,name:"subflow1",status:"ongoing",iconPath:"assets/svg/wind-solid.svg"},{id:2,flowId:1,name:"subflow2",status:"ongoing",iconPath:"assets/svg/wind-solid.svg"},{id:3,flowId:2,name:"subflow3",status:"ongoing",iconPath:"assets/svg/wind-solid.svg"},{id:4,flowId:2,name:"subflow4",status:"ongoing",iconPath:"assets/svg/wind-solid.svg"}],P=[{id:1,subflowID:1,name:"form1",formInfo:{disabled:!1},formControlsInfo:{name:{label:"Name",order:10},age:{label:"Age",order:20}},formData:{name:"Kristoffer",age:29},formGroup:{name:[{value:"",disabled:!0},[n.kI.pattern("[a-zA-Z-]*"),n.kI.required]],age:[null,[n.kI.pattern("[0-9]*"),n.kI.min(1),n.kI.max(99),n.kI.required]]}},{id:2,subflowID:2,name:"form2",formInfo:{},formControlsInfo:{height:{label:"Height",order:10},weight:{label:"Weight",order:20}},formData:{height:180,weight:90},formGroup:{height:[null,[n.kI.pattern("[0-9]*"),n.kI.required]],weight:[null,[n.kI.pattern("[0-9]*"),n.kI.min(1),n.kI.max(99),n.kI.required]]}}];let M=(()=>{class t{constructor(){this.items=[],this.activeItem=new l.X(this.items[0]),(()=>{(0,h.mG)(this,void 0,void 0,function*(){const t=yield g();t&&(this.items=t,this.select(0))})})()}select(t){this.activeItem.next(this.items[t])}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const x=["*"];let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-list-item"]],ngContentSelectors:x,decls:1,vars:0,template:function(t,e){1&t&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{padding:.5rem;background-color:#282828;box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 1px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.1),0 4px 4px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1)}.active[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover:not(.disabled){box-shadow:0 0 2px 2px hsla(0,0%,100%,.5)}.invalid[_nghost-%COMP%]{box-shadow:0 0 2px 2px rgba(128,0,0,.7)}.disabled[_nghost-%COMP%]{opacity:.5}"]}),t})();const k=function(t){return{active:t}};function S(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"fl-list-item",1),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw().invItemService.select(e)}),r._uU(1),r.qZA()}if(2&t){const t=e.$implicit,i=r.oxw();r.Q6J("ngClass",r.VKq(2,k,(null==t?null:t.id)===(null==i.invItemService.activeItem.value?null:i.invItemService.activeItem.value.id))),r.xp6(1),r.hij(" ",t.name,"\n")}}let I=(()=>{class t{constructor(t){this.invItemService=t}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(M))},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-item-selector"]],decls:1,vars:1,consts:[[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(t,e){1&t&&r.YNc(0,S,2,4,"fl-list-item",0),2&t&&r.Q6J("ngForOf",e.invItemService.items)},directives:[o.sg,y,o.mk],styles:["[_nghost-%COMP%]{display:grid;grid-auto-flow:row dense;grid-auto-rows:-webkit-min-content;grid-auto-rows:min-content;grid-row-gap:1rem;row-gap:1rem;height:100%;padding:.5rem;background-color:#141414;overflow:auto}[_nghost-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}"]}),t})();var Z=Object.prototype.toString;function F(t,e,i,o){return t===e&&0!==t||function t(e,s){var r,l,c,a,d;if((r=Z.call(e))!==Z.call(s))return!1;switch(r){default:return e.valueOf()===s.valueOf();case"[object Number]":return s=+s,(e=+e)?e===s:e==e?1/e==1/s:s!=s;case"[object RegExp]":return e.source==s.source&&e.global==s.global&&e.ignoreCase==s.ignoreCase&&e.multiline==s.multiline&&e.lastIndex==s.lastIndex;case"[object Function]":return!1;case"[object Array]":if(o&&null!==(a=n(e,s)))return a;if((l=e.length)!=s.length)return!1;for(;l--;)if(!((a=e[l])===(d=s[l])&&0!==a||t(a,d)))return!1;return!0;case"[object Object]":if(o&&null!==(a=n(e,s)))return a;if(l=0,i){var u=[];for(c in e)if(e.hasOwnProperty(c)){if(u.push(c),(a=e[c])===(d=s[c])&&0!==a||t(a,d))continue;return!1}for(c in s)if(s.hasOwnProperty(c)&&u[l++]!=c)return!1}else{for(c in e)if(e.hasOwnProperty(c)){if(++l,(a=e[c])===(d=s[c])&&0!==a||t(a,d))continue;return!1}for(c in s)if(s.hasOwnProperty(c)&&--l<0)return!1}return!0}}(t,e);function n(t,e){var i=[];return function(t,e){for(var o=i.length;o--;)if(i[o--]===e)return i[o]===t;return i.push(t,e),null}(t,e)}}let z=(()=>{class t{constructor(t){this.invMngItemService=t,this.flows=[],this.activeFlow=new l.X(this.flows[0]),this.subscriptions=[];const e=this.invMngItemService.activeItem.subscribe(t=>(0,h.mG)(this,void 0,void 0,function*(){if(!(null==t?void 0:t.id))return void this.activeFlow.next(void 0);const e=yield f(null==t?void 0:t.id);if(!e)return;if(F(this.flows,e))return;if(this.flows=e,!this.activeFlow.value)return void this.select(0);const i=this.flows.findIndex(t=>{var e;return t.id==(null===(e=this.activeFlow.value)||void 0===e?void 0:e.id)});this.select(i>-1?i:0)}));this.subscriptions.push(e)}select(t){this.activeFlow.next(this.flows[t])}ngOnDestroy(){this.subscriptions.forEach(t=>null==t?void 0:t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(M))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const G=["*"];let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-item"]],ngContentSelectors:G,decls:1,vars:0,template:function(t,e){1&t&&(r.F$t(),r.Hsn(0))},styles:["[_nghost-%COMP%]{padding:.5rem;background-color:#282828;box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 1px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.1),0 4px 4px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1)}.active[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover:not(.disabled){box-shadow:0 0 2px 2px hsla(0,0%,100%,.5)}.invalid[_nghost-%COMP%]{box-shadow:0 0 2px 2px rgba(128,0,0,.7)}.disabled[_nghost-%COMP%]{opacity:.5}"]}),t})();const D=function(t){return{active:t}};function q(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"fl-flow-item",1),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw().invFlowService.select(e)}),r._uU(1),r.qZA()}if(2&t){const t=e.$implicit,i=r.oxw();r.Q6J("ngClass",r.VKq(2,D,(null==t?null:t.id)===(null==i.invFlowService.activeFlow.value?null:i.invFlowService.activeFlow.value.id))),r.xp6(1),r.hij(" ",t.name,"\n")}}let J=(()=>{class t{constructor(t){this.invFlowService=t}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(z))},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-selector"]],decls:1,vars:1,consts:[[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(t,e){1&t&&r.YNc(0,q,2,4,"fl-flow-item",0),2&t&&r.Q6J("ngForOf",e.invFlowService.flows)},directives:[o.sg,A,o.mk],styles:["[_nghost-%COMP%]{display:grid;grid-auto-flow:row dense;grid-auto-rows:-webkit-min-content;grid-auto-rows:min-content;grid-row-gap:1rem;row-gap:1rem;padding:.5rem;background-color:#141414;overflow:auto}[_nghost-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}"]}),t})(),Y=(()=>{class t{constructor(){this.actions=[],this.generateFlowActions()}generateFlowActions(){for(let t=0;t<5;t++)this.actions.push({name:"action",svgPath:"assets/svg/save-solid.svg",function:()=>{}})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=i(8070);let T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-action"]],inputs:{svgPath:"svgPath",svgStyle:"svgStyle"},decls:1,vars:2,consts:[[3,"src","svgStyle"]],template:function(t,e){1&t&&r._UZ(0,"svg-icon",0),2&t&&r.Q6J("src",e.svgPath)("svgStyle",e.svgStyle)},directives:[E.bk],styles:["[_nghost-%COMP%]{display:grid;place-items:center;padding:.25rem;border-radius:.5rem;cursor:pointer;background-color:#282828;box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 1px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.1),0 4px 4px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1)}.active[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover:not(.disabled){box-shadow:0 0 2px 2px hsla(0,0%,100%,.5)}.invalid[_nghost-%COMP%]{box-shadow:0 0 2px 2px rgba(128,0,0,.7)}.disabled[_nghost-%COMP%]{opacity:.5}svg-icon[_ngcontent-%COMP%]{display:grid;place-items:center}"]}),t})();function Q(t,e){if(1&t&&(r.TgZ(0,"fl-flow-action",1),r.NdJ("click",function(){return e.$implicit.function()}),r.qZA()),2&t){const t=e.$implicit,i=r.oxw();r.Q6J("svgPath",t.svgPath)("svgStyle",i.svgStyle)}}let R=(()=>{class t{constructor(t){this.flowActionService=t,this.svgStyle={"height.px":"35","width.px":"35"}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(Y))},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-action-selector"]],decls:1,vars:1,consts:[[3,"svgPath","svgStyle","click",4,"ngFor","ngForOf"],[3,"svgPath","svgStyle","click"]],template:function(t,e){1&t&&r.YNc(0,Q,1,2,"fl-flow-action",0),2&t&&r.Q6J("ngForOf",e.flowActionService.actions)},directives:[o.sg,T],styles:["[_nghost-%COMP%]{display:grid;grid-auto-flow:column dense;grid-auto-columns:-webkit-min-content;grid-auto-columns:min-content;grid-column-gap:.5rem;column-gap:.5rem;padding:.25rem;overflow:auto}[_nghost-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}"]}),t})(),L=(()=>{class t{constructor(t){this.invMngFlowService=t,this.subflows=[],this.activeSubflow=new l.X(this.subflows[0]),this.subscriptions=[],this.awaitingRefresh=!1;const e=this.invMngFlowService.activeFlow.subscribe(t=>(0,h.mG)(this,void 0,void 0,function*(){if(!(null==t?void 0:t.id))return;const e=yield m(null==t?void 0:t.id);if(!e)return;if(F(this.subflows,e))return;if(this.subflows=e,!this.activeSubflow.value)return void this.select(0);const i=this.subflows.findIndex(t=>t.id==this.activeSubflow.value.id);this.select(i>-1?i:0)}));this.subscriptions.push(e)}select(t){this.activeSubflow.next(this.subflows[t])}refresh(){return(0,h.mG)(this,void 0,void 0,function*(){const t=this.activeSubflow.value.id;if(!t)return;const e=this.invMngFlowService.activeFlow.value;if(!e)return;const i=yield m(e.id);if(!i)return;this.subflows=i;const o=this.subflows.find(e=>e.id==t);o&&this.activeSubflow.next(o)})}ngOnDestroy(){this.subscriptions.forEach(t=>null==t?void 0:t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(z))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),N=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-subflow-item"]],inputs:{svgPath:"svgPath",svgStyle:"svgStyle"},decls:1,vars:2,consts:[[3,"src","svgStyle"]],template:function(t,e){1&t&&r._UZ(0,"svg-icon",0),2&t&&r.Q6J("src",e.svgPath)("svgStyle",e.svgStyle)},directives:[E.bk],styles:["[_nghost-%COMP%]{display:grid;place-items:center;padding:.25rem;border-radius:.5rem;cursor:pointer;background-color:#282828;box-shadow:0 1px 1px rgba(0,0,0,.1),0 1px 1px rgba(0,0,0,.1),0 2px 2px rgba(0,0,0,.1),0 4px 4px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1)}.active[_nghost-%COMP%], [_nghost-%COMP%]:focus-within, [_nghost-%COMP%]:hover:not(.disabled){box-shadow:0 0 2px 2px hsla(0,0%,100%,.5)}.invalid[_nghost-%COMP%]{box-shadow:0 0 2px 2px rgba(128,0,0,.7)}.disabled[_nghost-%COMP%]{opacity:.5}.complete[_nghost-%COMP%]{color:#78b017}.ongoing[_nghost-%COMP%]{color:#f7ec50}.error[_nghost-%COMP%]{color:#b92222}svg-icon[_ngcontent-%COMP%]{display:grid;place-items:center}"]}),t})();const U=function(t,e,i,o){return{active:t,complete:e,ongoing:i,error:o}};function j(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"fl-subflow-item",1),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw().subflowService.select(e)}),r.qZA()}if(2&t){const t=e.$implicit,i=r.oxw();r.Q6J("ngClass",r.l5B(3,U,(null==t?null:t.id)==(null==i.subflowService.activeSubflow.value?null:i.subflowService.activeSubflow.value.id),"complete"==t.status,"ongoing"==t.status,"error"==t.status))("svgPath",t.iconPath)("svgStyle",i.svgStyle)}}let X=(()=>{class t{constructor(t){this.subflowService=t,this.svgStyle={"height.px":"35","width.px":"35"}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(L))},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-subflow-selector"]],decls:1,vars:1,consts:[[3,"ngClass","svgPath","svgStyle","click",4,"ngFor","ngForOf"],[3,"ngClass","svgPath","svgStyle","click"]],template:function(t,e){1&t&&r.YNc(0,j,1,8,"fl-subflow-item",0),2&t&&r.Q6J("ngForOf",e.subflowService.subflows)},directives:[o.sg,N,o.mk],styles:["[_nghost-%COMP%]{display:grid;grid-auto-flow:column dense;grid-auto-columns:-webkit-min-content;grid-auto-columns:min-content;grid-column-gap:.5rem;column-gap:.5rem;padding:.25rem;overflow:auto}[_nghost-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:.75em;height:.75em}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(0,0,0,.15)}[_nghost-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.09)}"]}),t})();var B=i(2619);let W=(()=>{class t{constructor(t){this.subflowService=t,this.activeForm=new l.X(void 0),this.subscriptions=[];const e=this.subflowService.activeSubflow.subscribe(t=>(0,h.mG)(this,void 0,void 0,function*(){if(!(null==t?void 0:t.id))return void this.activeForm.next(void 0);const e=yield(i=null==t?void 0:t.id,(0,h.mG)(void 0,void 0,void 0,function*(){return P.find(t=>t.subflowID==i)}));var i;e?F(this.activeForm.value,e)&&"complete"!=t.status||this.activeForm.next(e):this.activeForm.next(void 0)}));this.subscriptions.push(e)}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(L))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var H=i(194);let $=(()=>{class t{transform(t,e){return t.sort((t,i)=>{var o,n;return((null===(o=null==e?void 0:e[t.key])||void 0===o?void 0:o.order)||-1)>((null===(n=null==e?void 0:e[i.key])||void 0===n?void 0:n.order)||-1)?1:-1})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Yjl({name:"sortByOrder",type:t,pure:!0}),t})();function V(t,e){if(1&t&&r._UZ(0,"fl-input",4),2&t){const t=e.$implicit,i=r.oxw(2);r.Q6J("formControlName",t.key)("label",null==i.form?null:i.form.formControlsInfo[t.key].label)}}function K(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"form",1),r.TgZ(1,"section"),r.TgZ(2,"header"),r.TgZ(3,"h1"),r._uU(4),r.qZA(),r.qZA(),r.qZA(),r.TgZ(5,"section"),r.YNc(6,V,1,2,"fl-input",2),r.ALo(7,"sortByOrder"),r.ALo(8,"keyvalue"),r.qZA(),r.TgZ(9,"section"),r.TgZ(10,"button",3),r.NdJ("click",function(){return r.CHM(t),r.oxw().save()}),r._uU(11,"Save"),r.qZA(),r.TgZ(12,"button",3),r.NdJ("click",function(){return r.CHM(t),r.oxw().submit()}),r._uU(13,"Submit"),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=r.oxw();r.Q6J("formGroup",t.formGroup),r.xp6(4),r.Oqu(t.form.name),r.xp6(2),r.Q6J("ngForOf",r.xi3(7,5,r.lcZ(8,8,t.formGroup.controls),t.form.formControlsInfo)),r.xp6(4),r.Q6J("disabled",!t.formGroup.valid),r.xp6(2),r.Q6J("disabled",!t.formGroup.valid)}}let tt=(()=>{class t{constructor(t,e,i){this.formService=t,this.subflowService=e,this.fb=i,this.createForm=(t,e)=>t.group(e)}ngOnInit(){this.formService.activeForm.subscribe(t=>{if(this.form=t,this.form){for(const t in this.form.formGroup){if(!this.form.formData[t])return;this.form.formGroup[t][0]="Object"==(0,B.d)(this.form.formGroup[t][0])?Object.assign(Object.assign({},this.form.formGroup[t][0]),{value:this.form.formData[t]}):this.form.formData[t]}this.formGroup=this.createForm(this.fb,null==t?void 0:t.formGroup),this.form.formInfo.disabled&&this.formGroup.disable()}else this.formGroup=new n.cw({})})}save(){this.form&&w(this.form.subflowID,this.form.id,this.formGroup)}submit(){return(0,h.mG)(this,void 0,void 0,function*(){var t,e,i;this.form&&(yield(t=this.form.subflowID,e=this.form.id,i=this.formGroup,(0,h.mG)(void 0,void 0,void 0,function*(){const[o,n]=yield b(t,e);return!(!o||!n||(yield w(t,e,i),n.formInfo.disabled=!0,o.status="complete",0))})),this.subflowService.refresh())})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(W),r.Y36(L),r.Y36(n.qu))},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-form"]],decls:1,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],[3,"formControlName","label",4,"ngFor","ngForOf"],[3,"disabled","click"],[3,"formControlName","label"]],template:function(t,e){1&t&&r.YNc(0,K,14,10,"form",0),2&t&&r.Q6J("ngIf",e.form)},directives:[o.O5,n._Y,n.JL,n.sg,o.sg,H.K,n.JJ,n.u],pipes:[$,o.Nd],styles:['[_nghost-%COMP%]{display:grid;grid-row-gap:.5rem;row-gap:.5rem;grid-template-rows:1fr}header[_ngcontent-%COMP%]{place-items:center}form[_ngcontent-%COMP%], header[_ngcontent-%COMP%]{display:grid}form[_ngcontent-%COMP%]{grid-template-areas:"header" "inputs" "actions";grid-template-rows:auto 1fr auto;grid-template-columns:1fr}form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]:first-child{grid-area:header}form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]:nth-child(2){grid-area:inputs;grid-auto-flow:row dense;grid-auto-rows:-webkit-min-content;grid-auto-rows:min-content;grid-row-gap:.5rem;row-gap:.5rem}form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]:nth-child(2), form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]:nth-child(3){overflow:hidden;position:relative;padding:.5rem;display:grid}form[_ngcontent-%COMP%] > section[_ngcontent-%COMP%]:nth-child(3){grid-area:actions;place-items:center flex-end;grid-auto-flow:column dense;grid-auto-rows:-webkit-min-content;grid-auto-rows:min-content}']}),t})(),et=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-flow-details"]],decls:12,vars:0,consts:[[2,"position","absolute","top","0","right","0"]],template:function(t,e){1&t&&(r.TgZ(0,"div"),r.TgZ(1,"div",0),r._uU(2,"flow actions"),r.qZA(),r._UZ(3,"fl-flow-action-selector"),r.qZA(),r.TgZ(4,"div"),r.TgZ(5,"div",0),r._uU(6,"subflows"),r.qZA(),r._UZ(7,"fl-subflow-selector"),r.qZA(),r.TgZ(8,"div"),r.TgZ(9,"div",0),r._uU(10,"flow form"),r.qZA(),r._UZ(11,"fl-flow-form"),r.qZA())},directives:[R,X,tt],styles:['[_nghost-%COMP%]{position:relative;height:100%;padding:.5rem;background-color:#141414;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr;grid-row-gap:.5rem;row-gap:.5rem;grid-template-areas:"actions" "subflows" "form"}[_nghost-%COMP%] > [_ngcontent-%COMP%]:first-child{grid-area:actions}[_nghost-%COMP%] > [_ngcontent-%COMP%]:first-child, [_nghost-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){overflow:hidden;position:relative;padding:.5rem}[_nghost-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){grid-area:subflows}[_nghost-%COMP%] > [_ngcontent-%COMP%]:nth-child(3){grid-area:form;overflow:hidden;position:relative;padding:.5rem;display:grid;grid-template-rows:1fr;grid-template-columns:1fr}[_nghost-%COMP%] > *[_ngcontent-%COMP%], [_nghost-%COMP%] > *[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid #556b2f}']}),t})();const it=function(){return{templateColumns:"1fr 1fr 2fr"}},ot=function(){return{index:0,minWidth:150}},nt=function(){return{index:1,minWidth:150}},st=function(){return{index:2,minWidth:150}};let rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["fl-inventory-manager-grid"]],decls:11,vars:8,consts:[[3,"resizeHost"],["resizable","right",3,"resizeOptions"],[2,"position","absolute","top","0","right","0"],[3,"resizeOptions"]],template:function(t,e){1&t&&(r.TgZ(0,"section",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r._uU(3,"item selector"),r.qZA(),r._UZ(4,"fl-item-selector"),r.qZA(),r.TgZ(5,"div",1),r.TgZ(6,"div",2),r._uU(7,"flow selector"),r.qZA(),r._UZ(8,"fl-flow-selector"),r.qZA(),r.TgZ(9,"div",3),r._UZ(10,"fl-flow-details"),r.qZA(),r.qZA()),2&t&&(r.Q6J("resizeHost",r.DdM(4,it)),r.xp6(1),r.Q6J("resizeOptions",r.DdM(5,ot)),r.xp6(4),r.Q6J("resizeOptions",r.DdM(6,nt)),r.xp6(4),r.Q6J("resizeOptions",r.DdM(7,st)))},directives:[a,d,u,I,J,et],styles:['section[_ngcontent-%COMP%]{position:relative;display:grid;padding:1em;height:100%;width:100%;grid-template-rows:1fr;grid-template-columns:1fr 1fr 2fr;grid-template-areas:"items flows details"}section[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{grid-area:items;grid-template-rows:1fr;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}section[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, section[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){overflow:hidden;position:relative;display:grid}section[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(2){grid-area:flows;grid-template-rows:1fr;border-left:none}section[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(3){overflow:hidden;position:relative;grid-area:details;display:grid;grid-template-rows:1fr;border-left:none;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], section[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:1px solid #556b2f}']}),t})();var lt=i(8718);let ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez]]}),t})();const at=[{path:"",component:rt}];let dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,n.u5,n.UX,s.Bz.forChild(at),E._J,ct,lt.K]]}),t})()}}]);