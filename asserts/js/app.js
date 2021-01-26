$(function () {

	var header= $("#header"),
	introH= $("#intro").innerHeight(),
	scrollOffset= $(window).scrollTop();


	chekScroll(scrollOffset);
	$(window).on("scroll", function(){
		scrollOffset=$(this).scrollTop();
		chekScroll(scrollOffset)
	});


	function chekScroll(scrollOffcet){
		scrollOffset=$(this).scrollTop();
			if(scrollOffset>=introH){
				header.addClass('fixed');
			}
			else{
				header.removeClass('fixed')
			}
	}


	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this= $(this),
				blockId= $this.data('scroll'),
				blockOffset= $(blockId).offset().top;
		$("#nav active").removeClass('active');
		$this.addClass('active');
		$("html, body").animate({scrollTop: blockOffset},500)
	});


	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();
		$(this).toggleClass('active')
		$("#nav").toggleClass('active');
		$("#header").toggleClass('active');
	});


	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();
		var $this= $(this),
				blockId= $this.data('collapse');
		$this.toggleClass('active');
	});


	$(".data-slider").slick({
		arrows: true,
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


});