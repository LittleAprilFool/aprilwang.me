function openNav() {
  var toggle= document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
  else toggle.classList.add('checked')
}

function closeNav() {
  console.log('666')
  var toggle = document.querySelector('.container')
  if(toggle.classList.contains('checked'))
    toggle.classList.remove('checked')
}

export function addListeners() {
  document.querySelector('.toggle-icon').addEventListener('click', openNav)
  document.querySelector('.pusher-container').addEventListener('click', closeNav) 
}
