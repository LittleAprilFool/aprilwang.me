function clean(dom) {
  if (dom && dom.classList.contains('hide')==false)
    dom.classList.add('hide')
}

function cleanAll() {
  const home = document.querySelector('.home')
  const publication = document.querySelector('.publication')
  const cv = document.querySelector('.cv')
  const join = document.querySelector('.join')
  const peach = document.querySelector('.peach')
  const teaching = document.querySelector('.teaching')
  clean(home)
  clean(publication)
  clean(cv)
  clean(join)
  clean(peach)
  clean(teaching)
  const button = document.querySelector("#button-venn");
  if(button && button.firstChild) button.removeChild(button.firstChild);
}

function setVisible(dom) {
  if(dom) dom.classList.remove('hide')
}

function initProjectTrigger() {
  const triggerBtn = document.querySelector('.example-project-trigger');
  const content = document.querySelector('.example-project-content');
  if(content)
    content.classList.add('hide');
  if(triggerBtn){
    triggerBtn.removeEventListener('click', onToggleExampleProject);
    triggerBtn.addEventListener('click', onToggleExampleProject)
  }
}

function onToggleExampleProject(){
  const content = document.querySelector('.example-project-content');
  if(content)
  content.classList.toggle('hide');
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
  initProjectTrigger()
}