'use strict';
const email = document.querySelector('#email').value;
const errorImg = document.querySelector('.error__img');
const message = document.querySelector('.message');
const btn = document.querySelector('.btn');

// Hide Error message and Error Image
errorImg.classList.add('hidden');
message.classList.add('hidden');

// Email regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', function () {
  // Display error message and error image when:
  // 1. input has no value
  // 2. email address is not formatted correctly
  if (!emailRegex.test(email) || email === '') {
    errorImg.classList.remove('hidden');
    message.classList.remove('hidden');
  } else {
    errorImg.classList.add('hidden');
    message.classList.add('hidden');
  }
});
