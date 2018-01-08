	var slider = 0;
	showSlide(slider);
	var slideInterval = setInterval(showSlide, 4500);

	function showSlide(n){
	var slide = document.getElementsByClassName("slider-box");
	
	for(var i=0; i<slide.length;i++){
		slide[i].style.display = 'none';
	}
	slider++;
	
	if(slider>slide.length){slider =1;}

	slide[slider-1].style.display = 'block';
	};


	var playing = true;
	var pause = document.querySelectorAll(".btn");

	function nextSlide(n){
    	showSlide(slider+1);
	}

	function previousSlide(n){
	    showSlide(slider-1);
	}

	function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
	}

	function playSlideshow(){
    playing = true;
    slideInterval = setInterval(showSlide,4500);
	}

	pause.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
	};


	var next = document.getElementById('next');
	var previous = document.getElementById('previous');

	next.onclick = function(){
	    pauseSlideshow();
	    nextSlide();
	    playSlideshow();

	};
	previous.onclick = function(){
	    pauseSlideshow();
	    previousSlide();
	    playSlideshow();
	};