//require('smoothscroll-polyfill').polyfill()
import Typing from './typing.js';
console.log(Typing);
var page = 0;
var onScroll = false;
const pageMin = 0;
const pageMax = 3;
var typed = false;

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
function typingEnd() {
  setTimeout(function(){
    var rest = document.querySelector('#rest');
    rest.style.opacity = "1";
  }, 500)
}

function scrollTo(id) {
  if((id<pageMin)|(id >pageMax))
    return;
  var nextSection = document.querySelector('#sec'+id)
  nextSection.scrollIntoView({behavior:'smooth'})
  var preDot = document.querySelector('.current')
  if (preDot) preDot.classList.remove('current')
  page = id;
  console.log(page);
  var theDot = document.querySelector('#nav'+id)
  theDot.classList.add('current')
  if(page == 3 && typed == false) {
    var typing = new Typing({
      source: document.getElementById('source'),
      output: document.getElementById('output'),
      delay: 80,
      done: function() {typingEnd()}
    })
    typing.start();
    typed = true;
  }
//  closeNav()
}

function resetOnScroll() {
  onScroll = false;
}

function scrollFunc(e) {
  e = e || window.event;
  if(!onScroll) {
    onScroll = true;
    scrollTo(page - Math.sign(e.wheelDelta));
    setTimeout(resetOnScroll,1000);
  }
  if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
}


function drawCat(){
  var meow = document.querySelector("#meow");
  meow.style.left = Math.floor(Math.random() * 100).toString() + '%';
  meow.style.top = Math.floor(Math.random() * 100).toString() + '%';
  meow.style.color = "#bfbfbf";
  setTimeout(function(){meow.style.color = "white"}, 1000);
}

export function addListeners() {
  // document.querySelector('.toggle-label').addEventListener('click', openNav)
  // document.querySelector('.pusher-container').addEventListener('click', closeNav) 
  // document.querySelector('#enter').addEventListener('click', function(){scrollTo(1)})
  // document.querySelector('#nav0').addEventListener('click', function(){scrollTo(0)})
  // document.querySelector('#nav1').addEventListener('click', function(){scrollTo(1)})
  // document.querySelector('#nav2').addEventListener('click', function(){scrollTo(2)})
  // document.querySelector('#nav3').addEventListener('click', function(){scrollTo(3)})
  // document.querySelector('#cat').addEventListener('click', function(){drawCat()});
  // document.addEventListener('onmousewheel',scrollFunc, false);
  // window.onmousewheel = document.onmousewheel = scrollFunc;
}
