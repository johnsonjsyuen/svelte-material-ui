import{S as F,i as B,s as G,e as b,t as g,c as y,a as $,h as R,d as c,b as h,g as O,H as o,_ as K,E as C,k as w,m as P,$ as N,a0 as le,I as Z,w as z,G as re,x as J,y as L,q as Q,o as V,B as W}from"../../../chunks/index-30f0de65.js";import{D as X}from"../../../chunks/Demo-e6e6f5b9.js";import{R as H}from"../../../chunks/Ripple-5fd6e49b.js";import"../../../chunks/index-85a52a40.js";import"../../../chunks/useActions-23126cd3.js";import"../../../chunks/IconButton-922cc448.js";import"../../../chunks/index-dbcd02f8.js";import"../../../chunks/prefixFilter-0866cfc5.js";import"../../../chunks/index-c646bcc2.js";function ae(u){let e,t,n,a,s,l,i;return{c(){e=b("p"),t=g("SMUI ripples can be added to arbitrary elements, like this "),n=b("code"),a=g("p"),s=g(`
  element. Try clicking it to see the ripple.`),this.h()},l(v){e=y(v,"P",{tabindex:!0,class:!0});var _=$(e);t=R(_,"SMUI ripples can be added to arbitrary elements, like this "),n=y(_,"CODE",{});var E=$(n);a=R(E,"p"),E.forEach(c),s=R(_,`
  element. Try clicking it to see the ripple.`),_.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(v,_){O(v,e,_),o(e,t),o(e,n),o(n,a),o(e,s),l||(i=K(H.call(null,e,{surface:!0})),l=!0)},p:C,i:C,o:C,d(v){v&&c(e),l=!1,i()}}}class oe extends F{constructor(e){super(),B(this,e,null,ae,G,{})}}function ue(u){let e,t,n,a;return{c(){e=b("p"),t=g("Primary color."),this.h()},l(s){e=y(s,"P",{tabindex:!0,class:!0});var l=$(e);t=R(l,"Primary color."),l.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(s,l){O(s,e,l),o(e,t),n||(a=K(H.call(null,e,{surface:!0,color:"primary"})),n=!0)},p:C,i:C,o:C,d(s){s&&c(e),n=!1,a()}}}class ie extends F{constructor(e){super(),B(this,e,null,ue,G,{})}}function pe(u){let e,t,n,a;return{c(){e=b("p"),t=g("Secondary color."),this.h()},l(s){e=y(s,"P",{tabindex:!0,class:!0});var l=$(e);t=R(l,"Secondary color."),l.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(s,l){O(s,e,l),o(e,t),n||(a=K(H.call(null,e,{surface:!0,color:"secondary"})),n=!0)},p:C,i:C,o:C,d(s){s&&c(e),n=!1,a()}}}class ce extends F{constructor(e){super(),B(this,e,null,pe,G,{})}}function de(u){let e,t,n,a,s,l,i,v,_,E,D,r,U,x,S,I,j;return{c(){e=b("p"),t=b("span"),n=g("D"),l=w(),i=b("span"),v=g("P"),D=w(),r=b("span"),U=g("S"),this.h()},l(m){e=y(m,"P",{class:!0});var p=$(e);t=y(p,"SPAN",{tabindex:!0,class:!0});var q=$(t);n=R(q,"D"),q.forEach(c),l=P(p),i=y(p,"SPAN",{tabindex:!0,class:!0});var k=$(i);v=R(k,"P"),k.forEach(c),D=P(p),r=y(p,"SPAN",{tabindex:!0,class:!0});var M=$(r);U=R(M,"S"),M.forEach(c),p.forEach(c),this.h()},h(){h(t,"tabindex","0"),h(t,"class",a="unbounded "+Object.keys(u[0]).join(" ")+" svelte-c8bsu2"),h(i,"tabindex","0"),h(i,"class",_="unbounded "+Object.keys(u[1]).join(" ")+" svelte-c8bsu2"),h(r,"tabindex","0"),h(r,"class",x="unbounded "+Object.keys(u[2]).join(" ")+" svelte-c8bsu2"),h(e,"class","svelte-c8bsu2")},m(m,p){O(m,e,p),o(e,t),o(t,n),o(e,l),o(e,i),o(i,v),o(e,D),o(e,r),o(r,U),I||(j=[K(s=H.call(null,t,{surface:!0,unbounded:!0,addClass:u[3],removeClass:u[4]})),K(E=H.call(null,i,{surface:!0,unbounded:!0,color:"primary",addClass:u[5],removeClass:u[6]})),K(S=H.call(null,r,{surface:!0,unbounded:!0,color:"secondary",addClass:u[7],removeClass:u[8]}))],I=!0)},p(m,[p]){p&1&&a!==(a="unbounded "+Object.keys(m[0]).join(" ")+" svelte-c8bsu2")&&h(t,"class",a),s&&N(s.update)&&p&1&&s.update.call(null,{surface:!0,unbounded:!0,addClass:m[3],removeClass:m[4]}),p&2&&_!==(_="unbounded "+Object.keys(m[1]).join(" ")+" svelte-c8bsu2")&&h(i,"class",_),E&&N(E.update)&&p&2&&E.update.call(null,{surface:!0,unbounded:!0,color:"primary",addClass:m[5],removeClass:m[6]}),p&4&&x!==(x="unbounded "+Object.keys(m[2]).join(" ")+" svelte-c8bsu2")&&h(r,"class",x),S&&N(S.update)&&p&4&&S.update.call(null,{surface:!0,unbounded:!0,color:"secondary",addClass:m[7],removeClass:m[8]})},i:C,o:C,d(m){m&&c(e),I=!1,le(j)}}}function fe(u,e,t){let n={},a={},s={};return[n,a,s,r=>{n[r]||t(0,n[r]=!0,n)},r=>{n[r]&&(delete n[r],t(0,n))},r=>{a[r]||t(1,a[r]=!0,a)},r=>{a[r]&&(delete a[r],t(1,a))},r=>{s[r]||t(2,s[r]=!0,s)},r=>{s[r]&&(delete s[r],t(2,s))}]}class _e extends F{constructor(e){super(),B(this,e,fe,de,G,{})}}function me(u){let e,t,n,a,s;return{c(){e=b("p"),t=g(`Keyboard activation on a non-button non-link element. (Focus and press
  space/enter.)`),this.h()},l(l){e=y(l,"P",{tabindex:!0,class:!0});var i=$(e);t=R(i,`Keyboard activation on a non-button non-link element. (Focus and press
  space/enter.)`),i.forEach(c),this.h()},h(){h(e,"tabindex","0"),h(e,"class","svelte-ghwvhd")},m(l,i){O(l,e,i),o(e,t),a||(s=[K(n=H.call(null,e,{surface:!0,active:u[0]})),Z(e,"mousedown",u[1],!0),Z(e,"mouseup",u[2],!0),Z(e,"keydown",u[3],!0),Z(e,"keyup",u[4],!0)],a=!0)},p(l,[i]){n&&N(n.update)&&i&1&&n.update.call(null,{surface:!0,active:l[0]})},i:C,o:C,d(l){l&&c(e),a=!1,le(s)}}}function he(u,e,t){let n=!1;return[n,()=>t(0,n=!0),()=>t(0,n=!1),v=>t(0,n=v.code==="Space"||v.code==="Enter"),()=>t(0,n=!1)]}class ve extends F{constructor(e){super(),B(this,e,he,me,G,{})}}function be(u){let e;return{c(){e=g("Unbounded")},l(t){e=R(t,"Unbounded")},m(t,n){O(t,e,n)},d(t){t&&c(e)}}}function ye(u){let e,t,n,a,s,l,i,v,_,E,D,r,U,x,S,I,j,m,p,q,k,M,A,Y;return S=new X({props:{component:oe,file:"ripple/_Simple.svelte"}}),j=new X({props:{component:ie,file:"ripple/_PrimaryColor.svelte"}}),p=new X({props:{component:ce,file:"ripple/_SecondaryColor.svelte"}}),k=new X({props:{component:_e,file:"ripple/_Unbounded.svelte",$$slots:{default:[be]},$$scope:{ctx:u}}}),A=new X({props:{component:ve,file:"ripple/_KeyboardActivation.svelte"}}),{c(){e=w(),t=b("section"),n=b("h2"),a=g("Ripple"),s=w(),l=b("h5"),i=g("Installation"),v=w(),_=b("pre"),E=g("npm i -D @smui/ripple"),D=w(),r=b("h5"),U=g("Demos"),x=w(),z(S.$$.fragment),I=w(),z(j.$$.fragment),m=w(),z(p.$$.fragment),q=w(),z(k.$$.fragment),M=w(),z(A.$$.fragment),this.h()},l(d){re('[data-svelte="svelte-1s9ceeg"]',document.head).forEach(c),e=P(d),t=y(d,"SECTION",{});var f=$(t);n=y(f,"H2",{});var ee=$(n);a=R(ee,"Ripple"),ee.forEach(c),s=P(f),l=y(f,"H5",{});var te=$(l);i=R(te,"Installation"),te.forEach(c),v=P(f),_=y(f,"PRE",{class:!0});var ne=$(_);E=R(ne,"npm i -D @smui/ripple"),ne.forEach(c),D=P(f),r=y(f,"H5",{});var se=$(r);U=R(se,"Demos"),se.forEach(c),x=P(f),J(S.$$.fragment,f),I=P(f),J(j.$$.fragment,f),m=P(f),J(p.$$.fragment,f),q=P(f),J(k.$$.fragment,f),M=P(f),J(A.$$.fragment,f),f.forEach(c),this.h()},h(){document.title="Ripple - SMUI",h(_,"class","demo-spaced")},m(d,T){O(d,e,T),O(d,t,T),o(t,n),o(n,a),o(t,s),o(t,l),o(l,i),o(t,v),o(t,_),o(_,E),o(t,D),o(t,r),o(r,U),o(t,x),L(S,t,null),o(t,I),L(j,t,null),o(t,m),L(p,t,null),o(t,q),L(k,t,null),o(t,M),L(A,t,null),Y=!0},p(d,[T]){const f={};T&1&&(f.$$scope={dirty:T,ctx:d}),k.$set(f)},i(d){Y||(Q(S.$$.fragment,d),Q(j.$$.fragment,d),Q(p.$$.fragment,d),Q(k.$$.fragment,d),Q(A.$$.fragment,d),Y=!0)},o(d){V(S.$$.fragment,d),V(j.$$.fragment,d),V(p.$$.fragment,d),V(k.$$.fragment,d),V(A.$$.fragment,d),Y=!1},d(d){d&&c(e),d&&c(t),W(S),W(j),W(p),W(k),W(A)}}}class je extends F{constructor(e){super(),B(this,e,null,ye,G,{})}}export{je as default};