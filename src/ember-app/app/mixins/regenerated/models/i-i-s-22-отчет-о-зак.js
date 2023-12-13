import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-22-сост-поставок'),
  состояниеОплаты: DS.attr('i-i-s-22-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-22-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-22-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-22-склады', { inverse: null, async: false }),
  тЧЗаказ: DS.hasMany('i-i-s-22-т-ч-заказ', { inverse: 'отчетОЗак', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-22-отчет-о-зак.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакE', 'i-i-s-22-отчет-о-зак', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 3 }),
    суммаДокумента: attr('Сумма документа', { index: 4 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 5 }),
    состОтгрузки: attr('Сост отгрузки', { index: 6 }),
    контрагенты: belongsTo('i-i-s-22-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'контрагент' }),
    организации: belongsTo('i-i-s-22-организации', 'Организации', {
      организация: attr('Организация', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-22-склады', 'Склады', {
      склад: attr('Склад', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'склад' }),
    тЧЗаказ: hasMany('i-i-s-22-т-ч-заказ', 'Т ч заказ', {
      цена: attr('Цена', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      суммаНДС: attr('Сумма НДС', { index: 2 }),
      сумма: attr('Сумма', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 4 }),
      номенклатура: belongsTo('i-i-s-22-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ОтчетОЗакL', 'i-i-s-22-отчет-о-зак', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаОкончания: attr('Дата окончания', { index: 2 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 3 }),
    суммаДокумента: attr('Сумма документа', { index: 4 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 5 }),
    состОтгрузки: attr('Сост отгрузки', { index: 6 }),
    контрагенты: belongsTo('i-i-s-22-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-22-организации', 'Организация', {
      организация: attr('Организация', { index: 8 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-22-склады', 'Склад', {
      склад: attr('Склад', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
