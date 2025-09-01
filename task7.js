const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const btn = document.getElementById('btn')
const inc = "@"
btn.addEventListener('click', (e)=>{
   if(name.value == ""){
    alert("please enter your name")
   }else if(email.value == ""){
    alert("please enter your email")
   }else if(message.value == ""){
    alert("please anything in the text box")
   }else if(!(email.value.includes(inc))){
    alert("please insert @ sign in email")
   }
})