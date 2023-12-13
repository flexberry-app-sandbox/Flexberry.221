import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-22-отчет-о-зак', 'Unit | Model | i-i-s-22-отчет-о-зак', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-22-единицы-измер',
    'model:i-i-s-22-заказ-пост',
    'model:i-i-s-22-контрагенты',
    'model:i-i-s-22-номенклатура',
    'model:i-i-s-22-организации',
    'model:i-i-s-22-отчет-о-зак',
    'model:i-i-s-22-план-закупок',
    'model:i-i-s-22-план',
    'model:i-i-s-22-склады',
    'model:i-i-s-22-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
