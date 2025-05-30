// utils.js — JavaScript Utility Library

/** Debounce: Prevent a function from being called too frequently */
export function debounce(fn, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

/** Throttle: Limit the rate a function can be invoked */
export function throttle(fn, limit = 300) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

/** Deep clone an object (structured cloning if supported) */
export function deepClone(obj) {
  if (typeof structuredClone === 'function') {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

/** Generate a UUID v4 */
export function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (c / 4)).toString(16)
  );
}

/** Deep equality check */
export function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/** Capitalize the first character of a string */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Pause execution for a specified number of milliseconds */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** Check if a value is empty (null, undefined, empty array/object/string) */
export function isEmpty(value) {
  if (value == null) return true;
  if (Array.isArray(value) || typeof value === 'string') return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/** Clamp a number between a min and max */
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/** Create a range of numbers (like Python's range) */
export function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/** Shuffle an array using Fisher-Yates algorithm */
export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
