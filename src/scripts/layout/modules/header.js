import $ from 'jquery';

const $content = $('#content')
const $body = $('body')
const $header = $('#header')


const Header = {
  init: function() {
    var _ = this;
    _.navToggle = $('[data-toggle="navigation"]')
    _.topBarDismiss = $('[data-dismiss="header-top-bar"]')

    _.topBarDismiss.on('click', function () {
      $header.find('.header-top-bar').slideUp(200);
      return false
    })

  },
  hide: function() {
    var _ = this;
    $body.removeClass('navigation-open')
    _.navToggle.removeClass('open')
  }
}

export default Header