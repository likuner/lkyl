var pubsubLib = (function (exports) {
    'use strict';

    class PubSub {
        events = new Map();
        onceEvents = new Map();
        static instance = null;
        static getInstance() {
            if (!PubSub.instance) {
                PubSub.instance = new PubSub();
            }
            return PubSub.instance;
        }
        on(event, callback) {
            if (!this.events.has(event)) {
                this.events.set(event, []);
            }
            this.events.get(event).push(callback);
        }
        off(event, callback) {
            const listeners = this.events.get(event);
            if (listeners?.length) {
                listeners.splice(0, listeners.length, ...listeners.filter((fn) => fn !== callback));
            }
            const onceListeners = this.onceEvents.get(event);
            if (onceListeners?.length) {
                onceListeners.splice(0, onceListeners.length, ...onceListeners.filter((fn) => fn !== callback));
            }
        }
        once(event, callback) {
            if (!this.onceEvents.has(event)) {
                this.onceEvents.set(event, []);
            }
            this.onceEvents.get(event).push(callback);
        }
        emit(event, ...args) {
            Promise.resolve().then(() => {
                const listeners = this.events.get(event) || [];
                const onceListeners = this.onceEvents.get(event) || [];
                const allListeners = [...listeners, ...onceListeners];
                if (allListeners.length) {
                    for (let i = 0, len = allListeners.length; i < len; i++) {
                        allListeners[i].apply(this, args);
                    }
                }
                if (onceListeners.length) {
                    onceListeners.splice(0);
                }
            });
        }
        clear() {
            this.events.clear();
            this.onceEvents.clear();
        }
    }

    exports.PubSub = PubSub;

    return exports;

})({});
