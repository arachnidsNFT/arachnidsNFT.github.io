(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(t,e){},255:function(t,e){},273:function(t,e){},275:function(t,e){},294:function(t,e){},295:function(t,e){},358:function(t,e){},360:function(t,e){},393:function(t,e){},395:function(t,e){},396:function(t,e){},401:function(t,e){},403:function(t,e){},409:function(t,e){},411:function(t,e){},424:function(t,e){},436:function(t,e){},439:function(t,e){},444:function(t,e){},452:function(t,e){},461:function(t,e){},463:function(t,e){},533:function(t,e,n){},534:function(t,e,n){"use strict";n.r(e);var c,r,a,o,i,s,l,d,u,j,p,x,h,b,g,O,f=n(1),y=n(85),m=n.n(y),v=n(16),C=n.n(v),A=n(43),S=n(69),w=n(14),E=n(58),T=n(68),_=n.n(T),N=n(220),k=n.n(N),M=n(70),D=n(221),I=n(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:e.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},P=Object(M.b)({blockchain:L,data:U}),W=[D.a],F=Object(M.c)(M.a.apply(void 0,W)),B=Object(M.d)(P,F),H=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},Y=function(){return function(){var t=Object(A.a)(C.a.mark((function t(e){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(H("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},z=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var e=Object(A.a)(C.a.mark((function e(n){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(Y());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},X=n(15),q=X.a.div(c||(c=Object(w.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),Q=X.a.div(r||(r=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=X.a.div(a||(a=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=X.a.div(o||(o=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=X.a.div(i||(i=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=X.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var e=t.flex;return e||0}),(function(t){var e=t.fd;return e||"column"}),(function(t){var e=t.jc;return e||"flex-start"}),(function(t){var e=t.ai;return e||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var e=t.image;return e?"url(".concat(e,")"):"none"})),tt=X.a.p(l||(l=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),et=(X.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),nt=(X.a.div(j||(j=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(3)),ct=X.a.button(p||(p=Object(w.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=X.a.button(x||(x=Object(w.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),at=X.a.div(h||(h=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=X.a.img(b||(b=Object(w.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n  margin-top: 1em;\n"]))),it=X.a.img(g||(g=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),st=X.a.a(O||(O=Object(w.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var lt=function(){var t,e,n=Object(E.b)(),c=Object(E.c)((function(t){return t.blockchain})),r=Object(E.c)((function(t){return t.data})),a=Object(f.useState)(!1),o=Object(S.a)(a,2),i=o[0],s=o[1],l=Object(f.useState)("Click buy to call out your Arachnids."),d=Object(S.a)(l,2),u=d[0],j=d[1],p=Object(f.useState)(1),x=Object(S.a)(p,2),h=x[0],b=x[1],g=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1,LAUNCH_DATE:""}),O=Object(S.a)(g,2),y=O[0],m=O[1],v=function(){""!==c.account&&null!==c.smartContract&&n(Y(c.account))},w=function(){var t=Object(A.a)(C.a.mark((function t(){var e,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,m(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.useEffect)((function(){w()}),[]),Object(f.useEffect)((function(){v()}),[c.account]),Object(nt.jsx)(q,{children:Object(nt.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(nt.jsx)(ot,{alt:"logo",src:"/config/images/logo.png"}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(at,{flex:1,style:{padding:24},test:!0,children:[Object(nt.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(it,{alt:"example",src:"/config/images/example.gif"})}),Object(nt.jsx)(Z,{}),Object(nt.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)",paddingBottom:"1em",maxWidth:"450px"},children:[Object(nt.jsx)("img",{style:{marginTop:"1em",maxWidth:"80%"},src:"/arachnids.png",alt:"Poisonus 3"}),Object(nt.jsxs)("p",{style:{marginTop:"1em"},children:[Object(nt.jsx)(st,{target:"_blank",href:"https://t.me/Cryptogesic",children:"Cryptogesic RX"})," is pleased to announce the release of ARACHNIDS! High quality eight legged spider collectibles."]})]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)",paddingBottom:"1em",maxWidth:"450px"},children:Object(nt.jsx)(st,{target:"_blank",href:"https://arachnid-rarity.vercel.app/",children:"Arachnid Rarity Rank"})}),Object(nt.jsxs)(tt,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(nt.jsx)(st,{target:"_blank",href:y.SCAN_LINK,children:(t=y.CONTRACT_ADDRESS,e=15,t.length>e?"".concat(t.substring(0,e),"..."):t)})}),Object(nt.jsx)(J,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(st,{target:"_blank",href:y.MARKETPLACE_LINK,children:Object(nt.jsx)("img",{style:{width:"192px"},src:"/oasis_logo.svg",alt:"Oasis"})})]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(nt.jsx)(Q,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(nt.jsx)(J,{}),""===c.account||null===c.smartContract?Object(nt.jsxs)($,{ai:"center",jc:"center",children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(nt.jsx)(J,{}),Object(nt.jsx)(ct,{onClick:function(t){t.preventDefault(),n(function(){var t=Object(A.a)(C.a.mark((function t(e){var n,c,r,a,o,i,s,l,d;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return _.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(d=new _.a(c,a.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(t){e(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(z("Change network to ".concat(a.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(z("Something went wrong."));case 31:t.next=34;break;case 33:e(z("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(J,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(nt.jsxs)(nt.Fragment,{children:[Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(nt.jsx)(V,{}),Object(nt.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(nt.jsx)(rt,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=h-1;t<1&&(t=1),b(t)}()},children:"-"}),Object(nt.jsx)(V,{}),Object(nt.jsx)(et,{style:{textAlign:"center",color:"var(--accent-text)"},children:h}),Object(nt.jsx)(V,{}),Object(nt.jsx)(rt,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=h+1;t>5&&(t=5),b(t)}()},children:"+"})]}),Object(nt.jsx)(J,{}),Object(nt.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(nt.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=y.WEI_COST,e=y.GAS_LIMIT,r=String(t*h),a=String(e*h);console.log("Cost: ",r),console.log("Gas limit: ",a),j("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(h).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(t){console.log(t),j("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),j("WOW, the ".concat(y.NFT_NAME," is yours! go visit oasis.cash to view it!")),s(!1),n(Y(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(nt.jsx)(V,{})]}),Object(nt.jsx)(Z,{}),Object(nt.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(nt.jsx)(it,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(nt.jsx)(V,{}),Object(nt.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(nt.jsx)(J,{}),Object(nt.jsxs)(et,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully call out your Arachnids. We recommend that you don't lower the gas limit."]})]})]})})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};n(533);m.a.render(Object(nt.jsx)(E.a,{store:B,children:Object(nt.jsx)(lt,{})}),document.getElementById("root")),dt()}},[[534,1,2]]]);
//# sourceMappingURL=main.d9762e88.chunk.js.map