// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// The browser features below do not exist in the test environment.
window.scrollTo = jest.fn();
Element.prototype.scrollIntoView = jest.fn();
window.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
