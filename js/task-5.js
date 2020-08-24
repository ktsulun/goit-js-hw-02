function checkForSpam(str) {
  'use strict';

  return str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
    ? true
    : false;
}
