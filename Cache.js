// Cache.js — In-Memory Cache with TTL

export class Cache {
  constructor() {
    this.store = new Map();
  }

  set(key, value, ttl = 0) {
    const expiry = ttl ? Date.now() + ttl : null;
    this.store.set(key, { value, expiry });
  }

  get(key) {
    const cached = this.store.get(key);
    if (!cached) return null;
    if (cached.expiry && cached.expiry < Date.now()) {
      this.store.delete(key);
      return null;
    }
    return cached.value;
  }

  delete(key) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }
}

// Example Usage:
// const cache = new Cache();
// cache.set('foo', 'bar', 1000); // Expires in 1 second
// console.log(cache.get('foo')); // 'bar'

// Simple test case
// setTimeout(() => {
//   console.assert(cache.get('foo') === null, 'Cache should expire after TTL');
// }, 1500);