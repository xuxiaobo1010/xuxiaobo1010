(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"8f5d":function(t,e,i){"use strict";i("e9f6")},a02d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-detail"},[i("el-dialog",{attrs:{title:"Message",visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"price"},[t._v(" Pre-payment "),i("span",[t._v("₹"+t._s(t.charge-39*t.handNumber))])]),i("div",{staticClass:"price"},[t._v(" Service Fee "),i("span",[t._v("₹"+t._s(39*t.handNumber))])]),i("div",{staticClass:"price"},[t._v(" Order price "),i("span",{staticClass:"gold"},[t._v("₹256")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),i("el-button",{attrs:{type:"primary","data-index":t.type},on:{click:t.handlePay}},[t._v("OK")])],1)]),i("s-header",{attrs:{name:"Smart Buy Gold Bar"}}),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-swipe-wrap"},[i("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-color":"#1baeae"}},t._l(t.detail.goodsCarouselList,(function(e,s){return i("van-swipe-item",{key:s},[i("img",{attrs:{src:t.prefix(e),alt:""}})])})),1)],1),i("div",{staticClass:"product-info"},[i("div",{staticClass:"product-title"},[t._v(t._s(t.detail.goodsName))]),i("div",{staticClass:"product-price"},[i("span",[t._v("₹"+t._s(t.detail.sellingPrice))])])]),i("ul",{staticClass:"product-contents"},[t._m(0),i("li",{staticClass:"content-free"},[t._v(" Real-time price(Rs/gm)： "),i("span",[t._v("₹"+t._s(t.goldPrice))])]),i("li",{staticClass:"content-free"},[t._v(" Pre-payment： "),i("span",[t._v("₹"+t._s(t.charge))])])]),i("div",{staticClass:"content-weight"},[t._v("Gold Weight:")]),i("div",{staticClass:"weight-detail"},t._l(t.weight,(function(e){return i("div",{key:e.id,staticClass:"detail-w",class:t.weightIndex===e.id?"color":"",on:{click:function(i){return t.handleClick(e.id)}}},[t._v(t._s(e.w)+"gm")])})),0),i("div",{staticClass:"content-weight"},[t._v("Volume Purchase:")]),i("div",{staticClass:"weight-detail"},t._l(t.pieces,(function(e){return i("div",{key:e.id,staticClass:"detail-p",class:t.pieceIndex===e.id?"color":"",on:{click:function(i){return t.handlePiece(e.id)}}},[t._v(t._s(e.p)+"  pieces")])})),0),i("div",{staticClass:"content-weight"},[t._v("Quantity:")]),i("div",{staticClass:"quantity"},[i("span",{on:{click:function(e){return t.handleChange(-1)}}},[t._v("一")]),i("span",[t._v(t._s(t.piece))]),i("span",{on:{click:function(e){return t.handleChange(1)}}},[t._v("+")]),t._v("   In stock: 1680 ")]),i("div",{staticClass:"product-intro"},[i("img",{staticClass:"product-content",attrs:{src:t.detail.goodsDetailContent}})])]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"chat-o",text:"Service"}}),i("van-goods-action-icon",{attrs:{icon:"cart-o",info:t.count?t.count:"",text:"Cart"},on:{click:function(e){return t.goTo()}}}),i("van-goods-action-button",{attrs:{type:"warning",text:"Buying booking"},on:{click:function(e){return t.getDialog(-1)}}}),i("van-goods-action-button",{staticClass:"gray",attrs:{type:"danger",text:"Smart Buy"},on:{click:function(e){return t.getDialog(1)}}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"content-free"},[i("img",{attrs:{src:"https://wap.aofygold.in/common/images/freeShip.png",alt:""}}),t._v("  Free shipping in India ")])}],n=i("360d"),c=i("8ee6"),o=i("0eaf"),d=i("25e6"),r=i("d399"),l=i("495f"),h={data(){return{id:0,type:-1,dialogVisible:!1,weightIndex:0,pieceIndex:-1,piece:1,goldPrice:4500,weight:[{id:0,w:10},{id:1,w:50},{id:2,w:100},{id:3,w:500},{id:4,w:1e3},{id:5,w:3e3}],pieces:[{id:0,p:3},{id:1,p:5},{id:2,p:10},{id:3,p:20}],detail:{goodsCarouselList:[]}}},components:{sHeader:o["a"]},async mounted(){const{id:t}=this.$route.params;this.id=t,this.timer=setInterval(this.getGold,3e3);const{data:e}=await Object(n["a"])(t);this.detail=e},beforeDestroy(){clearInterval(this.timer)},methods:{getGold(){Object(d["c"])().then(t=>{void 0!=t.data.au&&(this.goldPrice=t.data.au)}).catch(t=>{})},async handlePay(){this.dialogVisible=!1;Object(l["a"])("token");const{data:t}=await Object(d["b"])();t.rest>=300*this.handNumber?0==this.type?Object(d["d"])({billType:0,buyingPoint:this.goldPrice,goodId:this.id,ops:this.handNumber}).then(t=>{200==t.resultCode&&this.$toast.show("Payment success",1500)}).catch(t=>{this.$toast.show("请绑定上级",1500),this.$router.push({path:"/setting"})}):1==this.type&&Object(d["d"])({billType:1,buyingPoint:this.goldPrice,goodId:this.id,ops:this.handNumber}).then(t=>{200==t.resultCode&&this.$toast.show("Payment success",1500)}).catch(t=>{this.$toast.show("请绑定上级",1500),this.$router.push({path:"/setting"})}):this.$toast.show("Insufficient Balance",1500)},handleChange(t){-1==t?this.piece>1&&this.piece--:1==t&&this.piece++,3==this.piece?this.pieceIndex=0:5==this.piece?this.pieceIndex=1:10==this.piece?this.pieceIndex=2:20==this.piece?this.pieceIndex=3:this.pieceIndex=-1},handlePiece(t){this.pieceIndex=t,this.piece=this.pieces[t].p},handleClick(t){this.weightIndex=t},goBack(){this.$router.go(-1)},goTo(){this.$router.push({path:"/cart"})},async addCart(){const{data:t,resultCode:e}=await Object(c["a"])({goodsCount:1,goodsId:this.detail.goodsId});200==e&&r["a"].success("添加成功"),this.$store.dispatch("updateCart")},getDialog(t){1==t?this.type=0:-1==t&&(this.type=1),this.dialogVisible=!0}},computed:{charge(){return this.piece*this.weight[this.weightIndex].w*30},handNumber(){return this.piece*this.weight[this.weightIndex].w/10},count(){return this.$store.state.cartCount}}},p=h,u=(i("8f5d"),i("2877")),g=Object(u["a"])(p,s,a,!1,null,"40098f5a",null);e["default"]=g.exports},c207:function(t,e,i){"use strict";i("cdeb")},c911:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-detail"},[i("el-dialog",{attrs:{title:"Message",visible:t.dialogVisible,width:"90%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"price"},[t._v(" Pre-payment "),i("span",[t._v("₹"+t._s(t.charge-39*t.handNumber))])]),i("div",{staticClass:"price"},[t._v(" Service Fee "),i("span",[t._v("₹"+t._s(39*t.handNumber))])]),i("div",{staticClass:"price"},[t._v(" Order price "),i("span",{staticClass:"gold"},[t._v("₹256")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("Cancel")]),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePay}},[t._v("OK")])],1)]),i("s-header",{attrs:{name:"Smart Buy Gold Bar"}}),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"detail-swipe-wrap"},[i("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-color":"#1baeae"}},t._l(t.detail.goodsCarouselList,(function(e,s){return i("van-swipe-item",{key:s},[i("img",{attrs:{src:t.prefix(e),alt:""}})])})),1)],1),i("div",{staticClass:"product-info"},[i("div",{staticClass:"product-title"},[t._v(t._s(t.detail.goodsName))]),i("div",{staticClass:"product-price"},[i("span",[t._v("₹"+t._s(t.detail.sellingPrice))])])]),i("ul",{staticClass:"product-contents"},[t._m(0),i("li",{staticClass:"content-free"},[t._v(" Real-time price(Rs/gm)： "),i("span",[t._v("₹"+t._s(t.silverPrice))])]),i("li",{staticClass:"content-free"},[t._v(" Pre-payment： "),i("span",[t._v("₹"+t._s(t.charge))])])]),i("div",{staticClass:"content-weight"},[t._v("Gold Weight:")]),i("div",{staticClass:"weight-detail"},t._l(t.weight,(function(e){return i("div",{key:e.id,staticClass:"detail-w",class:t.weightIndex===e.id?"color":"",on:{click:function(i){return t.handleClick(e.id)}}},[t._v(t._s(e.w)+"gm")])})),0),i("div",{staticClass:"content-weight"},[t._v("Volume Purchase:")]),i("div",{staticClass:"weight-detail"},t._l(t.pieces,(function(e){return i("div",{key:e.id,staticClass:"detail-p",class:t.pieceIndex===e.id?"color":"",on:{click:function(i){return t.handlePiece(e.id)}}},[t._v(t._s(e.p)+"  pieces")])})),0),i("div",{staticClass:"content-weight"},[t._v("Quantity:")]),i("div",{staticClass:"quantity"},[i("span",{on:{click:function(e){return t.handleChange(-1)}}},[t._v("一")]),i("span",[t._v(t._s(t.piece))]),i("span",{on:{click:function(e){return t.handleChange(1)}}},[t._v("+")]),t._v("   In stock: 1039 ")]),i("div",{staticClass:"product-intro"},[i("img",{staticClass:"product-content",attrs:{src:t.detail.goodsDetailContent}})])]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"chat-o",text:"Service"}}),i("van-goods-action-icon",{attrs:{icon:"cart-o",info:t.count?t.count:"",text:"Cart"},on:{click:function(e){return t.goTo()}}}),i("van-goods-action-button",{attrs:{type:"warning",text:"Buy now"},on:{click:function(e){return t.getDialog(-1)}}}),i("van-goods-action-button",{staticClass:"gray",attrs:{type:"danger",text:"Smart Buy"},on:{click:function(e){return t.getDialog(1)}}})],1)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"content-free"},[i("img",{attrs:{src:"https://wap.aofygold.in/common/images/freeShip.png",alt:""}}),t._v("  Free shipping in India ")])}],n=i("360d"),c=i("8ee6"),o=i("0eaf"),d=i("25e6"),r=i("d399"),l=i("495f"),h={name:"Sliver",data(){return{id:0,type:-1,dialogVisible:!1,silverPrice:59.6,weightIndex:0,pieceIndex:-1,piece:1,weight:[{id:0,w:500},{id:1,w:2500},{id:2,w:5e3},{id:3,w:25e3},{id:4,w:5e4},{id:5,w:15e4}],pieces:[{id:0,p:3},{id:1,p:5},{id:2,p:10},{id:3,p:20}],detail:{goodsCarouselList:[]}}},components:{sHeader:o["a"]},async mounted(){const{id:t}=this.$route.params;this.id=t,this.timer=setInterval(this.getGold,3e3);const{data:e}=await Object(n["a"])(t);this.detail=e},methods:{getGold(){Object(d["c"])().then(t=>{void 0!=t.data.ag&&(this.silverPrice=t.data.ag)}).catch(t=>{})},async handlePay(){this.dialogVisible=!1;Object(l["a"])("token");const{data:t}=await Object(d["b"])();t.rest>=300*this.handNumber?0==this.type?Object(d["d"])({billType:0,buyingPoint:this.silverPrice,goodId:this.id,ops:this.handNumber}).then(t=>{200==t.resultCode&&this.$toast.show("Payment success",1500)}).catch(t=>{this.$toast.show("请绑定上级",1500),this.$router.push({path:"/setting"})}):1==this.type&&Object(d["d"])({billType:1,buyingPoint:this.silverPrice,goodId:this.id,ops:this.handNumber}).then(t=>{200==t.resultCode&&this.$toast.show("Payment success",1500)}).catch(t=>{this.$toast.show("请绑定上级",1500),this.$router.push({path:"/setting"})}):this.$toast.show("Insufficient Balance",1500)},handleChange(t){-1==t?this.piece>1&&this.piece--:1==t&&this.piece++,3==this.piece?this.pieceIndex=0:5==this.piece?this.pieceIndex=1:10==this.piece?this.pieceIndex=2:20==this.piece?this.pieceIndex=3:this.pieceIndex=-1},handlePiece(t){this.pieceIndex=t,this.piece=this.pieces[t].p},handleClick(t){this.weightIndex=t},goBack(){this.$router.go(-1)},goTo(){this.$router.push({path:"/cart"})},async addCart(){const{data:t,resultCode:e}=await Object(c["a"])({goodsCount:1,goodsId:this.detail.goodsId});200==e&&r["a"].success("添加成功"),this.$store.dispatch("updateCart")},async goToCart(){const{data:t,resultCode:e}=await Object(c["a"])({goodsCount:1,goodsId:this.detail.goodsId});this.$store.dispatch("updateCart"),this.$router.push({path:"/cart"})},getDialog(t){1==t?this.type=0:-1==t&&(this.type=1),this.dialogVisible=!0}},computed:{charge(){return 300*this.handNumber},handNumber(){return this.piece*this.weight[this.weightIndex].w/500},count(){return this.$store.state.cartCount}}},p=h,u=(i("c207"),i("2877")),g=Object(u["a"])(p,s,a,!1,null,"ec2e1d36",null);e["default"]=g.exports},cdeb:function(t,e,i){},e9f6:function(t,e,i){}}]);
//# sourceMappingURL=product.0906a273.js.map