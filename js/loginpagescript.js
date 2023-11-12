const signupBtn = document.querySelector('#btn-sign-up');
const registerDiv = document.querySelector('.sign-up');
const expandupInputMenu = document.querySelector('.expandUp-input-menu');
const expandupAlrMenu = document.querySelector('.expandUp-alreadyReg-menu');
const loginDiv = document.querySelector('.sign-in');
const alrSignBtn = document.querySelector('#alr-sign-in')

signupBtn.addEventListener('click', ()=> {
  registerDiv.classList.add('active');
  expandupInputMenu.classList.add('active');
  expandupAlrMenu.classList.add('active');
  loginDiv.classList.add('unactive');

});

alrSignBtn.addEventListener('click', ()=> {
  registerDiv.classList.remove('active');
  expandupInputMenu.classList.remove('active');
  expandupAlrMenu.classList.remove('active');
  loginDiv.classList.remove('unactive');
})