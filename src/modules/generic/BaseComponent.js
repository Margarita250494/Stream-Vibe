class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        "BaseComponent is an abstract class and cannot be instantiated directly.",
      )
    }
  }
  getProxyState(initialState) {
    // This method should be overridden in subclasses to provide the initial state
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop]
      },
      set: (target, prop, newValue) => {
        const oldValue = target[prop]

        target[prop] = newValue

        if (newValue !== oldValue) {
          this.updateUI()
        }

        return true
      },
    })
  }
  // This method should be overridden in subclasses to update the UI
  updateUI() {
    throw new Error("updateUI() must be implemented in subclasses")
  }
}

export default BaseComponent
