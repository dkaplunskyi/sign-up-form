const submit = document.querySelector('#submit');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');

submit.addEventListener('click', (e) => {
  if (password.value !== password2.value || password.value === '') {
    e.preventDefault();
    password.nextElementSibling.style.display = 'block';

    password.classList.add('errorMsgStyle');
    password2.classList.add('errorMsgStyle');

  } else {
    password.nextElementSibling.style.display = 'none';

    password.classList.remove('errorMsgStyle');
    password2.classList.remove('errorMsgStyle');
  }

  if (firstName.value === '') {
    firstName.nextElementSibling.style.display = 'block';
    firstName.classList.add('errorMsgStyle');
  }

  if (lastName.value === '') {
    lastName.nextElementSibling.style.display = 'block';
    lastName.classList.add('errorMsgStyle');
  }

  if (email.value === '') {
    email.nextElementSibling.style.display = 'block';
    email.classList.add('errorMsgStyle');
  }

  if (phoneNumber.value === '') {
    phoneNumber.nextElementSibling.style.display = 'block';
    phoneNumber.classList.add('errorMsgStyle');
  }

});

password.addEventListener('keydown', () => {
  password.nextElementSibling.style.display = 'none';
  password.classList.remove('errorMsgStyle');
  password2.classList.remove('errorMsgStyle');
});

password2.addEventListener('keydown', () => {
  password.nextElementSibling.style.display = 'none';
  password.classList.remove('errorMsgStyle');
  password2.classList.remove('errorMsgStyle');
});

firstName.addEventListener('keydown', () => {
  firstName.nextElementSibling.style.display = 'none';
  firstName.classList.remove('errorMsgStyle');
});

lastName.addEventListener('keydown', () => {
  lastName.nextElementSibling.style.display = 'none';
  lastName.classList.remove('errorMsgStyle');
});

email.addEventListener('keydown', () => {
  email.nextElementSibling.style.display = 'none';
  email.classList.remove('errorMsgStyle');
});

phoneNumber.addEventListener('keydown', () => {
  phoneNumber.nextElementSibling.style.display = 'none';
  phoneNumber.classList.remove('errorMsgStyle');
});