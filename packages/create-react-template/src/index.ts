export type EventType = unknown

export class PubSub {

  private events: Map<EventType, Function[]> = new Map()

  private onceEvents: Map<EventType, Function[]> = new Map()

  private static instance: PubSub | null = null

  static getInstance(): PubSub {
    if (!PubSub.instance) {
      PubSub.instance = new PubSub()
    }
    return PubSub.instance
  }

  on(event: EventType, callback: Function) {
    if (!this.events.has(event)) {
      this.events.set(event, [])
    }
    this.events.get(event)!.push(callback)
  }

  off(event: EventType, callback: Function) {
    const listeners = this.events.get(event)
    if (listeners?.length) {
      listeners.splice(0, listeners.length, ...listeners.filter((fn: Function) => fn !== callback))
    }
    const onceListeners = this.onceEvents.get(event)
    if (onceListeners?.length) {
      onceListeners.splice(0, onceListeners.length, ...onceListeners.filter((fn: Function) => fn !== callback))
    }
  }

  once(event: EventType, callback: Function) {
    if (!this.onceEvents.has(event)) {
      this.onceEvents.set(event, [])
    }
    this.onceEvents.get(event)!.push(callback)
  }

  emit(event: EventType, ...args: any[]) {
    Promise.resolve().then(() => {
      const listeners = this.events.get(event) || []
      const onceListeners = this.onceEvents.get(event) || []
      const allListeners = [...listeners, ...onceListeners]
      if (allListeners.length) {
        for (let i = 0, len = allListeners.length; i < len; i++) {
          allListeners[i].apply(this, args)
        }
      }
      if (onceListeners.length) {
        onceListeners.splice(0)
      }
    })
  }

  clear() {
    this.events.clear()
    this.onceEvents.clear()
  }
}