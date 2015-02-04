import test from 'prova';
import isDom from './';


test('fd-isDom', (t) => {
  t.plan(6);
 
  let div = document.createElement('div');

  t.equals(typeof isDom(), 'function');
  t.notOk(isDom()(null));
  t.notOk(isDom()({}));
  t.notOk(isDom()(''));
  t.ok(isDom()(div));
  t.ok(isDom()(document));
});
