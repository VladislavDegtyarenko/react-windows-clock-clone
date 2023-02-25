import{r as a}from"./react.e158b38e.js";import{N as h}from"./react-router-dom.6bc9e3f4.js";import{j as e,B as v,a as n}from"./AlarmApp.jsx.16154191.js";import{m as w,n as f,o as N,N as x}from"./@fluentui.dcb38d1f.js";import"./react-router.62beec0d.js";import"./@remix-run.24163fd1.js";import"./nanoid.1d085756.js";import"./framer-motion.5a75affc.js";import"./hey-listen.a7ce0d1d.js";import"./@griffel.2aa48445.js";import"./@emotion.6322e2ae.js";import"./keyborg.e7b8ce31.js";import"./@floating-ui.188d4102.js";import"./scheduler.5a2677c3.js";import"./tslib.9ddfe73c.js";import"./use-disposable.6e0276d6.js";import"./react-dom.23e609b5.js";const S="_sidebarWrapper_1gba5_1",C="_overlay_1gba5_19",$="_header_1gba5_37",y="_globalTitle_1gba5_55",z="_sidebar_1gba5_1",A="_sidebar__link_1gba5_157",B="_sidebar__link_burger_1gba5_191";var i={sidebarWrapper:S,overlay:C,header:$,globalTitle:y,sidebar:z,"sidebar__list-item":"_sidebar__list-item_1gba5_131",sidebar__link:A,sidebar__link_burger:B,"sidebar__link_burger--animation":"_sidebar__link_burger--animation_1gba5_203","burger-click":"_burger-click_1gba5_1","sidebar__link--active":"_sidebar__link--active_1gba5_237","sidebar--opened":"_sidebar--opened_1gba5_329"};function T({children:s}){return e("li",{className:i["sidebar__list-item"],children:s})}var W="/assets/clock.99abf0a5.svg";const E=()=>e("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"32.000000pt",height:"32.000000pt",viewBox:"0 0 512.000000 512.000000",preserveAspectRatio:"xMidYMid meet",children:e("g",{transform:"translate(0.000000,512.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e("path",{d:`M1055 4626 c-94 -41 -124 -168 -58 -247 40 -47 79 -59 188 -59 l95 0
0 -359 c0 -397 7 -466 60 -614 60 -163 187 -335 347 -468 105 -87 286 -207
406 -269 48 -25 87 -47 87 -50 0 -3 -39 -25 -87 -50 -120 -62 -301 -182 -406
-269 -160 -133 -287 -305 -347 -468 -53 -148 -60 -217 -60 -613 l0 -358 -109
-4 c-92 -2 -114 -6 -137 -24 -53 -39 -69 -71 -69 -134 0 -63 16 -95 69 -134
27 -21 28 -21 1526 -21 1498 0 1499 0 1526 21 53 39 69 71 69 134 0 63 -16 95
-69 134 -23 18 -45 22 -136 24 l-108 4 -4 396 c-5 447 -8 468 -89 640 -116
250 -383 494 -735 674 -46 24 -84 45 -84 48 0 3 38 24 84 48 356 182 622 427
741 684 74 161 78 188 82 630 l5 396 108 4 c91 2 113 6 136 24 53 39 69 71 69
134 0 63 -16 95 -69 134 -27 21 -30 21 -1514 23 -1221 2 -1492 0 -1517 -11z
m2465 -659 c0 -319 -2 -361 -20 -431 -50 -197 -181 -356 -427 -520 -114 -75
-318 -188 -438 -241 l-84 -38 -173 86 c-395 196 -613 374 -713 582 -60 123
-65 167 -65 563 l0 352 960 0 960 0 0 -353z m-836 -1645 c497 -238 746 -463
816 -738 18 -70 20 -112 20 -431 l0 -353 -960 0 -960 0 0 353 c0 393 6 441 63
562 97 202 313 381 697 573 101 50 188 92 193 92 5 0 64 -26 131 -58z`})})});function V(){const s=[{name:"Timer",icon:e(E,{}),link:"/"},{name:"Alarm",icon:e(v,{}),link:"/alarm"},{name:"Stopwatch",icon:e(w,{}),link:"/stopwatch"},{name:"World clock",icon:e(f,{}),link:"/worldclock"},{name:"Settings",icon:e(N,{}),link:"/settings"}],[t,o]=a.exports.useState(!1),[b,c]=a.exports.useState(!1),[m,_]=a.exports.useState(null);a.exports.useEffect(()=>(_(window.innerHeight),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)),[]);const d=()=>{o(!1),_(window.innerHeight)},l=()=>{o(r=>!r)},g=()=>{c(!0)};return n("nav",{className:i.sidebarWrapper,children:[t?e("div",{className:i.overlay,onClick:l}):null,e("div",{className:`${i.sidebar} ${t?i["sidebar--opened"]:""}`,style:{"--windowHeight":`${m}px`},children:s.map(({name:r,icon:p,link:k})=>e(T,{children:n(h,{to:k,className:({isActive:u})=>`${i.sidebar__link} ${u?i["sidebar__link--active"]:""}`,onClick:t?l:null,children:[p,e("span",{children:r})]})},r))}),n("header",{className:i.header,children:[e("button",{onClick:()=>{l(),g()},className:`${i.sidebar__link} ${i.sidebar__link_burger} `,onAnimationEnd:()=>c(!1),children:e(x,{className:b?i["sidebar__link_burger--animation"]:""})}),n("h1",{className:i.globalTitle,children:[e("img",{src:W}),"Clock"]})]})]})}export{V as default};