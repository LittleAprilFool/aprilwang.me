function clean(dom) {
  if (dom && dom.classList.contains('hide')==false)
    dom.classList.add('hide')
}

function cleanAll() {
  var home = document.querySelector('.home')
  var publication = document.querySelector('.publication')
  var cv = document.querySelector('.cv')
  clean(home)
  clean(publication)
  clean(cv)
  const button = document.querySelector("#button1");
  if(button && button.firstChild) button.removeChild(button.firstChild);
}

function setVisible(dom) {
  if(dom) dom.classList.remove('hide')
}

export function loadHome(){
  var home = document.querySelector('.home')
  cleanAll()
  setVisible(home)
  const button = document.querySelector("#button1");
  makeCircle(button);
}

export function loadPublication(){
  var publication = document.querySelector('.publication')
  cleanAll()
  setVisible(publication) 
}


export function loadCV(){
  console.log('load cv')
  var cv = document.querySelector('.cv')
  cleanAll()
  setVisible(cv)
}