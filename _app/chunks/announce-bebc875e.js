function l(a,i={}){const c=i.priority||"polite",n=i.ownerDocument||document,r=n.querySelectorAll("[data-smui-dom-announce]");r.length&&r.forEach(t=>{var o;(o=t.parentNode)===null||o===void 0||o.removeChild(t)});const e=n.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.left="-9999px",e.style.height="1px",e.style.overflow="hidden",e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live",c),e.setAttribute("data-mdc-dom-announce","true"),e.setAttribute("data-smui-dom-announce","true"),n.body.appendChild(e),window.setTimeout(()=>{e.textContent=a;const t=()=>{e.textContent="",e.removeEventListener("click",t)};e.addEventListener("click",t,{once:!0})},100)}export{l as a};