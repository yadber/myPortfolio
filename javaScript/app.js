const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click'  , () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link , index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.5}s`
            }
            
        })
    })
}

$(document).ready(function() {
    $('.nav-links').on('click','li' , function() {
        $('.nav-links li.active').removeClass('active');
        $(this).addClass('active');
    })
})


// For image gallery 

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');


imgs.forEach(img => img.addEventListener('click' , e =>
    {
        current.src = e.target.src;
        current.classList.add('fade-in');
        
        setTimeout(() => current.classList.remove('fade-in' ,500));
    }   
));



navSlide();