import $ from 'jquery';

const $content = $('#content')
const $namescontainer = $('.names_wrapper')
const $name = $('.name')
const $imgContainer = $('.image_big')


const Dialogues = {
  _ : '',
  init: function() {
	Dialogues._ = this;
	var scrolled = 0;
	$name.each(function(){
		Dialogues.initVisibility($(this));
	});
	$(window).on('resize', function(){
		$name.each(function(){
			Dialogues.initVisibility($(this));
		});		
	})
  	$namescontainer.on('wheel', function(event){
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		   if( (($namescontainer.find('.name').first().offset().top)) <= ($namescontainer.offset().top)){
	       	scrolled += 3;
	       }
	    }
	    else {
		   if( (($namescontainer.find('.name').last().offset().top + $namescontainer.find('.name').last().height())) >= ($namescontainer.offset().top + $namescontainer.height())){
			scrolled -= 3;
	       }
	    }
	    $name.css('transform', 'translateY('+scrolled+'px)');
	    $namescontainer.find('.name').each(function(e){
		    Dialogues.isScrolledIntoEl($(this));
	    });
  	});
  	
  	$name.on('mouseenter', function(){
	  var src = $(this).find('img').attr('src');
	  $imgContainer.css('background-image', "url('"+src+"')");
  	});
  },
  isScrolledIntoEl: function (elem){
		Dialogues.initVisibility(elem);
	},
	initVisibility: function(elem){
	    var elementHeight = $namescontainer.height();

	    var elemTop = elem.offset().top - $namescontainer.offset().top + elem.height();
		//hide not visible element on bottom
		if(elemTop > elementHeight ){
			elem.addClass('hide').removeClass('show');
		}else{
			elem.removeClass('hide').addClass('show');
		}
	}
}

export default Dialogues