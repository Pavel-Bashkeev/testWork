
import documentReady from './modules/documentReady.js';
import lazyImages from './modules/lazyImages.js';
import * as webpSupportFunctions from './modules/webpSupport.js';
import { choiceStateCard } from './components/choiceState.js';
import { hoverFirst } from './components/hover.js';

documentReady(() => {
  lazyImages();
  webpSupportFunctions.isWebp();

  choiceStateCard();
  hoverFirst()
})