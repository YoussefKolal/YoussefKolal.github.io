// Active-link nav
const sections =document.querySelectorAll('.sectioncontainer[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
// Menu responsive
const menuViews = document.querySelectorAll('.menulist'),
      menuBtns = document.querySelectorAll('.buttonmenu'),
      menuClose = document.querySelectorAll('.menubuttons'),
      mainViews = document.querySelectorAll('.main');

let menu = function(menuClick){
   menuViews[menuClick].classList.add('visibiltymenuvisible'); 

}
menuBtns.forEach((mb, i) =>    {
    mb.addEventListener('click', () =>{
        menu(i)
    })
})
menuClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        menuViews.forEach((mv) =>{
            mv.classList.remove('visibiltymenuvisible')
        })

    })
})



// Skills Modal
const modalViews = document.querySelectorAll('.skillmodal'),
      modalSkills = document.querySelector('.navskills'),
      modalHome = document.querySelector('.navhome'),
      
      modalBtns = document.querySelectorAll('.skillbutton'),
      modalClose = document.querySelectorAll('.closebuttonmodal'),
      modalHtml = document.querySelectorAll('.main')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((mb, i) =>    {
    mb.addEventListener('click', () =>{
        modal(i)
    })
})
modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
        modalHome.classList.remove('active-link')
        modalSkills.classList.add('active-link')


        // modalHtml.forEach((mu)=>{
        //     mv.classList.remove('overflowing')
        // })
    })
})








// swipper
var swiper = new Swiper(".mySwiper", {
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    breakpoints: {

        621: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        950: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });
  // swipper 2
var swiper_two = new Swiper(".mySwiper_two", {
    loop:true,
    spaceBetween: 30,
    grabCursor:true,
    navigation: {
        nextEl: ".next_two",
        prevEl: ".prev_two",
      },
    breakpoints: {

        621: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        950: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });