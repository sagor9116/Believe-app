//navigation bar effect on scroll
window.addEventListener('scroll',function(){
    let headerScroll = this.document.querySelector('header');
    headerScroll.classList.toggle('sticky', window.scrollY > 0);
})

//navigation bar toggle 
const navbarToggle = document.querySelector('.navbar__toggle');
const navigation = document.getElementById('navigation');
navbarToggle.addEventListener('click',function() {
    navigation.classList.toggle('active')
})