'use strict';

function justabs(tabGroup) {
  // Collecting initial data
  let tabTabsContainer = document.querySelectorAll("[data-tab=\"".concat(tabGroup, "\"].just-tabs"));
  let tabPanelsContainer = document.querySelectorAll("[data-panel=\"".concat(tabGroup, "\"].just-tabs-panels")); // Checking data

  if (tabTabsContainer[1] || tabPanelsContainer[1]) {
    throw new Error('Please use different name for a new set of tabs');
  } // Collecting data inside data


  let tabTabs = tabTabsContainer[0].children;
  let tabPanels = tabPanelsContainer[0].children; // Adding listeners

  for (let item of tabTabs) {
    let target = item.getAttribute('data-target');
    item.addEventListener("click", event => {
      toggleTab(target);
    });
  } // Toggle Handler


  function toggleTab(target) {
    for (let item of tabTabs) {
      item.classList.remove('active');

      if (item.getAttribute('data-target') === target) {
        item.classList.add('active');
      }
    }

    for (let item of tabPanels) {
      item.classList.remove('active');

      if (item.getAttribute('data-name') === target) {
        item.classList.add('active');
      }
    }
  }
}