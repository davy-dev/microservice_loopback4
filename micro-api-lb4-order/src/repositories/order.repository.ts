import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Microapilb4OrderDataSource} from '../datasources';
import {Order, OrderRelations} from '../models';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {
  constructor(
    @inject('datasources.microapilb4order') dataSource: Microapilb4OrderDataSource,
  ) {
    super(Order, dataSource);
  }
}
