"use strict";

const modalLink = document.querySelector('#modal__link');
const headerModal = document.querySelector('.header__modal');
const headerCloseModal = document.querySelector('.header__close-modal');

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

const sunIcon = document.querySelector('.description__sun');
const moonIcon = document.querySelector('.description__moon');
const body = document.querySelector('.body');

const logo = document.querySelector('.header__logo-gold');

const dayTime = document.querySelector('.description__daytime');
const descriptionImg = document.querySelector('.description__img');

const enterName = document.querySelector('.form__name');
const formBtn = document.querySelector('.form__btn');
const emailInput = document.querySelector('.form__email');

const bgImg = document.querySelector('.reservation');
const reservationForm = document.querySelector('.reservation__form');

const accordionItem = document.querySelector('.order__accordion-item');

const orderModal = document.querySelector('.order-top__modal');
const orderLinkModal = document.querySelector('.order-top__sign-link');

//! ===== Модальне вікно header =====
modalLink.addEventListener('click', toggleModal);
headerCloseModal.addEventListener('click', toggleModal);


function toggleModal() {
   headerModal.classList.toggle('hide');
}

//! ===== меню бургер =====
iconMenu.addEventListener('click', menuBurder);

function menuBurder() {
   if (iconMenu) {
      document.body.classList.toggle('_lock');
      document.body.classList.toggle('block');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   }
}

// ! ===== Перемикач background-color =====
moonIcon.addEventListener('click', toggleDaytime);
sunIcon.addEventListener('click', toggleDaytime);
logo.addEventListener('click', toggleDaytime);
bgImg.addEventListener('click', toggleDaytime);
reservationForm.addEventListener('click', toggleDaytime);

