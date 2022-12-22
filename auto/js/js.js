

// autocomp

 let counter = 1

 const autowriting = () => {
    const title ="Ayat HAshish i'm "
    website.innerHTML = title .slice (0,counter)
    counter++


    if (title.length < counter)
    clearInterval(stopfunction)


 }

 autowriting()

 const stopfunction =  setInterval( autowriting ,1000); 

