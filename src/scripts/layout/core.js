/* -----------------------------------------------------------------------------

VINGT QUATRE - Template

File:           JS Core
Author:         Suelo (Piotr Osmola)

-------------------------------------------------------------------------------- */

import Images from './modules/images'
import Animations from './modules/animations'
import Header from './modules/header'


$(document).ready(function() {
  Animations.init()
  Header.init()
  Images.init()
})
