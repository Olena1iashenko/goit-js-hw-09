import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),s="feedback-form-state";let o={};r.addEventListener("submit",n);r.addEventListener("input",c);function m(t,a){try{const e=JSON.stringify(a);localStorage.setItem(t,e)}catch(e){console.log(e.message)}}(function(a){try{const e=JSON.parse(localStorage.getItem(a));e&&(r.elements.email.value=e.email,r.elements.message.value=e.message)}catch(e){console.log(e.message)}})(s);function n(t){t.preventDefault();const{email:a,message:e}=t.currentTarget.elements;if(!a.value.trim()||!e.value.trim())return alert("Fill in both fields!");let l={email:a.value.trim(),message:e.value.trim()};console.log(l),t.currentTarget.reset(),localStorage.removeItem(s)}function c(t){const{email:a,message:e}=t.currentTarget.elements;o.email=a.value.trim(),o.message=e.value.trim(),m(s,o)}
//# sourceMappingURL=commonHelpers2.js.map
