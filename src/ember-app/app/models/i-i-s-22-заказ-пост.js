import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-22-заказ-пост';

import ОтчетОЗакModel from './i-i-s-22-отчет-о-зак';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-22-отчет-о-зак';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ОтчетОЗакModel.extend(ЗаказПостMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