function toggleDaytime() {
   moonIcon.classList.toggle('hide');
   sunIcon.classList.toggle('hide');
   body.classList.toggle('dark');
   body.classList.toggle('light');
   logo.classList.toggle('logo');
   bgImg.classList.toggle('bg-light');
   reservationForm.classList.toggle('form-light');

   //? ===== Menu__link =====
   const links = document.querySelectorAll('a');
   //? ===== headings =====
   const descriptionTitle = document.querySelector('.description__title'),
      menuPizzaTitle = document.querySelector('.menu-pizza__title'),
      menuPizzaSubTitle = document.querySelectorAll('.menu-pizza__sub-title'),
      namePizza = document.querySelectorAll('.menu-pizza__gourmet h4'),
      formTitle = document.querySelector('.form__title'),
      formSubTitle = document.querySelectorAll('.form__sub-title'),
      labels = document.querySelectorAll('label');


   //? ===== Texts =====
   const descriptionText = document.querySelector('.description__text'),
      ingredients = document.querySelectorAll('.menu-pizza__ingredients p'),
      price = document.querySelectorAll('.menu-pizza__price p'),
      dough = document.querySelectorAll('.menu-pizza__dough p'),
      filling = document.querySelectorAll('.menu-pizza__gourmet p');

   //? ===== Inp =====
   const inp = document.querySelector('.description__inp'),
      formInp = document.querySelectorAll('.inps');


   //? ===== line =====
   const line = document.querySelectorAll('.menu-pizza__line p'),
      subLine = document.querySelectorAll('label p');
   //? ===== btns =====
   const descriptionSearchBtn = document.querySelector('.description__search-btn'),
      descriptionBtn = document.querySelector('.description__btn'),
      menuPizzaBtn = document.querySelector('.menu-pizza__btn button'),
      formBtn = document.querySelector('.form__btn');





   //* видаль клас golden-yellow, якщо фон body темний
   if (body.classList.contains('dark')) {
      //? ===== Menu__link =====
      links.forEach((e) => {
         e.classList.remove('golden');
      });

      //? ===== headings =====
      descriptionTitle.classList.remove('golden');
      menuPizzaTitle.classList.remove('golden');
      menuPizzaSubTitle.forEach((e) => {
         e.classList.remove('brown');
      });

      namePizza.forEach((e) => {
         e.classList.remove('brown');
      });

      formTitle.classList.remove('golden');

      formSubTitle.forEach((e) => {
         e.classList.remove('form-dark');
      });

      labels.forEach((e) => {
         e.classList.remove('form-dark');
      });



      //? ===== Texts =====
      descriptionText.classList.remove('golden');
      ingredients.forEach((e) => {
         e.classList.remove('brown');
      });

      price.forEach((e) => {
         e.classList.remove('brown');
      });

      dough.forEach((e) => {
         e.classList.remove('brown');
      });

      filling.forEach((e) => {
         e.classList.remove('brown');
      });


      //? ===== Inp =====
      inp.classList.remove('golden-inp');

      formInp.forEach((e) => {
         e.classList.remove('dark-line');
      });

      formInp.forEach((e) => {
         e.classList.remove('form-dark');
      });

      //? ===== line =====
      line.forEach((e) => {
         e.classList.remove('brown-line');
      });

      subLine.forEach((e) => {
         e.classList.remove('brown-line');
      });

      //? ===== btns =====
      descriptionSearchBtn.classList.remove('golden-bg');
      descriptionBtn.classList.remove('golden-bg');
      menuPizzaBtn.classList.remove('golden-bg');
      formBtn.classList.remove('golden-bg', 'form-dark');


   }
   //* додати клас золотисто-жовтого, якщо фон body білий
   else {
      //? ===== headings =====
      links.forEach((e) => {
         e.classList.add('golden');
      });

      //? ===== headings =====
      descriptionTitle.classList.add('golden');
      menuPizzaTitle.classList.add('golden');
      menuPizzaSubTitle.forEach((e) => {
         e.classList.add('brown');
      });
      namePizza.forEach((e) => {
         e.classList.add('brown');
      });

      formTitle.classList.add('golden');

      formSubTitle.forEach((e) => {
         e.classList.add('form-dark');
      });

      labels.forEach((e) => {
         e.classList.add('form-dark');
      });

      //? ===== Texts =====
      descriptionText.classList.add('golden');
      ingredients.forEach((e) => {
         e.classList.add('brown');
      });

      price.forEach((e) => {
         e.classList.add('brown');
      });

      dough.forEach((e) => {
         e.classList.add('brown');
      });

      filling.forEach((e) => {
         e.classList.add('brown');
      });


      //? ===== Inp =====
      inp.classList.add('golden-inp');

      formInp.forEach((e) => {
         e.classList.add('dark-line');
      });

      formInp.forEach((e) => {
         e.classList.add('form-dark');
      });

      //? ===== line =====
      line.forEach((e) => {
         e.classList.add('brown-line');
      });

      subLine.forEach((e) => {
         e.classList.add('brown-line');
      });

      //? ===== btns =====
      descriptionSearchBtn.classList.add('golden-bg');
      descriptionBtn.classList.add('golden-bg');
      menuPizzaBtn.classList.add('golden-bg');
      formBtn.classList.add('golden-bg', 'form-dark');

   }
}

// ! ===== переносимо description__daytime до меню бургер =====
window.addEventListener('resize', () => {
   /*
   якщо ширина екрана менше або дорівнює 770px
   переміщуємо елемент в header__menu
   */
   if (window.innerWidth <= 770) {
      menuBody.appendChild(dayTime);
   }
   else {
      /* 
      якщо ширина екрана більше 780px, переміщення 
      не потрібне, тому робимо навпаки:
     */
      descriptionImg.appendChild(dayTime);
   }
});

// ! ===== Valid form =====
// formBtn.addEventListener('click', checkName);


// запобігаємо введенню числових символів
enterName.addEventListener('keydown', (e) => {
   if (e.key.match(/[0-9]/)) {
      return e.preventDefault();
   }
});
// видаляємо будь-які введені цифрові символи
enterName.addEventListener('input', () => {
   enterName.value = enterName.value.replace(/[0-9]/g, "");
});

// function checkName() {
//    const errorName = document.querySelector('.error-name');
//    if (enterName.value) {
//       enterName.style.borderBottomColor = 'green';
//       errorName.classList.remove('error-name');
//       errorName.innerHTML = "";
//       // enterName.setAttribute('required', true);
//    }
//    else {
//       const errorName = document.createElement('span');
//       errorName.classList.add('error-name');
//       errorName.innerHTML = "Name is required";
//       enterName.parentNode.insertBefore(errorName, enterName.nextSibling);
//       enterName.value = '';
//       enterName.style.borderBottomColor = 'red';
//       enterName.setAttribute('required', true);
//    }
// }

