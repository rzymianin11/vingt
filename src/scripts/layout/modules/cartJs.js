import $ from 'jquery';
//import 'shopify-cartjs/dist/rivets-cart.min.js';
//import CartJS from 'shopify-cartjs';
//import 'shopify-cartjs/dist/rivets-cart.js';

window.jQuery = $;         

const $drawer = $('#CartDrawer')       
                
const cart = {
  init: function() {
    var _ = this;
	
	CartJS.init(window.cartJson, {
	      dataAPI: true,
		  moneyFormat: window.theme.moneyFormat,
		  moneyWithCurrencyFormat: '€{{amount}}',
	});
	
	$('[data-submit-button]').on('click', function(){
		$drawer.css('right', 0);
	});
	
	$('.qtyplus').on('click', function(){
		var targetId = $(this).data('idclick');
		var input = document.getElementById(targetId);
		var textInt = parseInt($(input).val());
		if(isNaN(textInt))
	    {
	        textInt = 0;
	    }
	    $(input).val((textInt+1));
	});
	
	$('.qtyminus').on('click', function(){
		var targetId = $(this).data('idclick');
		var input = document.getElementById(targetId);
		var textInt = parseInt($(input).val());
		if(isNaN(textInt))
	    {
	        textInt = 0;
	    }
	    if((textInt-1) > 0){
	    	$(input).val((textInt-1));
	    }
	});
	
	$('body').on('blur', '#dcodeInput', function(){
			$('#dcodeSubmit').trigger('click');
	});

/*
	$('.cart__remove').on('click', function(){
		var itemid = $(this).attr('itemid');
        CartJS.removeItemById($(this).attr('itemid'), {

            // Define a success callback to display a success message.
            "success": function(data, textStatus, jqXHR) {
	            $('.item[itemid="'+itemid+'"]').fadeOut(function(){
		            $(this).remove();
	            });
	          //  $('.totalpricecart').html(data.total_price);
            },

            // Define an error callback to display an error message.
            "error": function(jqXHR, textStatus, errorThrown) {
	            console.log('porazka');
            }

        });
	});
*/

  },
	TextBox_AddToIntValue: function(targetId,addToValue){
	    var input = document.getElementById(targetId);
	    var textInt = parseInt(input.value);
	    if(isNaN(textInt))
	    {
	        textInt = 0;
	    }
	    input.value = textInt + addToValue;
	}
}

export default cart