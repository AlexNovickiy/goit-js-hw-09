import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),t={email:"",message:""},s=localStorage.getItem("feedback-form-state");if(s)try{const e=JSON.parse(s);a.elements.email.value=e.email,a.elements.message.value=e.message,t.email=e.email,t.message=e.message}catch(e){console.error(`Error parsing localStorage data: ${e.name} - ${e.message}`)}a.addEventListener("input",e=>{t.email=a.elements.email.value.trim(),t.message=a.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))});a.addEventListener("submit",e=>{e.preventDefault();const m=a.elements.email.value.trim(),l=a.elements.message.value.trim();m&&l?(console.log(t),localStorage.removeItem("feedback-form-state"),a.reset()):alert("Fill please all fields")});
//# sourceMappingURL=2-form.js.map
