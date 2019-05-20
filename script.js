//////////////////  Fonctionalité 1 ////////////////
let footer = document.getElementsByTagName("footer")[0];
let clique = 0
footer.addEventListener("click", logClique);
function logClique(){
  clique++;
  console.log(`Clique n° ${clique}`);
}

//////////////////  Fonctionalité 2 ////////////////

let burger = document.getElementsByClassName("navbar-toggler-icon")[0].parentNode;
burger.addEventListener("click", collapse);
function collapse() {
  navbarHeader = document.getElementById("navbarHeader");
  navbarHeader.classList.toggle("collapse");
}
//////////////////  Fonctionalité 3 ////////////////
let firstCard = document.getElementsByClassName("card")[0];
let editFirstCard = firstCard.getElementsByTagName("button")[1];
editFirstCard.addEventListener("click", textRed)
function textRed() {
  firstCard.style.color = "red";
}

//////////////////  Fonctionalité 4 ////////////////

let secondCard = document.getElementsByClassName("card")[1];
let editSecondCard = secondCard.getElementsByTagName("button")[1];
editSecondCard.addEventListener("click", textGreen)
function textGreen() {
  if (secondCard.style.color === 'green'){
  secondCard.style.color = '' ;
  }else {
    secondCard.style.color = "green";
  }
}
//////////////////  Fonctionalité 5 ////////////////
let navbar = document.getElementsByClassName("navbar")[0];
let link = document.getElementsByTagName("head")[0].getElementsByTagName("link")[0];
navbar.addEventListener('dblclick', noBootstrap);
function noBootstrap() {
  if (link.disabled) {
    link.disabled = false;
  } else {
    link.disabled = true;
  }
}
//////////////////  Fonctionalité 6 ////////////////


for (let i = 0; i < 6; i++) {
  let card = document.getElementsByClassName("card")[i];
  let viewButton = card.getElementsByTagName("button")[0];
  viewButton.addEventListener("mouseover", textHide);
  document.getElementsByClassName("card")[i].getElementsByTagName("button")[0].addEventListener("mouseover", textHide);

  function textHide() {
    card.getElementsByClassName('card-text')[0].classList.toggle("collapse");
    let image = card.getElementsByTagName("img")[0];
    if (card.getElementsByClassName('card-text')[0].classList.contains("collapse")) {
      let width = image.style.width = "20%" ;
      image.style.height = width;
    } else {
      let width = image.style.width = "100%" ;
      image.style.height = width;
    }
  }
}
//////////////////  Fonctionalité 7 ////////////////
let  next =  document
    .getElementsByClassName('jumbotron-heading')[0]
    .parentNode
    .getElementsByTagName('a')[1];
next.addEventListener('click',moveNext);
function moveNext() {
  let last = document.getElementsByClassName("card")[5].parentNode;
  last.parentNode.insertBefore(last, last.parentNode.firstChild);
}


//////////////////  Fonctionalité 8 ////////////////
let  previous =  document
    .getElementsByClassName('jumbotron-heading')[0]
    .parentNode
    .getElementsByTagName('a')[0];
previous.addEventListener('click', movePrevious);
function movePrevious(ev) {
  ev.preventDefault();
  let first = document.getElementsByClassName("card")[0];
  first.parentNode.parentNode.appendChild(first.parentNode);
}

//////////////////  Fonctionalité 9 ////////////////

let logo = document.getElementsByClassName('navbar-brand')[0];
logo.addEventListener('keypress', function(e) {
  let body = document.getElementsByTagName('body')[0];
  body.classList = "";
  switch (e.key) {
    case 'a':
      body.classList.add("col-4");
      break;
    case 'b':
      body.classList = "";
      break;
    case 'y':
      body.classList.add("col-4", "offset-4");
      break;
    case 'p':
      body.classList.add("col-4", "offset-8");
      break;
  }
});











































//0
