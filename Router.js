// Router.js — Simple Hash-Based Router

export class Router {
  constructor() {
    this.routes = {};
    window.addEventListener('hashchange', () => this.handleRoute());
  }

  register(path, handler) {
    this.routes[path] = handler;
  }

  handleRoute() {
    const path = location.hash.slice(1);
    if (this.routes[path]) {
      this.routes[path]();
    } else {
      console.warn(`No handler for path: ${path}`);
    }
  }

  init() {
    this.handleRoute();
  }
}

// Example Usage:
// const router = new Router();
// router.register('home', () => console.log('Home route'));
// router.init(); // Manually start routing
// window.location.hash = 'home'; // Triggers the route

// Simple test case:
// router.register('test', () => console.log('Test route hit'));
// location.hash = 'test';