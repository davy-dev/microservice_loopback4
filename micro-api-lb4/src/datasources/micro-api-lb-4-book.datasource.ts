import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'microApiLb4Book',
  connector: 'mongodb',
  url: '',
  host: '172.17.0.2',
  port: 27017,
  user: '',
  password: '',
  database: 'microApiLb4',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MicroApiLb4BookDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'microApiLb4Book';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.microApiLb4Book', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
