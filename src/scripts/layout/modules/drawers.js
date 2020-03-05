import $ from 'jquery';

const $content = $('#content')
const $body = $('body')
const $drawer = $('#CartDrawer')
const $right = $drawer.css('right');


const Drawers = {
  init: function() {
	  $('.js-drawer-open-right').attr('aria-controls', 'CartDrawer').attr('aria-expanded', 'false');
	  $('.js-drawer-open-left').attr('aria-controls', 'NavDrawer').attr('aria-expanded', 'false');
	  $('.js-drawer-open-top').attr('aria-controls', 'SearchDrawer').attr('aria-expanded', 'false');
	  
	  $('.js-drawer-open-right').on('click', function(e){
		 e.preventDefault();
		 $drawer.css('right', 0);
	  });
	  
	  $('.drawer__close-button').on('click', function(e){
		 e.preventDefault();
		 $drawer.css('right', $right);
	  });

  }
}

export default Drawers