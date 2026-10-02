const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>40));
document.querySelector(".menu").addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const form=document.getElementById("quoteForm"), note=document.getElementById("formNote");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent("Rattan Furniture Inquiry — "+(data.get("company")||data.get("name")));
  const body=encodeURIComponent(`Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\n\nInquiry:\n${data.get("message")}`);
  window.location.href=`mailto:hello@arunarattan.com?subject=${subject}&body=${body}`;
  note.textContent="Email client Anda akan dibuka untuk mengirim inquiry.";
  note.className="form-note ok";
});
