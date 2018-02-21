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
	scrollPage = window.pageYOffset;

	// control element
	distanceElementTop = element.offsetTop;
	widthElement = element.offsetWidth + 'px';	

	// console.log('w: ' + widthScreen + ' / scroll: ' + scrollPage + ' / distanceElementTop: ' + distanceElementTop + ' / widthElement: ' + widthElement);

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
window.onresize = function() { setPositionElement(element); };

// event scroll
window.onscroll = function() { setPositionElement(element); };

// event load
window.onload = function() { setPositionElement(element); };
