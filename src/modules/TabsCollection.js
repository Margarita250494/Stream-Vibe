import { getParams } from "@/utils/getParams"
import { pixToRem } from "@/utils/pixToRem"
import BaseComponent from "@/modules/generic/BaseComponent"

const rootSelector = "[data-js-tabs]"

class Tabs extends BaseComponent {
  selectors = {
    root: rootSelector,
    navigation: "[data-js-tabs-navigation]",
    button: "[data-js-tabs-button]",
    content: "[data-js-tabs-content]",
  }

  stateClasses = {
    isActive: "is-active",
  }

  stateCSSVariables = {
    activeButtonWidth: "--tabsActiveButtonWidth",
    activeButtonOffsetLeft: "--tabsActiveButtonOffsetLeft",
  }
  constructor(rootElement) {
    super()
    this.rootElement = rootElement
    this.params = getParams(this.rootElement, this.selectors.root)
    this.navigationElement = this.params.navigationTargetElementId
      ? document.getElementById(this.params.navigationTargetElementId)
      : this.rootElement.querySelector(this.selectors.navigation)
    this.buttonsElements = [
      ...this.navigationElement.querySelectorAll(this.selectors.button),
    ]

    this.contentElements = [
      ...this.rootElement.querySelectorAll(this.selectors.content),
    ]

    this.state = this.getProxyState({
      activeTabIndex: this.buttonsElements.findIndex(
        ({ ariaSelected }) => ariaSelected,
      ),
    })

    this.limitTabsIndex = this.buttonsElements.length - 1

    this.bindEvents()

    setTimeout(this.bindObserves, 500)
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonsElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.ariaSelected = isActive
      buttonElement.tabIndex = isActive ? 0 : -1

      if (isActive) {
        this.updateNavigationCSSVars(buttonElement)
      }
    })

    this.contentElements.forEach((contentElement, index) => {
      const isActive = index === activeTabIndex
      contentElement.classList.toggle(this.stateClasses.isActive, isActive)
    })
  }

  updateNavigationCSSVars(
    activeButtonElement = this.buttonsElements[this.state.activeTabIndex],
  ) {
    const { width, left } = activeButtonElement.getBoundingClientRect()
    const offsetLeft =
      left - this.navigationElement.getBoundingClientRect().left

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonWidth,
      `${pixToRem(width)}rem`,
    )

    this.navigationElement.style.setProperty(
      this.stateCSSVariables.activeButtonOffsetLeft,
      `${pixToRem(offsetLeft)}rem`,
    )
  }

  activateTab(newTabIndex) {
    this.state.activeTabIndex = newTabIndex
    this.buttonsElements[newTabIndex].focus()
  }

  previousTab = () => {
    const newTabIndex =
      this.state.activeTabIndex === 0
        ? this.limitTabsIndex
        : this.state.activeTabIndex - 1

    this.activateTab(newTabIndex)
  }

  nextTab = () => {
    const newTabIndex =
      this.state.activeTabIndex === this.limitTabsIndex
        ? 0
        : this.state.activeTabIndex + 1

    this.activateTab(newTabIndex)
  }

  lastTab = () => {
    this.activateTab(this.limitTabsIndex)
  }

  firstTab = () => {
    this.activateTab(0)
  }

  onButtonClick(buttonIndex) {
    this.state.activeTabIndex = buttonIndex
  }

  oneKeyDown = (event) => {
    const { target, code, metaKey } = event

    const isTabsContentFocused = this.contentElements.some(
      (contentElement) => contentElement === target,
    )
    const isTabsButtonFocused = this.buttonsElements.some(
      (buttonElement) => buttonElement === target,
    )

    if (!isTabsButtonFocused && !isTabsContentFocused) return
    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: this.firstTab,
      End: this.lastTab,
    }[code]

    const isMacHomeKey = metaKey && code === "ArrowLeft"
    if (isMacHomeKey) {
      event.preventDefault()
      this.firstTab()
      return
    }
    const isMacEndKey = metaKey && code === "ArrowRight"
    if (isMacEndKey) {
      event.preventDefault()
      this.lastTab()
      return
    }

    if (action) {
      event.preventDefault()
      action()
    }
  }

  bindEvents() {
    this.buttonsElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener("click", () => {
        this.onButtonClick(index)
      })
    })
    document.addEventListener("keydown", this.oneKeyDown)
  }

  onResize = () => {
    this.updateNavigationCSSVars()
  }

  bindObserves = () => {
    const resizeObserver = new ResizeObserver(this.onResize)
    resizeObserver.observe(this.navigationElement)
  }
}

class TabsCollection {
  constructor() {
    this.init()
  }
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Tabs(element)
    })
  }
}

export default TabsCollection
