import { Serializer as ПланSerializer } from
  '../mixins/regenerated/serializers/i-i-s-22-план';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПланSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
