// StorageManager.js — Wrapper for localStorage/sessionStorage

export class StorageManager {
  constructor(type = 'local') {
    this.storage = type === 'session' ? sessionStorage : localStorage;
  }

  set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key) {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

// Example Usage:
// const storage = new StorageManager('local');
// storage.set('user', { name: 'Taylor' });
// console.log(storage.get('user')); // { name: 'Taylor' }

// Simple test case
// Note: Only works in browser environment where localStorage is available.
// const testKey = 'test';
// storage.set(testKey, 123);
// console.assert(storage.get(testKey) === 123, 'Storage get/set failed');
