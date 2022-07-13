(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{14634:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/mint",function(){return c(56296)}])},90304:function(d,b,a){"use strict";a.d(b,{CU:function(){return h},m1:function(){return f}});var e=a(96257),c=a(15503),f="originals",g=(0,c.ZF)({apiKey:"AIzaSyA149SZLk5ja0n4fwJYXIGxutaEfsIoiUE",authDomain:"community-nfts.firebaseapp.com",projectId:"community-nfts",storageBucket:"community-nfts.appspot.com",messagingSenderId:"775740160154",appId:"1:775740160154:web:fcf6fbf183fcc321818723"});function h(){return(0,e.ad)(g)}},56296:function(g,b,a){"use strict";a.r(b),a.d(b,{default:function(){return z}});var h=a(47568),i=a(41799),j=a(69396),d=a(34051),k=a.n(d),l=a(85893),e=a(41664),m=a.n(e),f=a(94184),n=a.n(f),o=a(96257),p=a(87536),q=a(99534);function c(a,b){return function(c){var g=c.hint,h=c.name,j=c.label,d=c.inputId,o=c.className,k=c.wrapInput,r=c.registerOptions,s=c.showOptionalLabel,u=(0,q.Z)(c,["hint","name","label","inputId","className","wrapInput","registerOptions","showOptionalLabel"]),e=(0,p.Gc)(),v=e.register,w=e.formState,x=e.getFieldState;w.errors;var f=x(h).error,y=(0,i.Z)({className:n()("input-bordered",b,{"input-error":!!f})},v(h,r),u),m=a(y);return(0,l.jsxs)("div",{className:n()("form-control",o),children:[(0,l.jsxs)("label",{htmlFor:d,className:"label",children:[j?(0,l.jsx)("span",{className:"label-text",children:j}):null,s?(0,l.jsx)("span",{className:"label-text",children:"(Optional)"}):null]}),k?(0,l.jsx)("label",{htmlFor:d,className:"input-group",children:k(m)}):m,f?(0,l.jsx)("label",{htmlFor:d,className:"label",children:(0,l.jsx)("span",{className:"label-text text-red-500",children:t(f)})}):g?(0,l.jsx)("label",{htmlFor:d,className:"label",children:(0,l.jsx)("span",{className:"label-text text-base-content text-xs",children:g})}):null]})}}var r=c(function(a){return(0,l.jsx)("input",(0,i.Z)({},a))},"input"),s=c(function(a){return(0,l.jsx)("textarea",(0,i.Z)({},a))},"textarea");function t(a){return a.message?a.message:a.message||"Invalid input"}var u=a(69890),v=a(90304),w=a(11163),x=a(23567),y=a(67294),z=function(){var f=(0,v.CU)(),g=(0,x.ZO)(),q=(0,w.useRouter)(),a=(0,p.cI)({mode:"all"}),t=(0,u.Yk)(),b=(0,y.useState)(!1),d=b[0],z=b[1],A=a.handleSubmit,e=a.formState,c=e.isSubmitting;return(0,l.jsxs)("div",{className:"m-auto w-full max-w-3xl",children:[(0,l.jsx)("div",{className:"mt-12 prose",children:(0,l.jsx)("h1",{children:"Mint new original"})}),(0,l.jsx)(p.RV,(0,j.Z)((0,i.Z)({},a),{children:(0,l.jsxs)("form",{action:"",className:"mt-4",onSubmit:function(a){var b;A((b=(0,h.Z)(k().mark(function a(b){var c;return k().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.mintNFTCollection({name:b.name,description:b.description,tokenPrefix:b.symbol});case 2:return c=a.sent.collectionId,a.next=5,(0,o.ET)((0,o.hJ)(f,v.m1),(0,j.Z)((0,i.Z)({},b),{owner:t.account.address,collectionId:c}));case 5:q.push({pathname:"/collections/view",query:{cid:c}});case 6:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}))(a).catch(function(a){console.error("ERROR",a),z(!0)})},children:[(0,l.jsx)(r,{name:"name",label:"Name",placeholder:"e.g. My Great NFT Collection",autoComplete:"off",registerOptions:{required:{value:!0,message:"A name must be provided"}}}),(0,l.jsx)(r,{name:"symbol",label:"Symbol",className:"mt-2",placeholder:"e.g. BTC",autoComplete:"off",registerOptions:{required:{value:!0,message:"A symbol must be provided"},maxLength:{value:4,message:"Maximum of 4 characters"}}}),(0,l.jsx)(s,{name:"description",label:"Description",className:"mt-2 mb-12",showOptionalLabel:!0}),d?(0,l.jsx)("div",{className:"mt-4 alert alert-error",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,l.jsx)("span",{children:"Something unexpected happened while submitting the form, please try again later"})]})}):null,(0,l.jsxs)("div",{className:"mt-4 flex flex-row justify-end gap-4",children:[(0,l.jsx)(m(),{href:"/collections",children:(0,l.jsx)("a",{className:"btn btn-ghost",children:"Back to Collections"})}),(0,l.jsx)("button",{type:"submit",className:n()("btn btn-primary",{loading:c}),children:c?"Minting":"Mint Collection"})]})]})}))]})}}},function(a){a.O(0,[16,2,536,774,888,179],function(){var b;return a(a.s=14634)}),_N_E=a.O()}])