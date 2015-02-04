import { curry1 } from 'fj-curry';


let isDom = curry1(function(dom) {
    if (!dom || typeof dom !== 'object') {
      return false;
    }

    if ('object' === typeof window.Node) {
      return dom instanceof window.Node;
    }

    return 'number' === typeof dom.nodeType && 'string' === typeof dom.nodeName;
});

export default isDom;
