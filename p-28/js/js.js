const button = document.getElementById('button')
const toasts = document.getElementById("toasts")



const message =[
  
  `Message One`,
  `Message two`,
  `Message three`,
 `Message four`,
]

 const types = ['info','success','error'] 

button.addEventListener('click',()=> createNotification())


function createNotification() {
  const notif= document.creatElement('div')
  notif.classList.add('toast')
  notif.classList.add(types ? types : getRandomType())

 notif.innerText = message? message :  getRandomMessage()

  toasts.appendChild(notif)
   setTimeout(()=>{
   notif.remove()
 },3000)  
} 

 function getRandomMessage(){
  return message [Math.floor(Math.random () * message.length)]
}

function getRandomType(){
  return types[Math.floor(Math.random()* types.length)]
}
