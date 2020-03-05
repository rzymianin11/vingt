import $ from 'jquery';
import appear from "jquery.appear"

$.fn.isInViewport = function(offset) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

//    return elementBottom > viewportTop && elementTop < viewportBottom;
    return ( elementBottom > viewportTop - offset ) && ( elementTop < viewportBottom + offset );
};

const Animations = {
    init: function() {
        var dy = -$(window).height()/6;
        var $content = $('#content');

        // Animation - not image
        $('[data-animation]:not(img), .animate', $content).appear(function() {
            $(this).each(function(){
                var $target =  $(this);
                var delay = $target.data('animation-delay');
                setTimeout(function() {
                    $target.addClass($target.data('animation')).addClass('visible')
                }, delay);
            });
        }, { accY: dy });

        // Animation - image (wait to load)
        $content.imagesLoaded().progress(function(instance, image) {
            var $img = $(image.img);
            if($img.data('animation')) {
                $img.appear(function() {
                    var delay = $img.data('animation-delay');
                    setTimeout(function() {
                        $img.addClass($img.data('animation')).addClass('visible')
                    }, delay);
                }, { accY: dy });
            }
        });
    },
	inViewport: function(){
		$(window).on('scroll resize', function() {
		   var offset = -$(window).height()/5;
		   $('[data-appear]').each( function(i){
		   		if(typeof attr !== typeof undefined && attr !== false){
			   		offset = $(this).data('offset');
		   		}
			    if ($(this).isInViewport(offset)) {
				    console.log('inVIEWPORT');
					if($(this).data('animate') == "allin"){
						var elem = $(this).find('[data-anim]');
					}
					$(elem).each(function(){
						var type=$(this).data('anim');
						console.log(type);
						var typeout = type.replace('In', 'Out');
						if(typeof $(this).data('delay') != 'undefined'){
							var delay = $(this).data('delay');
						}else{
							var delay = 0;
						}
						var el = $(this);
						setTimeout(function(){
							el.removeClass(typeout);
							el.addClass('animated visible '+type);
						}, delay);
					});
			    } else {
/* ANIMATION OF DISSAPEARING */
					if($(this).data('animate') == "allin"){
						var elem = $(this).find('[data-anim]');
					}
					$(elem).each(function(){
						var type=$(this).data('anim');
						var typeout = type.replace('In', 'Out');
						if(typeof $(this).data('delay') != 'undefined'){
							var delay = $(this).data('delay');
						}else{
							var delay = 0;
						}
						var el = $(this);
						if($(this).get(0).hasAttribute('data-reversonlythis')){
							setTimeout(function(){
								$(el).removeClass(type);
								$(el).addClass(typeout);
							}, delay);
						}
					});
			    }
		    }); 
		});
	}
}

export default Animations