import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sobre-la-aplicacion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sobre-la-aplicacion');
    assert.ok(route);
  });
});
