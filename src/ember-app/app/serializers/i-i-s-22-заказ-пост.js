import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-22-заказ-пост';
import ОтчетОЗакSerializer from './i-i-s-22-отчет-о-зак';

export default ОтчетОЗакSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
