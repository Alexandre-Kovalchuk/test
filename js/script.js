const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const cookies = document.querySelector('.cookies')
const cookiesBtn = document.querySelectorAll('.cookies__btn')
const header = document.querySelector('.header')
const menuLink = document.querySelectorAll('.menu__link')
const headerLogo = document.querySelector('.header__logo')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu__icon_active')
  menuBody.classList.toggle('menu__body_active')
})

// cookie
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookies.style.display = 'none';
  }

  cookiesBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookies.style.display = 'none';
    });
  })


});

function addScroll() {
  if (window.scrollY > 0) {
    header.classList.add("header_scroll");
    menuLink.forEach(link => {
      link.classList.add('black')
    })
    headerLogo.classList.add('black')
  } else {
    header.classList.remove("header_scroll");
    menuLink.forEach(link => {
      link.classList.remove('black')
      headerLogo.classList.remove('black')
    })
  }
}

window.addEventListener("scroll", addScroll);
