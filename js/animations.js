window.addEventListener("scroll",function(){
    let header = document.querySelector('#navbar');
    header.classList.toggle("sticky" , window.scrollY > 20);
})