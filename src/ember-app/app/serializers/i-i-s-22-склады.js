import { Serializer as СкладыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-22-склады';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СкладыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
