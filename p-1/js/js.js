const panal = document.querySelectorAll('.panal');
/* console.log(panal)
const active =document.querySelectorAll('.active'); */


panal.forEach(panal => {
    
    panal.addEventListener('click', () =>{
    
    removeActiveClass()
        panal.classList.add('active')
    })

})

 function removeActiveClass() {
    panal.forEach(panal => {
        panal.classList.remove('active')


    })
} 
