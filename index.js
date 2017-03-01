'use strict';
/**
 * @desc Small utility for manipulating a Pure.CSS-Component tab.
 * @param selector
 * @returns {{setActive: setActiveTab}}
 */
module.exports = function Tabs(selector) {
  var tabs = document.querySelector(selector);
  var tabSelectors = tabs.querySelectorAll('.accordion-section-selector');

  return {

    /**
     * @desc Sets the active tab, based on tab index
     * @param tabNum
     */
    setActiveTab: function setActive(tabNum) {
      if (tabNum < tabSelectors.length) {
        tabSelectors[tabNum].checked = true;
      }
    }

  };

};