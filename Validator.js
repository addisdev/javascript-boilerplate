// Validator.js — Common Input Validators

export class Validator {
  static isEmail(str) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  }

  static isEmpty(value) {
    return value == null || value === '' || (Array.isArray(value) && value.length === 0);
  }

  static minLength(str, length) {
    return typeof str === 'string' && str.length >= length;
  }
}

// Example Usage:
// console.log(Validator.isEmail('test@example.com')); // true
// console.log(Validator.isEmpty([])); // true
// console.log(Validator.minLength('abc', 3)); // true

// Simple test cases:
// console.assert(Validator.isEmail('a@b.com'), 'Valid email failed');
// console.assert(!Validator.isEmail('abc'), 'Invalid email passed');
// console.assert(Validator.minLength('12345', 5), 'Min length check failed');