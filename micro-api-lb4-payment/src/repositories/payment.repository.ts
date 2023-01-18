import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Microapilb4PaymentDataSource} from '../datasources';
import {Payment, PaymentRelations} from '../models';

export class PaymentRepository extends DefaultCrudRepository<
  Payment,
  typeof Payment.prototype.id,
  PaymentRelations
> {
  constructor(
    @inject('datasources.microapilb4payment') dataSource: Microapilb4PaymentDataSource,
  ) {
    super(Payment, dataSource);
  }
}
