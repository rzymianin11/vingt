import $ from 'jquery';
import appear from "jquery.appear"

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
    }
}

export default Animations