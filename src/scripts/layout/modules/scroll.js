import $ from 'jquery';
const $body = $('body')

const Scroll = {
  scrolled: 0,
  init: function () {
    let _ = this;
  },
  handle: function (scrolled) {
    let _ = this;
    _.scrolled = scrolled

    if (_.scrolled > 0) {
      $body.addClass('scrolled')
    } else {
      $body.removeClass('scrolled')
    }
  }
}

export default Scroll
