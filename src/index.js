function activatePanel (tabGroup) {

  // Collecting Data

  let tabTabsContainer = document.querySelectorAll(`[data-tab="${tabGroup}"]#just-tabs`)
  let tabPanelsContainer = document.querySelectorAll(`[data-panel="${tabGroup}"]#just-tabs-panels`)
  let tabTabs = tabTabsContainer[0].children
  let tabPanels = tabPanelsContainer[0].children

  // Adding listeners

  if (tabTabsContainer[1] || tabPanelsContainer[1]) {
    return
  } else {

    for (let item of tabTabs) {
      let target = item.getAttribute('data-target')

      item.addEventListener("click", toggleTab(target))
    }
  }

  function toggleTab (target) {
    for (let item of tabPanels) {
      item.classList.remove('active')

      if (item.getAttribute('data-name') === target) {
        item.classList.add('active')
        console.log(item)
      }
    }
  }
}

activatePanel('panelTabs')

