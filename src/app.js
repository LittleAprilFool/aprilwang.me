//require('smoothscroll-polyfill').polyfill()

function openNav() {
  var toggle= document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
  else toggle.classList.add('checked')
}

function closeNav() {
  var toggle = document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
}

function scrollTo(name) {
  var nextSection = document.querySelector(name)
  nextSection.scrollIntoView({behavior:'smooth'})
  closeNav()
}


export function addListeners() {
  // document.querySelector('.toggle-label').addEventListener('click', openNav)
  // document.querySelector('.pusher-container').addEventListener('click', closeNav) 
  document.querySelector('#enter').addEventListener('click', function(){scrollTo('#sec1')})
  document.querySelector('#nav1').addEventListener('click', function(){scrollTo('#sec1')})
  document.querySelector('#nav2').addEventListener('click', function(){scrollTo('#sec2')})
  document.querySelector('#nav3').addEventListener('click', function(){scrollTo('#sec3')})
  document.querySelector('#nav4').addEventListener('click', function(){scrollTo('#sec4')})
}
