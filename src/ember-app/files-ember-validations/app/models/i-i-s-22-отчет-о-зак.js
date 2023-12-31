import {
  defineNamespace,
  defineProjections,
  Model as ОтчетОЗакMixin
} from '../mixins/regenerated/models/i-i-s-22-отчет-о-зак';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчетОЗакMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
