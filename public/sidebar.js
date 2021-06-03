
window.addEventListener ('scroll',async()=>{
        
    const scrolled =await window.scrollY;
    console.log(scrolled)
    x = (scrolled -1)
    console.log(x)
    if(scrolled>1&&scrolled!=0 && scrolled>x){
      document.getElementById('sidebar').classList.toggle('active');
    if(x===-1){
        document.getElementById('sidebar').classList.toggle('')
    }
    }
   
})


