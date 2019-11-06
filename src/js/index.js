'use strict'

function justabs (options) {
  const {
    tabGroup = '',
    togglable = false
  } = options

  // Collecting initial data
  let tabTabsContainer = document.querySelectorAll(`[data-tab="${tabGroup}"].justabs`)
  let tabPanelsContainer = document.querySelectorAll(`[data-panel="${tabGroup}"].justabs-panels`)

  // Checking data
  if (tabTabsContainer[1] || tabPanelsContainer[1]) {
    throw new Error('Please use different name for a new set of tabs')
  }

  // Collecting data inside data
  let tabTabs = tabTabsContainer[0].children
  let tabPanels = tabPanelsContainer[0].children

  // Checking for active duplicates
  let counter1 = 0
  let counter2 = 0

  for (let item of tabTabs) {
    if (item.classList.contains('active')) {
      counter1++
    }
    if (counter1 > 1) {
      counter = 0
      throw new Error('Please do not activate multiple tabs at once. Remove the extra active classes')
    }
  }

  for (let item of tabPanels) {
    if (item.classList.contains('active')) {
      counter2++
    }
    if (counter2 > 1) {
      counter = 0
      throw new Error('Please do not activate multiple panels at once. Remove the extra active classes')
    }
  }

  // Adding listeners
  for (let item of tabTabs) {
    let target = item.getAttribute('data-target')

    item.addEventListener("click", (event) => {
      toggleTab(target)
    })
  }

  // Toggle Handler
  function toggleTab (target) {

    if (togglable === false) {
      for (let item of tabTabs) {
        item.classList.remove('active')

        if (item.getAttribute('data-target') === target) {
          item.classList.add('active')
        }
      }

      for (let item of tabPanels) {
        item.classList.remove('active')

        if (item.getAttribute('data-name') === target) {
          item.classList.add('active')
        }
      }
    } else {
      for (let item of tabTabs) {
        if (item.getAttribute('data-target') !== target) {
          item.classList.remove('active')
        }

        if (item.classList.contains('active')) {
          item.classList.remove('active')
        } else if (item.getAttribute('data-target') === target) {
          item.classList.add('active')
        }
      }

      for (let item of tabPanels) {
        if (item.getAttribute('data-name') !== target) {
          item.classList.remove('active')
        }

        if (item.classList.contains('active')) {
          item.classList.remove('active')
        } else if (item.getAttribute('data-name') === target) {
          item.classList.add('active')
        }
      }
    }
  }
}

export default justabs
