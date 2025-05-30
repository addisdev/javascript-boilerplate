// EventEmitter.js — Pub/Sub Event Utility Class

export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  emit(event, payload) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(payload));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}

// Example Usage:
// const emitter = new EventEmitter();
// const onFoo = (msg) => console.log(`foo event: ${msg}`);

// emitter.on('foo', onFoo);
// emitter.emit('foo', 'bar'); // foo event: bar
// emitter.off('foo', onFoo);
// emitter.emit('foo', 'should not log');

// Simple test case
// console.assert(typeof emitter.on === 'function', 'on should be a function');