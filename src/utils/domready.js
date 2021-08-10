/**
 *  Check if the document is loaded completely
 */
const domReady = (callback) => {
  // if already rendered
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', callback) : callback();
};

export default domReady;

