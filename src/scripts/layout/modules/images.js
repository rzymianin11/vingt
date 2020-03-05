import $ from 'jquery';
import appear from "jquery.appear"
import imagesLoaded from "imagesloaded"

imagesLoaded.makeJQueryPlugin($)

const Images = {
    $item: $('.bg-image'),
    init: function() {
        let _ = this

        _.$item.each(function(){
            let $self = $(this)
            let src = $self.data('src')
            let highRes = $self.data('src-2x')

            if (highRes && window.devicePixelRatio >= 2) {
                $self.css('background-image', `url(${highRes})`)
            } else {
                $self.css('background-image', `url(${src})`)
            }
            $self.wrap('<div class="bg-image-container"></div>')
            $self.removeAttr('data-src').removeAttr('data-src-2x')
            if (!$self.data('prevent-fade')) {
                $self.imagesLoaded({
                    background: true
                }, function(instance, image) {
                    $self.addClass('loaded')
                })
            } else {
                $self.addClass('loaded')
            }
        })
    }
}

export default Images