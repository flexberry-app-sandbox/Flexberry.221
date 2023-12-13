import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-22-заказ-пост', 'Unit | Serializer | i-i-s-22-заказ-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-22-заказ-пост',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-22-сост-оплаты',
    'transform:i-i-s-22-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
