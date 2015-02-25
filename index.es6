import { curry1 } from 'fj-curry';
import typeOf from 'fj-typeof';


const isNumber = typeOf('number');
const isString = typeOf('string');
const isObject = typeOf('object');


let isDom = curry1(function(dom) {
    if (!dom || !isObject(dom)) {
      return false;
    }

    if (isObject(window.Node)) {
      return dom instanceof window.Node;
    }

    return isNumber(dom.nodeType) && isString(dom.nodeName);
});

export default isDom;
