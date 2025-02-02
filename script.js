const nameForm=document.querySelector("#name");
const surname=document.getElementById("surname");
const email=document.getElementById("email");
const textarea=document.getElementById("textarea");
const form=document.querySelector("form");
console.log(nameForm , surname , email  ,  textarea ,  form);
const spanName=document.querySelector(".spanName");
const
const symbols = /[^a-zA-Z0-9\s]/;


nameForm.addEventListener("input",(e) =>{
const valueName=e.target.value;
console.log(valueName);

if(valueName===""){
    nameForm.classList.add("error");
    spanName.textContent="le nom est obligatoire"
}else if(valueName.length<3 || valueName.length>30){
    nameForm.classList.add("error");
    spanName.textContent="le nom doit être entre 3 et 30 caractères";
}
else if(symbols.test(valueName)){
    nameForm.classList.add("error");
    spanName.textContent="le nom ne peut contenir des caracteres speciaux";
}else{
    nameForm.classList.remove("error");
    spanName.textContent="";
}
})
   
   
 
  