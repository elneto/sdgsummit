import 'bootstrap';
import './style.scss';
import sdgsummitLogo from './images/sdgsummit_logo.png';
import cover from './images/cover.jpg';

import sdg1 from './images/E_SDG goals_icons-individual-rgb-01.png';
import sdg2 from './images/E_SDG goals_icons-individual-rgb-02.png';
import sdg3 from './images/E_SDG goals_icons-individual-rgb-03.png';
import sdg4 from './images/E_SDG goals_icons-individual-rgb-04.png';
import sdg5 from './images/E_SDG goals_icons-individual-rgb-05.png';
import sdg6 from './images/E_SDG goals_icons-individual-rgb-06.png';
import sdg7 from './images/E_SDG goals_icons-individual-rgb-07.png';
import sdg8 from './images/E_SDG goals_icons-individual-rgb-08.png';
import sdg9 from './images/E_SDG goals_icons-individual-rgb-09.png';
import sdg10 from './images/E_SDG goals_icons-individual-rgb-10.png';
import sdg11 from './images/E_SDG goals_icons-individual-rgb-11.png';
import sdg12 from './images/E_SDG goals_icons-individual-rgb-12.png';
import sdg13 from './images/E_SDG goals_icons-individual-rgb-13.png';
import sdg14 from './images/E_SDG goals_icons-individual-rgb-14.png';
import sdg15 from './images/E_SDG goals_icons-individual-rgb-15.png';
import sdg16 from './images/E_SDG goals_icons-individual-rgb-16.png';
import sdg17 from './images/E_SDG goals_icons-individual-rgb-17.png';
import sdg18 from './images/E_SDG_logo_with_UN_Emblem_square_rgb.png';

import imgAbout from './images/about.jpg';
import imgProgramme from './images/programme.jpg';
import imgOutcomes from './images/outcomes.jpg';
import imgDocs from './images/docs.jpg';
import imgInfo from './images/info.jpg';
import imgSide from './images/side.jpg';
import imgMedia from './images/media.jpg';
import imgAdvocates from './images/advocates.jpg';
import imgChange from './images/change.png';
import imgLazy from './images/lazy.png';

document.getElementById('imgAbout').src = imgAbout;
document.getElementById('imgProgramme').src = imgProgramme;
document.getElementById('imgOutcomes').src = imgOutcomes;
document.getElementById('imgDocs').src = imgDocs;
document.getElementById('imgInfo').src = imgInfo;
document.getElementById('imgSide').src = imgSide;
document.getElementById('imgMedia').src = imgMedia;
document.getElementById('imgAdvocates').src = imgAdvocates;
document.getElementById('imgChange').src = imgChange;
document.getElementById('imgLazy').src = imgLazy;

document.getElementById('sdgsummitLogo').src = sdgsummitLogo;
document.getElementById('cover').src = cover;

document.getElementById('sdg1').src = sdg1;
document.getElementById('sdg2').src = sdg2;
document.getElementById('sdg3').src = sdg3;
document.getElementById('sdg4').src = sdg4;
document.getElementById('sdg5').src = sdg5;
document.getElementById('sdg6').src = sdg6;
document.getElementById('sdg7').src = sdg7;
document.getElementById('sdg8').src = sdg8;
document.getElementById('sdg9').src = sdg9;
document.getElementById('sdg10').src = sdg10;
document.getElementById('sdg11').src = sdg11;
document.getElementById('sdg12').src = sdg12;
document.getElementById('sdg13').src = sdg13;
document.getElementById('sdg14').src = sdg14;
document.getElementById('sdg15').src = sdg15;
document.getElementById('sdg16').src = sdg16;
document.getElementById('sdg17').src = sdg17;
document.getElementById('emblem').src = sdg18;

var sdgkplogo = document.getElementById('sdgsummitLogo');

var $ = require('jquery');

function headerSmall () {
	sdgkplogo.className = 'sdgkplogo_small';
	$('button.navbar-toggler').addClass('mt-3').removeClass('mt-5');
	$('form#search-form').addClass('mt-3').removeClass('mt-5');
};

function headerNormal () {
	sdgkplogo.className = 'sdgkplogo_normal';
	$('button.navbar-toggler').addClass('mt-5').removeClass('mt-3');
	$('form#search-form').addClass('mt-5').removeClass('mt-3');
};

function resizeHeader () {
	if ($('body').scrollTop() > 35 || $(window).width() < 576) {
		headerSmall();
	} else {
		headerNormal();
	}
}

$(document).ready(function () {
	resizeHeader();
	var url = window.location.href.toString();
	if (url.match('#')) {
		$('#' + url.split('#')[1] + '-tab').tab('show');
	}
});

$(document).scroll(function () {
	resizeHeader();
});

$(window).resize(function () {
	resizeHeader();
});

var menuItems = ['home', 'about', 'programme', 'outcomes', 'acceleration-actions', 'documentation', 'information', 'side', 'media', 'prep', 'eng', 'latest', 'qa'];

menuItems.forEach(function (item) {
	$('a[href="#' + item + '"]').on('click', function (e) {
		e.preventDefault();
		$('#' + item + '-tab').tab('show');
		window.location.href = '#' + item;
	});
});
