export default function isDom(dom) {
  return () => {
    if (!dom || typeof dom !== 'object') {
      return false;
    }

    if ('object' === typeof window.Node) {
      return dom instanceof window.Node;
    }

    return 'number' === typeof dom.nodeType && 'string' === typeof dom.nodeName;
  };
}
