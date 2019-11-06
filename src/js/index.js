'use strict'

class Justabs {
  constructor ( tabGroup, togglable = false ) {

    this.tabGroup = tabGroup

    this.togglable = togglable

    this.tabTabsContainer = this._captureContainers().tabTabsContainer

    this.tabPanelsContainer = this._captureContainers().tabPanelsContainer

    this.tabTabs = this.tabTabsContainer.children || []

    this.tabPanels = this.tabPanelsContainer.children || []

    this._addListeners()

    this._testActiveDuplicates()
  }

  _captureContainers () {
    let tabTabsContainer = document.querySelectorAll(`[data-tab="${this.tabGroup}"].justabs`)
    let tabPanelsContainer = document.querySelectorAll(`[data-panel="${this.tabGroup}"].justabs-panels`)

    // Checking data
    if (tabTabsContainer[1] || tabPanelsContainer[1]) {
      throw new Error('Please use different name for a new set of tabs')
    }

    tabTabsContainer = tabTabsContainer[0]
    tabPanelsContainer = tabPanelsContainer[0]

    return {
      tabTabsContainer,
      tabPanelsContainer
    }
  }

  _addListeners () {
    for (let item of this.tabTabs) {
      let target = item.getAttribute('data-target')

      item.addEventListener("click", (event) => {
        this.toggleTab(target)
      })
    }
  }

  _testActiveDuplicates () {
    let counter1 = 0
    let counter2 = 0

    for (let item of this.tabTabs) {
      if (item.classList.contains('active')) {
        counter1++
      }
      if (counter1 > 1) {
        counter = 0
        throw new Error('Please do not activate multiple tabs at once. Remove the extra active classes')
      }
    }

    for (let item of this.tabPanels) {
      if (item.classList.contains('active')) {
        counter2++
      }
      if (counter2 > 1) {
        counter = 0
        throw new Error('Please do not activate multiple panels at once. Remove the extra active classes')
      }
    }
  }

  toggleTab (target) {
    if (this.togglable === false) {
      for (let item of this.tabTabs) {
        item.classList.remove('active')

        if (item.getAttribute('data-target') === target) {
          item.classList.add('active')
        }
      }

      for (let item of this.tabPanels) {
        item.classList.remove('active')

        if (item.getAttribute('data-name') === target) {
          item.classList.add('active')
        }
      }
    } else {
      for (let item of this.tabTabs) {
        if (item.getAttribute('data-target') !== target) {
          item.classList.remove('active')
        }

        if (item.classList.contains('active')) {
          item.classList.remove('active')
        } else if (item.getAttribute('data-target') === target) {
          item.classList.add('active')
        }
      }

      for (let item of this.tabPanels) {
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
