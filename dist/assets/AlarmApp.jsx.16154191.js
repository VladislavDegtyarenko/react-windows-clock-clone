import{j as F,r as l}from"./react.e158b38e.js";import{n as le}from"./nanoid.1d085756.js";import{B as M,D as X,S as ce,a as ie,O as V,P as de,b as ue,M as me,c as G,A as pe,d as fe,E as _e,e as he}from"./@fluentui.dcb38d1f.js";import{m as ye}from"./framer-motion.5a75affc.js";const e=F.exports.jsx,x=F.exports.jsxs,K=F.exports.Fragment,Z=l.exports.createContext(null),Dt=({children:a})=>{const[n,t]=l.exports.useState(null),i={modalContent:n,openModal:o=>{t(o)},closeModal:()=>{t(null)}};return e(Z.Provider,{value:i,children:a})};var ve="/assets/01-Chimes-64kbps.5a8f0386.mp3",ge="/assets/02-Xylophone-64kbps.a8f3f32e.mp3",xe="/assets/03-Chords-64kbps.4cf41c69.mp3",Ae="/assets/04-Tap-64kbps.42075e29.mp3",Ce="/assets/05-Jingle-64kbps.6efe0773.mp3",ke="/assets/06-Transition-64kbps.2b6f603c.mp3",be="/assets/07-Descending-64kbps.e3d9e08b.mp3",Se="/assets/08-Bounce-64kbps.3aeea230.mp3",Ee="/assets/09-Echo-64kbps.e1daa0b8.mp3",we="/assets/10-Ascending-64kbps.1d0e48b8.mp3";const Q=l.exports.createContext(null),Rt=({children:a})=>{const n=[{title:"Chimes",src:ve},{title:"Xylophone",src:ge},{title:"Chords",src:xe},{title:"Tap",src:Ae},{title:"Jingle",src:Ce},{title:"Transition",src:ke},{title:"Descending",src:be},{title:"Bounce",src:Se},{title:"Echo",src:Ee},{title:"Ascending",src:we}],t=l.exports.useRef();l.exports.useEffect(()=>{t.current.addEventListener("ended",()=>{g()})},[]);const[r,s]=l.exports.useState(null),i=({soundTitle:_,loop:m})=>{s(_);const h=n.filter(f=>f.title===_)[0].src;t.current.src=h,t.current.currentTime=0,t.current.play(),m?t.current.setAttribute("loop",null):t.current.removeAttribute("loop",null)},o=.015,u=5,p=(_=.25,m=1,h)=>{console.time("fade in time");const f=setInterval(()=>{if(_=Math.floor((_+o)*1e3)/1e3,_>=m){clearInterval(f),h&&h(),console.timeEnd("fade in time");return}t.current.volume=_},u)},d=(_,m=1,h=0)=>{const f=setInterval(()=>{if(m=Math.floor((m-o)*100)/100,m<=h){clearInterval(f),_&&_();return}t.current.volume=m},u)},A=()=>{t.current.pause()},g=()=>{A(),s(null),t.current.src=null,console.log("pause")},b={soundList:n,currentAudioTitle:r,play:_=>{t.current.volume=0,i(_),p()},pause:A,stop:()=>{d(g)}};return x(Q.Provider,{value:b,children:[e("audio",{src:null,ref:t}),a]})},$e="_customButton_1y6nf_1";var De={customButton:$e};function j({children:a,onClick:n,icon:t,appearance:r,shape:s,size:i,refs:o,className:u,disabled:p,onMouseDown:d,onTouchStart:A,onContextMenu:g}){return e(M,{onClick:n,onMouseDown:d,onTouchStart:A,onContextMenu:g,icon:t,appearance:r,shape:s,size:i,disabled:p,ref:o,className:`${De.customButton} ${u}`,children:a})}const Re=a=>{const n=l.exports.useRef(),t=l.exports.useRef(!1),r=l.exports.useRef(!1),[s,i]=l.exports.useState(0);t.current&&(r.current=!0),l.exports.useEffect(()=>(t.current||(n.current=a(),t.current=!0),i(o=>o+1),()=>{!r.current||n.current&&n.current()}),[])},Ne="_loadingOverlay_10u5w_1";var L={loadingOverlay:Ne,"lds-ring":"_lds-ring_10u5w_27"};const ee=()=>e("div",{className:L.loadingOverlay,children:x("div",{className:L["lds-ring"],children:[e("div",{}),e("div",{}),e("div",{}),e("div",{})]})}),Me="_modal_17k1y_1",Pe="_modal__inner_17k1y_29";var Y={modal:Me,modal__inner:Pe,"modal-delete":"_modal-delete_17k1y_79"};function Te({title:a,children:n,onDelete:t,onSave:r,onCancel:s}){const i=l.exports.useRef(),o=l.exports.useRef(),u=l.exports.useRef(),p=d=>document.activeElement===d;return Re(()=>{i.current.addEventListener("keydown",d=>{var k,b;const A=d.key==="Tab"||d.keyCode===9,g=d.key==="Enter"||d.keyCode===13,y=d.key==="Escape"||d.keyCode===27;!A&&!g&&!y||(g&&r(),y&&closeModal(),d.shiftKey?p(o.current)&&(d.preventDefault(),(k=u.current)==null||k.focus()):p(u.current)&&(d.preventDefault(),(b=o.current)==null||b.focus()))})}),e("div",{className:Y["modal-content"],ref:i,children:x(l.exports.Suspense,{fallback:e(ee,{}),children:[x("header",{children:[e("h3",{children:a}),t&&e(j,{appearance:"subtle",shape:"rounded",className:Y["modal-delete"],onClick:t,refs:o,children:e(X,{})})]}),e("main",{children:n||"No Content Provided"}),x("footer",{children:[e(j,{onClick:r,icon:e(ce,{}),appearance:"primary",children:"Save"}),e(j,{onClick:s,icon:e(ie,{}),refs:u,children:"Cancel"})]})]})})}const Oe="modulepreload",q={},Ie="/",P=function(n,t){return!t||t.length===0?n():Promise.all(t.map(r=>{if(r=`${Ie}${r}`,r in q)return;q[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Oe,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((u,p)=>{o.addEventListener("load",u),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())},ze="_option_1is2c_1",je="_play_1is2c_49";var W={option:ze,play:je};function Fe({playSound:a,stopSound:n,option:t,currentAudioTitle:r}){const s=r===t,i=o=>{o.stopPropagation(),s?n():a()};return e(K,{children:x(V,{className:W.option,text:t,children:[e("button",{className:W.play,onClick:i,children:s?e(de,{}):e(ue,{})}),e("span",{children:t})]})})}const Be="_dropdown_rjqyf_1",Le="_dropdown__icon_rjqyf_11",Ye="_dropdown__menu_rjqyf_39";var $={dropdown:Be,dropdown__icon:Le,dropdown__menu:Ye};const qe="Echo";function We({soundTitle:a,refs:n}){const{soundList:t,play:r,stop:s,currentAudioTitle:i}=l.exports.useContext(Q);return console.log(`currentAudioTitle: ${i}`),x("div",{className:$.dropdown,children:[e("div",{className:$.dropdown__icon,children:e(me,{})}),e(G,{className:$.dropdown__menu,defaultSelectedOptions:[a||qe],ref:n,children:t.map(o=>e(Fe,{option:o.title,id:o.title,currentAudioTitle:i,playSound:()=>r({soundTitle:o.title,loop:!1}),stopSound:s},o.title))})]})}const He="Disabled";function Je({snooze:a,refs:n}){const t=[{id:0,name:"Disabled"},{id:5,name:"5 minutes"},{id:10,name:"10 minutes"},{id:20,name:"20 minutes"},{id:30,name:"30 minutes"},{id:60,name:"1 hour"}];return x("div",{className:$.dropdown,children:[e("div",{className:$.dropdown__icon,children:e(pe,{})}),e(G,{className:$.dropdown__menu,defaultSelectedOptions:[a||He],ref:n,children:t.map(r=>e(V,{children:r.name},r.id))})]})}const Ue=l.exports.lazy(()=>P(()=>Promise.resolve().then(function(){return rt}),void 0)),Xe=l.exports.lazy(()=>P(()=>import("./TimerApp.jsx.880e4f8b.js").then(function(a){return a.i}),["assets/TimerApp.jsx.880e4f8b.js","assets/TimerApp.jsx.ee2299fd.css","assets/react.e158b38e.js","assets/nanoid.1d085756.js","assets/@fluentui.dcb38d1f.js","assets/@griffel.2aa48445.js","assets/@emotion.6322e2ae.js","assets/keyborg.e7b8ce31.js","assets/@floating-ui.188d4102.js","assets/scheduler.5a2677c3.js","assets/tslib.9ddfe73c.js","assets/use-disposable.6e0276d6.js","assets/react-dom.23e609b5.js","assets/StopwatchApp.jsx.cdd8706c.js","assets/StopwatchApp.jsx.2405cdb4.css"])),Ve=l.exports.lazy(()=>P(()=>import("./TimerApp.jsx.880e4f8b.js").then(function(a){return a.a}),["assets/TimerApp.jsx.880e4f8b.js","assets/TimerApp.jsx.ee2299fd.css","assets/react.e158b38e.js","assets/nanoid.1d085756.js","assets/@fluentui.dcb38d1f.js","assets/@griffel.2aa48445.js","assets/@emotion.6322e2ae.js","assets/keyborg.e7b8ce31.js","assets/@floating-ui.188d4102.js","assets/scheduler.5a2677c3.js","assets/tslib.9ddfe73c.js","assets/use-disposable.6e0276d6.js","assets/react-dom.23e609b5.js","assets/StopwatchApp.jsx.cdd8706c.js","assets/StopwatchApp.jsx.2405cdb4.css"])),Ge=l.exports.lazy(()=>P(()=>import("./index.ff3529d1.js"),["assets/index.ff3529d1.js","assets/index.5c2de11b.css","assets/@fluentui.dcb38d1f.js","assets/react.e158b38e.js","assets/@griffel.2aa48445.js","assets/@emotion.6322e2ae.js","assets/keyborg.e7b8ce31.js","assets/@floating-ui.188d4102.js","assets/scheduler.5a2677c3.js","assets/tslib.9ddfe73c.js","assets/use-disposable.6e0276d6.js","assets/react-dom.23e609b5.js","assets/nanoid.1d085756.js","assets/framer-motion.5a75affc.js","assets/hey-listen.a7ce0d1d.js"]));function H({id:a,title:n,name:t="Alarm",time:r="00:00",enabled:s,repeatDays:i,soundTitle:o,snooze:u,onSave:p,onCancel:d,deleteTimer:A}){const g=l.exports.useRef(),y=l.exports.useRef(),k=l.exports.useRef(),b=l.exports.useRef(),_=l.exports.useRef([]),m=l.exports.useRef(),h=l.exports.useRef(),f={hours:g,minutes:y,ampm:k},[S,v]=r.split(":"),C=S>11,E=c=>c<10?"0"+c:c,T=c=>c<1?12:c>12?c%12:+c,O=({hh:c,mm:I,isPm:R})=>{const z=!R;return c=+c,c===12&&z?c="00":c<12&&R?c=`${c+12}`:c=E(c),`${c}:${I}`},D=c=>({sunday:c.current[0].checked,monday:c.current[1].checked,tuesday:c.current[2].checked,wednesday:c.current[3].checked,thursday:c.current[4].checked,friday:c.current[5].checked,saturday:c.current[6].checked}),re=[{id:"hours",value:T(S),minValue:1,maxValue:12},{id:"minutes",value:+v,minValue:0,maxValue:59},{id:"ampm",checked:C}],se=()=>{const c=g.current.value,I=y.current.value,R=k.current.checked,z=D(_);p({id:a,name:b.current.value,time:O({hh:c,mm:I,isPm:R}),repeatDays:z,soundTitle:m.current.textContent,snooze:h.current.textContent})};l.exports.useEffect(()=>{var c;(c=g.current)==null||c.focus()},[]);const oe=!0;return e(Te,{title:n,onDelete:()=>A(a),onSave:se,onCancel:d,children:x(l.exports.Suspense,{fallback:e(ee,{}),children:[e(Xe,{time:r,timeRef:f,timeInputs:re}),e(Ve,{id:"Alarm Name",text:t,inputRef:b}),x("div",{children:[e(Ge,{checked:oe,label:"Repeat alarm"}),e(Ue,{repeatDays:i,repeatDayRefs:_,enabled:s})]}),e(We,{soundTitle:o,refs:m}),e(Je,{snooze:u,refs:h})]})})}const te=l.exports.createContext(null),Ke=[{id:1,enabled:!0,name:"Good morning",time:"07:00",repeatDays:{sunday:!0,monday:!1,tuesday:!1,wednesday:!0,thursday:!1,friday:!0,saturday:!1},soundTitle:"Xylophone",snooze:"5 minutes"},{id:2,enabled:!1,name:"Gym",time:"18:00",repeatDays:{sunday:!1,monday:!0,tuesday:!1,wednesday:!0,thursday:!1,friday:!1,saturday:!0}},{id:3,enabled:!1,name:"\u{1F4DD} Daily Notes",time:"22:05",repeatDays:{sunday:!1,monday:!0,tuesday:!0,wednesday:!0,thursday:!0,friday:!0,saturday:!0}}],Nt=({children:a})=>{const[n,t]=l.exports.useState(JSON.parse(localStorage.getItem("alarms"))||Ke),{openModal:r,closeModal:s}=l.exports.useContext(Z),[i,o]=l.exports.useState(!1);l.exports.useEffect(()=>{localStorage.setItem("alarms",JSON.stringify(n)),n.length===0&&o(!1)},[n]);const u=m=>{t(h=>h.map(f=>f.id===m?{...f,enabled:!f.enabled}:f))},p=({id:m,name:h,time:f,repeatDays:S})=>{t(v=>v.map(C=>C.id===m?{...C,name:h,time:f,repeatDays:S}:C)),s()},d=m=>{t(h=>h.filter(f=>f.id!==m)),s()},A=({id:m,time:h,name:f,enabled:S,repeatDays:v,soundTitle:C,snooze:E})=>{r(e(H,{id:m,title:"Edit alarm",time:h,name:f,enabled:S,repeatDays:v,soundTitle:C,snooze:E,onSave:p,onCancel:s}))},g=()=>{r(e(H,{title:"Add new alarm",repeatDays:{sunday:!1,monday:!1,tuesday:!1,wednesday:!1,thursday:!1,friday:!1,saturday:!1},onSave:y,onCancel:s}))},y=({name:m,time:h,repeatDays:f,soundTitle:S,snooze:v})=>{t(C=>[...C,{id:le(),enabled:!0,name:m,time:h,repeatDays:f,soundTitle:S,snooze:v}]),s()},_={alarms:n,alarmActions:{toggleAlarm:u,editAlarm:A,closeModal:s,saveAlarmChanges:p,addNewAlarm:y,deleteAlarm:d,openAddNewAlarmModal:g,toggleEditAlarms:()=>o(m=>!m)},editingState:i};return e(te.Provider,{value:_,children:a})},Ze="_checkbox_h6dcz_1",Qe="_active_h6dcz_51",et="_disabled_h6dcz_61",tt="_isModal_h6dcz_81";var N={checkbox:Ze,active:Qe,disabled:et,isModal:tt};function nt({id:a,checked:n,label:t,enabled:r,isModal:s,refs:i}){const[o,u]=l.exports.useState(n),p=()=>{u(d=>!d)};return l.exports.useEffect(()=>{u(n)},[n]),x("label",{htmlFor:a,className:`${N.checkbox}
            ${o?N.active:""}
            ${!r&&!s?N.disabled:""}
            ${s?N.isModal:""}`,onClick:d=>d.stopPropagation(),children:[e("input",{type:"checkbox",name:a,id:a,checked:o,onChange:p,ref:i}),e("span",{children:t})]})}var J={"alarm-repeat-days":"_alarm-repeat-days_hmoxa_1","read-only":"_read-only_hmoxa_25"};const at={sunday:"Su",monday:"M",tuesday:"Tu",wednesday:"We",thursday:"Th",friday:"Fri",saturday:"Sa"};function ne({repeatDays:a,enabled:n,repeatDayRefs:t,noInteraction:r=!1}){const s=!r,i=u=>Object.entries(at).find(p=>p[0]===u)[1],o=Object.entries(a);return e("ul",{className:`${J["alarm-repeat-days"]} ${s?"":J["read-only"]}`,children:o.map(([u,p],d)=>e("li",{children:e(nt,{id:u,label:i(u),enabled:n,checked:p,isModal:s,refs:t?A=>t.current[d]=A:null})},u))})}var rt=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));const st="_appContainer_1et8t_1",ot="_cardsContainer_1et8t_23";var B={appContainer:st,cardsContainer:ot};function lt({children:a,motionDivKey:n}){return e(ye.div,{className:B.appContainer,initial:{opacity:.5,transform:"translateY(1em)"},animate:{opacity:1,transform:"translateY(0em)"},transition:{duration:.15},exit:{opacity:.5,transform:"translateY(1em)"},children:a},n)}function ct({children:a,className:n}){return e("div",{className:`${B.container||""} ${n||""}`,children:a})}function it({children:a}){return e(ct,{className:B.cardsContainer,children:a})}const dt="_card_vk6qk_1";var U={card:dt,"card--hover":"_card--hover_vk6qk_27"};function ut({children:a,className:n,onClick:t,refs:r,disableHover:s}){return e("div",{className:`${U.card} ${n} ${s?"":U["card--hover"]}`,onClick:t,ref:r,children:a})}var mt={"app-main-btns-container":"_app-main-btns-container_ar8ml_1"};function pt(a){return e("div",{className:mt["app-main-btns-container"],children:a.children})}var ft={"no-cards":"_no-cards_19t1j_1"};function _t({icon:a,title:n,description:t}){return x("div",{className:ft["no-cards"],children:[a,e("h2",{children:n}),e("p",{children:t})]})}const ae=()=>e("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"16.000000pt",height:"16.000000pt",viewBox:"0 0 48.000000 48.000000",preserveAspectRatio:"xMidYMid meet",children:e("g",{transform:"translate(0.000000,48.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:e("path",{d:`M167 418 c-48 -28 -77 -87 -77 -156 0 -28 -7 -67 -17 -86 -22 -48 -7
-66 58 -66 39 0 49 -4 54 -20 15 -47 86 -50 107 -5 10 21 18 25 58 25 64 0 79
18 57 66 -10 20 -17 60 -17 92 -1 134 -115 212 -223 150z m156 -47 c26 -26 31
-39 36 -103 4 -40 12 -83 19 -95 7 -12 12 -24 12 -27 0 -3 -67 -6 -150 -6 -82
0 -150 3 -150 6 0 3 5 15 12 27 7 12 15 55 18 95 7 75 28 112 75 133 37 16 96
3 128 -30z m-55 -273 c-6 -17 -50 -17 -55 0 -3 8 6 12 27 12 21 0 30 -4 28
-12z`})})}),ht="_deadline_1f9ra_1";var yt={deadline:ht};function vt({type:a="short",time:n,repeatDays:t}){const r=new Date,s=r.getDay(),[i,o]=n.split(":");let u=Object.entries(t).reduce((v,[C,E],T)=>{const O=(7+T-s)%7,D=new Date(r.getFullYear(),r.getMonth(),r.getDate()+O,i,o,0);return E&&D>r?[...v,D]:v},[]);const d=(()=>u.length>0?u.reduce((v,C)=>v<C?v:C):new Date(r.getFullYear(),r.getMonth(),r.getDate()+1,i,o,0))(),A=r.getTime();let y=Math.abs(A-d)/(24*60*60*1e3),k=y%1*24,b=k%1*60;[y,k,b]=[Math.floor(y),Math.floor(k),Math.floor(b)];const _=(v,C,E="s")=>v>1?`${v} ${C}${E}`:`${v} ${C}`,m=y?_(y,"day"):null,h=k?_(k,"hour"):null,f=b?_(b,"minute"):null,S="in "+[m,h,f].filter(v=>v).join(", ");return x("div",{className:yt.deadline,children:[e(ae,{}),S]})}const gt="_edit_1xax2_83";var w={"alarm-card":"_alarm-card_1xax2_1","alarm-card__time":"_alarm-card__time_1xax2_27","alarm-card__name":"_alarm-card__name_1xax2_55","alarm-card__name--disabled":"_alarm-card__name--disabled_1xax2_65","alarm-card__switch":"_alarm-card__switch_1xax2_73",edit:gt};function xt({name:a,enabled:n}){return e("div",{className:`${w["alarm-card__name"]} ${n?"":w["alarm-card__name--disabled"]}`,children:a})}function At({alarm:{id:a,enabled:n,name:t,time:r,repeatDays:s,soundTitle:i,snooze:o},alarmActions:{toggleAlarm:u,editAlarm:p,deleteAlarm:d},audio:A,alarmEditingState:g}){return x(ut,{className:`${w["alarm-card"]} ${g?w.edit:""}`,onClick:()=>p({id:a,time:r,name:t,enabled:n,repeatDays:s,soundTitle:i,snooze:o,audio:A}),children:[x("header",{children:[e("h3",{className:`${w["alarm-card__time"]} ${n?"":w["alarm-card__name--disabled"]}`,children:r}),g?e(M,{onClick:y=>{y.stopPropagation(),d(a)},icon:e(X,{}),appearance:"subtle"}):e(fe,{checked:n,onChange:()=>u(a),onClick:y=>y.stopPropagation(),className:w["alarm-card__switch"]})]}),e(vt,{time:r,repeatDays:s,type:"long"}),e(xt,{name:t,enabled:n}),e(ne,{repeatDays:s,enabled:n,noInteraction:!0})]})}function Ct({openAddNewAlarmModal:a,toggleEditAlarms:n}){return x(pt,{children:[e(M,{appearance:"subtle",size:"large",icon:e(_e,{}),onClick:n}),e(M,{appearance:"subtle",size:"large",icon:e(he,{}),onClick:a})]})}function kt(){return e(_t,{icon:e(ae,{}),title:"You don't have any alarms.",description:'Select "+" below to add a new alarm.'})}const bt=()=>{const{alarms:a,alarmActions:n,editingState:t,audio:r}=l.exports.useContext(te);return x(K,{children:[e(lt,{motionDivKey:"alarm",children:e(it,{children:(a==null?void 0:a.length)>0?a.map(s=>e(At,{alarm:s,alarmActions:n,audio:r,alarmEditingState:t},s.id)):e(kt,{})})}),e(Ct,{openAddNewAlarmModal:n.openAddNewAlarmModal,toggleEditAlarms:n.toggleEditAlarms})]})};var Mt=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"}));export{lt as A,ae as B,j as C,K as F,ee as L,Te as M,_t as N,P as _,x as a,Q as b,Z as c,ut as d,pt as e,it as f,Rt as g,Dt as h,Nt as i,e as j,Mt as k,Y as s};