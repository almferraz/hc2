//localStorage
const cnome = document.querySelector('input[name=nome]');
const cemail = document.querySelector('input[name=email]');
const btEuQuero = document.querySelector('button[name=btEuQuero]');

btEuQuero.onclick = function () {
  localStorage.setItem(['nome'], cnome.value);
  localStorage.setItem(['email'], cemail.value);
};
