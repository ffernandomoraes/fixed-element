// screen control
let widthScreen = 0,
scrollPage = 0;

// element select
const element = document.querySelector('.conteudo-right');

// control element
let widthElement = 0,
distanceElementTop = 0;
var initialDistanceTop = element.offsetTop;

// control container
var containerElement = document.querySelector('.container');
let rightElement = 0;

// function set position
function setPositionElement(element, container){
	widthScreen = document.body.clientWidth || window.innerWidth;
	scrollPage = document.documentElement.scrollTop || window.scrollY;

	// control element
	distanceElementTop = element.offsetTop;
	widthElement = element.offsetWidth + 'px';	

	// container
	containerElement = container || document.querySelector('.container');
	rightElement = (widthScreen - containerElement.offsetWidth) / 2;

	if(scrollPage > (initialDistanceTop - 15) && widthScreen > 980) {
		element.classList.add('fixed');
		element.style.width = widthElement;
		element.style.right = rightElement + 'px';
	} else {
		element.classList.remove('fixed');
		element.removeAttribute("style");
	}
}

// event resize
document.getElementsByTagName("body")[0].onresize = function() { setPositionElement(element); };

// event scroll
document.getElementsByTagName("body")[0].onscroll = function() { setPositionElement(element); };

// event load
document.getElementsByTagName("body")[0].onload = function() { setPositionElement(element); };
