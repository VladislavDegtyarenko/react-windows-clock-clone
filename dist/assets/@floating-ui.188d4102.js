function B(t){return t.split("-")[1]}function tt(t){return t==="y"?"height":"width"}function T(t){return t.split("-")[0]}function V(t){return["top","bottom"].includes(T(t))?"x":"y"}function it(t,e,n){let{reference:o,floating:i}=t;const s=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,r=V(e),l=tt(r),f=o[l]/2-i[l]/2,m=T(e),a=r==="x";let u;switch(m){case"top":u={x:s,y:o.y-i.height};break;case"bottom":u={x:s,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:c};break;case"left":u={x:o.x-i.width,y:c};break;default:u={x:o.x,y:o.y}}switch(B(e)){case"start":u[r]-=f*(n&&a?-1:1);break;case"end":u[r]+=f*(n&&a?-1:1);break}return u}const Ot=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:c}=n,r=s.filter(Boolean),l=await(c.isRTL==null?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:a}=it(f,o,l),u=o,d={},g=0;for(let b=0;b<r.length;b++){const{name:y,fn:p}=r[b],{x:h,y:x,data:v,reset:w}=await p({x:m,y:a,initialPlacement:o,placement:u,strategy:i,middlewareData:d,rects:f,platform:c,elements:{reference:t,floating:e}});if(m=h!=null?h:m,a=x!=null?x:a,d={...d,[y]:{...d[y],...v}},w&&g<=50){g++,typeof w=="object"&&(w.placement&&(u=w.placement),w.rects&&(f=w.rects===!0?await c.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:m,y:a}=it(f,u,l)),b=-1;continue}}return{x:m,y:a,placement:u,strategy:i,middlewareData:d}};function Rt(t){return{top:0,right:0,bottom:0,left:0,...t}}function dt(t){return typeof t!="number"?Rt(t):{top:t,right:t,bottom:t,left:t}}function z(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function H(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:c,elements:r,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:a="floating",altBoundary:u=!1,padding:d=0}=e,g=dt(d),y=r[u?a==="floating"?"reference":"floating":a],p=z(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(r.floating)),boundary:f,rootBoundary:m,strategy:l})),h=a==="floating"?{...c.floating,x:o,y:i}:c.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(r.floating)),v=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},w=z(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:x,strategy:l}):h);return{top:(p.top-w.top+g.top)/v.y,bottom:(w.bottom-p.bottom+g.bottom)/v.y,left:(p.left-w.left+g.left)/v.x,right:(w.right-p.right+g.right)/v.x}}const Tt=Math.min,P=Math.max;function Q(t,e,n){return P(t,Tt(e,n))}const zt=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:s,placement:c,rects:r,platform:l}=e;if(n==null)return{};const f=dt(o),m={x:i,y:s},a=V(c),u=tt(a),d=await l.getDimensions(n),g=a==="y"?"top":"left",b=a==="y"?"bottom":"right",y=r.reference[u]+r.reference[a]-m[a]-r.floating[u],p=m[a]-r.reference[a],h=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let x=h?a==="y"?h.clientHeight||0:h.clientWidth||0:0;x===0&&(x=r.floating[u]);const v=y/2-p/2,w=f[g],O=x-d[u]-f[b],A=x/2-d[u]/2+v,M=Q(w,A,O),E=B(c)!=null&&A!=M&&r.reference[u]/2-(A<w?f[g]:f[b])-d[u]/2<0?A<w?w-A:O-A:0;return{[a]:m[a]-E,data:{[a]:M,centerOffset:A-M}}}}),Lt=["top","right","bottom","left"],Et={left:"right",right:"left",bottom:"top",top:"bottom"};function K(t){return t.replace(/left|right|bottom|top/g,e=>Et[e])}function St(t,e,n){n===void 0&&(n=!1);const o=B(t),i=V(t),s=tt(i);let c=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(c=K(c)),{main:c,cross:K(c)}}const kt={start:"end",end:"start"};function Z(t){return t.replace(/start|end/g,e=>kt[e])}function Dt(t){const e=K(t);return[Z(t),e,Z(e)]}function Pt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],c=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:c;default:return[]}}function Mt(t,e,n,o){const i=B(t);let s=Pt(T(t),n==="start",o);return i&&(s=s.map(c=>c+"-"+i),e&&(s=s.concat(s.map(Z)))),s}const Kt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:c,platform:r,elements:l}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:a,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:g=!0,...b}=t,y=T(o),p=T(c)===c,h=await(r.isRTL==null?void 0:r.isRTL(l.floating)),x=a||(p||!g?[K(c)]:Dt(c));!a&&d!=="none"&&x.push(...Mt(c,g,d,h));const v=[c,...x],w=await H(e,b),O=[];let A=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&O.push(w[y]),m){const{main:E,cross:_}=St(o,s,h);O.push(w[E],w[_])}if(A=[...A,{placement:o,overflows:O}],!O.every(E=>E<=0)){var M;const E=(((M=i.flip)==null?void 0:M.index)||0)+1,_=v[E];if(_)return{data:{index:E,overflows:A},reset:{placement:_}};let X="bottom";switch(u){case"bestFit":{var J;const ot=(J=A.map(I=>[I,I.overflows.filter(N=>N>0).reduce((N,Ct)=>N+Ct,0)]).sort((I,N)=>I[1]-N[1])[0])==null?void 0:J[0].placement;ot&&(X=ot);break}case"initialPlacement":X=c;break}if(o!==X)return{reset:{placement:X}}}return{}}}};function st(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ct(t){return Lt.some(e=>t[e]>=0)}const Ut=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e;switch(n){case"referenceHidden":{const s=await H(e,{...o,elementContext:"reference"}),c=st(s,i.reference);return{data:{referenceHiddenOffsets:c,referenceHidden:ct(c)}}}case"escaped":{const s=await H(e,{...o,altBoundary:!0}),c=st(s,i.floating);return{data:{escapedOffsets:c,escaped:ct(c)}}}default:return{}}}}};async function Ft(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),c=T(n),r=B(n),l=V(n)==="x",f=["left","top"].includes(c)?-1:1,m=s&&l?-1:1,a=typeof e=="function"?e(t):e;let{mainAxis:u,crossAxis:d,alignmentAxis:g}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return r&&typeof g=="number"&&(d=r==="end"?g*-1:g),l?{x:d*m,y:u*f}:{x:u*f,y:d*m}}const qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Ft(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function mt(t){return t==="x"?"y":"x"}const Gt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:c=!1,limiter:r={fn:y=>{let{x:p,y:h}=y;return{x:p,y:h}}},...l}=t,f={x:n,y:o},m=await H(e,l),a=V(T(i)),u=mt(a);let d=f[a],g=f[u];if(s){const y=a==="y"?"top":"left",p=a==="y"?"bottom":"right",h=d+m[y],x=d-m[p];d=Q(h,d,x)}if(c){const y=u==="y"?"top":"left",p=u==="y"?"bottom":"right",h=g+m[y],x=g-m[p];g=Q(h,g,x)}const b=r.fn({...e,[a]:d,[u]:g});return{...b,data:{x:b.x-n,y:b.y-o}}}}},Jt=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:i,rects:s,middlewareData:c}=e,{offset:r=0,mainAxis:l=!0,crossAxis:f=!0}=t,m={x:n,y:o},a=V(i),u=mt(a);let d=m[a],g=m[u];const b=typeof r=="function"?r(e):r,y=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const x=a==="y"?"height":"width",v=s.reference[a]-s.floating[x]+y.mainAxis,w=s.reference[a]+s.reference[x]-y.mainAxis;d<v?d=v:d>w&&(d=w)}if(f){var p,h;const x=a==="y"?"width":"height",v=["top","left"].includes(T(i)),w=s.reference[u]-s.floating[x]+(v&&((p=c.offset)==null?void 0:p[u])||0)+(v?0:y.crossAxis),O=s.reference[u]+s.reference[x]+(v?0:((h=c.offset)==null?void 0:h[u])||0)-(v?y.crossAxis:0);g<w?g=w:g>O&&(g=O)}return{[a]:d,[u]:g}}}},Qt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:c=()=>{},...r}=t,l=await H(e,r),f=T(n),m=B(n);let a,u;f==="top"||f==="bottom"?(a=f,u=m===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(u=f,a=m==="end"?"top":"bottom");const d=P(l.left,0),g=P(l.right,0),b=P(l.top,0),y=P(l.bottom,0),p={availableHeight:o.floating.height-(["left","right"].includes(n)?2*(b!==0||y!==0?b+y:P(l.top,l.bottom)):l[a]),availableWidth:o.floating.width-(["top","bottom"].includes(n)?2*(d!==0||g!==0?d+g:P(l.left,l.right)):l[u])};await c({...e,...p});const h=await i.getDimensions(s.floating);return o.floating.width!==h.width||o.floating.height!==h.height?{reset:{rects:!0}}:{}}}};function C(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function R(t){return C(t).getComputedStyle(t)}function S(t){return ht(t)?(t.nodeName||"").toLowerCase():""}let Y;function gt(){if(Y)return Y;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Y=t.brands.map(e=>e.brand+"/"+e.version).join(" "),Y):navigator.userAgent}function L(t){return t instanceof C(t).HTMLElement}function k(t){return t instanceof C(t).Element}function ht(t){return t instanceof C(t).Node}function rt(t){if(typeof ShadowRoot=="undefined")return!1;const e=C(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function q(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=R(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Bt(t){return["table","td","th"].includes(S(t))}function et(t){const e=/firefox/i.test(gt()),n=R(t),o=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||(o?o!=="none":!1)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const s=n.contain;return s!=null?s.includes(i):!1})}function pt(){return!/^((?!chrome|android).)*safari/i.test(gt())}function nt(t){return["html","body","#document"].includes(S(t))}const lt=Math.min,W=Math.max,U=Math.round;function xt(t){const e=R(t);let n=parseFloat(e.width),o=parseFloat(e.height);const i=t.offsetWidth,s=t.offsetHeight,c=U(n)!==i||U(o)!==s;return c&&(n=i,o=s),{width:n,height:o,fallback:c}}function wt(t){return k(t)?t:t.contextElement}const yt={x:1,y:1};function F(t){const e=wt(t);if(!L(e))return yt;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:s}=xt(e);let c=(s?U(n.width):n.width)/o,r=(s?U(n.height):n.height)/i;return(!c||!Number.isFinite(c))&&(c=1),(!r||!Number.isFinite(r))&&(r=1),{x:c,y:r}}function $(t,e,n,o){var i,s;e===void 0&&(e=!1),n===void 0&&(n=!1);const c=t.getBoundingClientRect(),r=wt(t);let l=yt;e&&(o?k(o)&&(l=F(o)):l=F(t));const f=r?C(r):window,m=!pt()&&n;let a=(c.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/l.x,u=(c.top+(m&&((s=f.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,d=c.width/l.x,g=c.height/l.y;if(r){const b=C(r),y=o&&k(o)?C(o):o;let p=b.frameElement;for(;p&&o&&y!==b;){const h=F(p),x=p.getBoundingClientRect(),v=getComputedStyle(p);x.x+=(p.clientLeft+parseFloat(v.paddingLeft))*h.x,x.y+=(p.clientTop+parseFloat(v.paddingTop))*h.y,a*=h.x,u*=h.y,d*=h.x,g*=h.y,a+=x.x,u+=x.y,p=C(p).frameElement}}return{width:d,height:g,top:u,right:a+d,bottom:u+g,left:a,x:a,y:u}}function D(t){return((ht(t)?t.ownerDocument:t.document)||window.document).documentElement}function G(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(t){return $(D(t)).left+G(t).scrollLeft}function Vt(t,e,n){const o=L(e),i=D(e),s=$(t,!0,n==="fixed",e);let c={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(o||!o&&n!=="fixed")if((S(e)!=="body"||q(i))&&(c=G(e)),L(e)){const l=$(e,!0);r.x=l.x+e.clientLeft,r.y=l.y+e.clientTop}else i&&(r.x=bt(i));return{x:s.left+c.scrollLeft-r.x,y:s.top+c.scrollTop-r.y,width:s.width,height:s.height}}function j(t){if(S(t)==="html")return t;const e=t.assignedSlot||t.parentNode||(rt(t)?t.host:null)||D(t);return rt(e)?e.host:e}function at(t){return!L(t)||R(t).position==="fixed"?null:t.offsetParent}function Nt(t){let e=j(t);for(;L(e)&&!nt(e);){if(et(e))return e;e=j(e)}return null}function ft(t){const e=C(t);let n=at(t);for(;n&&Bt(n)&&R(n).position==="static";)n=at(n);return n&&(S(n)==="html"||S(n)==="body"&&R(n).position==="static"&&!et(n))?e:n||Nt(t)||e}function Wt(t){return xt(t)}function Ht(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=L(n),s=D(n);if(n===s)return e;let c={scrollLeft:0,scrollTop:0},r={x:1,y:1};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((S(n)!=="body"||q(s))&&(c=G(n)),L(n))){const f=$(n);r=F(n),l.x=f.x+n.clientLeft,l.y=f.y+n.clientTop}return{width:e.width*r.x,height:e.height*r.y,x:e.x*r.x-c.scrollLeft*r.x+l.x,y:e.y*r.y-c.scrollTop*r.y+l.y}}function $t(t,e){const n=C(t),o=D(t),i=n.visualViewport;let s=o.clientWidth,c=o.clientHeight,r=0,l=0;if(i){s=i.width,c=i.height;const f=pt();(f||!f&&e==="fixed")&&(r=i.offsetLeft,l=i.offsetTop)}return{width:s,height:c,x:r,y:l}}function jt(t){var e;const n=D(t),o=G(t),i=(e=t.ownerDocument)==null?void 0:e.body,s=W(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),c=W(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let r=-o.scrollLeft+bt(t);const l=-o.scrollTop;return R(i||n).direction==="rtl"&&(r+=W(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:c,x:r,y:l}}function vt(t){const e=j(t);return nt(e)?t.ownerDocument.body:L(e)&&q(e)?e:vt(e)}function At(t,e){var n;e===void 0&&(e=[]);const o=vt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=C(o);return i?e.concat(s,s.visualViewport||[],q(o)?o:[]):e.concat(o,At(o))}function _t(t,e){const n=$(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=L(t)?F(t):{x:1,y:1},c=t.clientWidth*s.x,r=t.clientHeight*s.y,l=i*s.x,f=o*s.y;return{top:f,left:l,right:l+c,bottom:f+r,x:l,y:f,width:c,height:r}}function ut(t,e,n){return e==="viewport"?z($t(t,n)):k(e)?_t(e,n):z(jt(D(t)))}function Xt(t,e){const n=e.get(t);if(n)return n;let o=At(t).filter(r=>k(r)&&S(r)!=="body"),i=null;const s=R(t).position==="fixed";let c=s?j(t):t;for(;k(c)&&!nt(c);){const r=R(c),l=et(c);(s?!l&&!i:!l&&r.position==="static"&&!!i&&["absolute","fixed"].includes(i.position))?o=o.filter(m=>m!==c):i=r,c=j(c)}return e.set(t,o),o}function It(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const c=[...n==="clippingAncestors"?Xt(e,this._c):[].concat(n),o],r=c[0],l=c.reduce((f,m)=>{const a=ut(e,m,i);return f.top=W(a.top,f.top),f.right=lt(a.right,f.right),f.bottom=lt(a.bottom,f.bottom),f.left=W(a.left,f.left),f},ut(e,r,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const Yt={getClippingRect:It,convertOffsetParentRelativeRectToViewportRelativeRect:Ht,isElement:k,getDimensions:Wt,getOffsetParent:ft,getDocumentElement:D,getScale:F,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||ft,s=this.getDimensions;return{reference:Vt(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>R(t).direction==="rtl"},Zt=(t,e,n)=>{const o=new Map,i={platform:Yt,...n},s={...i.platform,_c:o};return Ot(t,e,{...i,platform:s})};export{Gt as a,zt as b,Zt as c,H as d,Kt as f,Ut as h,Jt as l,qt as o,Qt as s};