// formBtn.addEventListener('click', checkEmail);

// function checkEmail() {
//    const errorEmailMessage = document.querySelector('.error-email');
//    const email = emailInput.value;
//    // регулярний вираз для перевірки електронної пошти
//    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//    if (!regex.test(email) && emailInput.value !== '@') {
//       const errorEmail = document.createElement('span');
//       errorEmail.classList.add('error-email');
//       emailInput.setAttribute('required', true);
//       errorEmail.innerHTML = "Please enter your email address correctly!";
//       emailInput.parentNode.insertBefore(errorEmail, emailInput.nextSibling);
//       emailInput.value = '';
//       emailInput.style.borderBottomColor = 'red';
//    } else {
//       errorEmailMessage.innerHTML = '';
//       errorEmailMessage.classList.remove('error-email');
//       emailInput.style.borderBottomColor = 'green';
//    }
// }

// ! ===== Відправка форми на пошту =====
jQuery(document).ready(function () {

   $("#phone").mask("+380 (99) 999-99-99");


   jQuery('.form__btn').click(function () {
      var form = jQuery(this).closest('form');

      if (form.valid()) {
         form.css('opacity', '.5');
         var actUrl = form.attr('action');

         jQuery.ajax({
            url: actUrl,
            type: 'post',
            dataType: 'html',
            data: form.serialize(),
            success: function (data) {
               form.html(data);
               form.css('opacity', '1');
               //form.find('.status').html('форма отправлена успешно');
               //$('#myModal').modal('show') // для бутстрапа
            },
            error: function () {
               form.find('.status').html('серверная ошибка');
            }
         });
      }
   });


});















// ! ===== Модальне вікно для входи в акаунт та валідація ===== 
const emailField = document.querySelector('.email-field');
const emailLabel = document.querySelector('.email-label');
const emailError = document.querySelector('.email-error');
const passwordInput = document.querySelector('.password');
const passwordLabel = document.querySelector('.password-label');
const passwordError = document.querySelector('.password-error');
const closeSignModal = document.querySelector('.order-top__close-modal')
orderLinkModal.addEventListener('click', toggleModalOrder);
closeSignModal.addEventListener('click', toggleModalOrder);

function toggleModalOrder() {
   orderModal.classList.toggle('hide');
   // document.body.classList.toggle('block');
}

function validateEmail() {
   emailLabel.style.bottom = "45px";

   if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = "Please enter a valid email address";
      emailError.classList.remove('error-email');
      emailField.style.borderBottomColor = 'red ';
      emailError.style.top = "120%";
      emailField.setAttribute('required', true);
   }
   else {
      emailError.innerHTML = "";
      emailError.classList.remove('error-email');
      emailField.style.borderBottomColor = 'green';
      emailError.style.top = "100%";
      emailField.removeAttribute('required');
      // emailLabel.style.bottom = "0px";
   }
}

function validatePassword() {
   passwordLabel.style.bottom = "45px";
   if (passwordInput.value.length < 6) {
      passwordError.innerHTML = "Password must be at least 6 characters";
      passwordError.classList.remove('error-password');
      passwordInput.style.borderBottomColor = 'red';
      passwordError.style.top = "120%";
      passwordInput.setAttribute('required', true);
   }
   else {
      passwordError.innerHTML = "";
      passwordError.classList.remove('error-password');
      passwordInput.style.borderBottomColor = 'green';
      passwordError.style.top = "100%";
      passwordInput.removeAttribute('required');
      // passwordLabel.style.bottom = "0px";
   }
}




//! ===== Accordion =====
const accordionItems = document.querySelectorAll('.order__account-row');


accordionItems.forEach(function (el) {
   el.addEventListener('click', showAccordionItemText);
});

function showAccordionItemText() {
   this.previousElementSibling.toggle("hidden");
   // this.lastElementChild.classList.toggle("rotate");
}



// accordionItems.forEach(item => {
//   const header = item.previousElementSibling;
//   header.addEventListener('click', () => {
//     item.classList.toggle('hidden');
//   });
// });





