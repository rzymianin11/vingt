import $ from 'jquery';

import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}


/* -----------------------------------------------------------------------------

VINGT QUATRE - Template

File:           JS Core
Author:         Suelo (Piotr Osmola)

-------------------------------------------------------------------------------- */
import Images from './modules/images'
import Animations from './modules/animations'
import Header from './modules/header'
import Scroll from './modules/scroll'
import SingleProduct from './modules/singleproduct'
import Drawers from './modules/drawers'
import cartJs from './modules/cartJs'
import Dialogues from './modules/dialogues'


let scrolled

$(document).ready(function() {
  scrolled = $(window).scrollTop()

  Animations.init()
  Header.init()
  Images.init()
  Scroll.init()
  SingleProduct.init()
  Drawers.init();
  cartJs.init();
  Dialogues.init();
})

$(window).on('scroll', () => {
  scrolled = $(window).scrollTop()
  Scroll.handle(scrolled)
})