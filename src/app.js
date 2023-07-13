function clean(dom) {
  if (dom && dom.classList.contains('hide')==false)
    dom.classList.add('hide')
}

function cleanAll() {
  const home = document.querySelector('.home')
  const publication = document.querySelector('.publication')
  const cv = document.querySelector('.cv')
  const team = document.querySelector('.team')
  clean(home)
  clean(publication)
  clean(cv)
  clean(team)
  const button = document.querySelector("#button-venn");
  if(button && button.firstChild) button.removeChild(button.firstChild);
}

function setVisible(dom) {
  if(dom) dom.classList.remove('hide')
}

export function loadHome(){
  let home = document.querySelector('.home')
  cleanAll()
  setVisible(home)
  const button = document.querySelector("#button-venn");
  makeCircle(button);
}

export function loadSection(name){
  const section = document.querySelector(name)
  cleanAll()
  setVisible(section) 
}