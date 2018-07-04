// From https://gist.github.com/peduarte/969217eac456538789e8fac8f45143b4#file-index-js
export default function throttle(func, wait = 100) {
  let timer = null;

  return function(...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
