sliderInt = 1;
sliderNext = 2;


$(document).ready(function() {
	$("#slider > img#1").fadeIn(300);//function to cause the image to appear
	startSlider();//created function outside of this one.
});

function startSlider() {
	count = $("#slider > img").size();//jquery function that counts all the elements

 loop = setInterval(function() {

	  if(sliderNext > count) {
	  	sliderNext = 1;
	  	sliderInt = 1;
	  }

      $("#slider > img").fadeOut(300);
      $("#slider > img#" + sliderNext).fadeIn(300);

      sliderInt = sliderNext;
	  sliderNext = sliderNext + 1;

	},3000)	
}


function prev() {
	newSlide = sliderInt - 1;
	showSlide(newslide);
}

function next() {
	newSlide = siderInt + 1;
	showslide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
	//stoopLoop();
}

function showSlide(id) {
	stopLoop();
	if(id > count) {
	  	 id = 1;
	    }else if(id < 1) {
	    	id = count;
	    }

      $("#slider > img").fadeOut(300);
      $("#slider > img#" + id).fadeIn(300);

      sliderInt = id;
	  sliderNext = id + 1;
	  startSlider();

	}


$("#slider > img").hover(
	function() {
		stopLoop();
	}, function () {
		startSlider();
	}
)