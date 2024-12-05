// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// The command to run tests was found by trying and failing to run tests through the reference below, 
// and then running npm run out of desparation, which gave the suggestion test.unit: https://ionic.io/blog/testing-ionic-react-apps-with-jest-and-react-testing-library

// Mock matchmedia
window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};
