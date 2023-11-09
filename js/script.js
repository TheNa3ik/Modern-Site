const signupBtn = document.querySelector('#btn-sign-up');
const registerDiv = document.querySelector('.sign-up');
const expandupSignupMenu = document.querySelector('.expandUp-signup-menu');
const loginDiv = document.querySelector('.sign-in');

signupBtn.addEventListener('click', ()=> {
  registerDiv.classList.add('active');
  expandupSignupMenu.classList.add('active');
  loginDiv.classList.add('unactive')
});
