import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MicroApiLb4BookDataSource} from '../datasources';
import {Book, BookRelations} from '../models';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.id,
  BookRelations
> {
  constructor(
    @inject('datasources.microApiLb4Book') dataSource: MicroApiLb4BookDataSource,
  ) {
    super(Book, dataSource);
  }
}
