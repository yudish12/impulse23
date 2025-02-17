///////////////////////// Menu Toggle /////////////////////////////////

const menuToggle = document.querySelectorAll('.menu-heading');
const overview = document.getElementById('overview');
const themes = document.getElementById('themes');
const schedule = document.getElementById('schedule');
const prizes = document.getElementById('prizes');

// const section = Array.prototype.slice.call(document.querySelectorAll('.section'));
var qualSelector = document.querySelector('.menu-heading');
var qualContent = overview;

// for (var i = 0; i < menuToggle.length; i++) {
// 	menuToggle[i].addEventListener('click', function() {
// 		qualSelector.classList.remove('selected');
// 		this.classList.add('selected');
// 		qualSelector = this;

// 		section.forEach((current) => {
// 			console.log(current);
// 			qualContent.classList.add('hide');
// 			current.classList.remove('hide');
// 			qualContent = current;
// 		});
// 	});
// }

menuToggle[0].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	overview.classList.remove('hide');
	qualContent = overview;
});

menuToggle[1].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	themes.classList.remove('hide');
	qualContent = themes;
});

menuToggle[2].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	schedule.classList.remove('hide');
	qualContent = schedule;
});

menuToggle[3].addEventListener('click', function() {
	qualSelector.classList.remove('selected');
	this.classList.add('selected');
	qualSelector = this;

	qualContent.classList.add('hide');
	qualContent.classList.maxHeight = 0;
	prizes.classList.remove('hide');
	qualContent = prizes;
});

////////////////// FAQ ///////////////
const quesConts = document.querySelectorAll('.faq-others .ques-cont');
let open = -1;
quesConts.forEach((cont, i) => {
	const data = cont.querySelector('p');
	cont.addEventListener('click', function() {
		if (open >= 0) {
			const openData = quesConts[open].querySelector('p');
			quesConts[open].classList.remove('open');
			openData.style.maxHeight = 0 + 'px';
		}
		if (open !== i || open === -1) {
			data.style.maxHeight = data.scrollHeight + 'px';
			cont.classList.add('open');
			open = i;
		} else {
			open = -1;
		}
	});
});

const uiux = document.getElementById('uiux');
uiux.addEventListener('click', function() {
	window.location.href = './uiux.html';
});
const valo = document.getElementById('valo');
valo.addEventListener('click', function() {
	window.location.href = './valo.html';
});
const aiml = document.getElementById('aiml');
aiml.addEventListener('click', function() {
	window.location.href = './aiml.html';
});
const cp = document.getElementById('cp');
cp.addEventListener('click', function() {
	window.location.href = './cp.html';
});
