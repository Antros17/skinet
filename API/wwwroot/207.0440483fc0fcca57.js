"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[207],{9207:(T,m,o)=>{o.r(m),o.d(m,{BasketModule:()=>B});var i=o(9808),t=o(4893),u=o(8607);function d(e,s){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"p"),t._uU(2,"Kosarica je prazna"),t.qZA(),t.qZA())}function k(e,s){if(1&e&&(t._UZ(0,"app-order-totals",10),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async")),2&e){const n=t.oxw(2);t.Q6J("shippingPrice",t.lcZ(1,3,n.basketTotals$).shipping)("subtotal",t.lcZ(2,5,n.basketTotals$).subtotal)("total",t.lcZ(3,7,n.basketTotals$).total)}}function v(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"app-basket-summary",6),t.NdJ("decrement",function(c){return t.CHM(n),t.oxw().decrementItemQuantity(c)})("increment",function(c){return t.CHM(n),t.oxw().incrementItemQuantity(c)})("remove",function(c){return t.CHM(n),t.oxw().removeBasketItem(c)}),t.ALo(6,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"div",7),t.YNc(9,k,4,9,"app-order-totals",8),t.ALo(10,"async"),t.TgZ(11,"a",9),t._uU(12," Proceed to checkout "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(5),t.Q6J("items",t.lcZ(6,2,n.basket$).items),t.xp6(4),t.Q6J("ngIf",t.lcZ(10,4,n.basketTotals$))}}let l=(()=>{class e{constructor(n){this.basketServices=n}ngOnInit(){this.basket$=this.basketServices.basket$,this.basketTotals$=this.basketServices.basketTotal$}removeBasketItem(n){this.basketServices.removeItemFromBasket(n)}incrementItemQuantity(n){this.basketServices.incrementItemQuantity(n)}decrementItemQuantity(n){this.basketServices.decrementItemQuantity(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-basket"]],decls:5,vars:6,consts:[[1,"container","mt-2"],[4,"ngIf"],[1,"pb-5"],[1,"container"],[1,"row"],[1,"col-12","py-5","mb-1"],[3,"items","decrement","increment","remove"],[1,"col-6","offset-6"],[3,"shippingPrice","subtotal","total",4,"ngIf"],["routerLink","/checkout",1,"btn","btn-outline-primary","py-2","w-100"],[3,"shippingPrice","subtotal","total"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.YNc(1,d,3,0,"div",1),t.ALo(2,"async"),t.YNc(3,v,13,6,"div",1),t.ALo(4,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",null===t.lcZ(2,2,a.basket$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,4,a.basket$)))},styles:[""]}),e})();var r=o(5020);const Z=[{path:"",component:l}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),e})();var b=o(4466),f=o(3449),g=o(9281);let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,y,b.m]]}),e})();t.B6R(l,[i.O5,f.b,g.S,r.yS],[i.Ov])}}]);