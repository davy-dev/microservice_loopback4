import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'microapilb4order',
  connector: 'mongodb',
  url: '',
  host: '172.17.0.2',
  port: 27017,
  user: '',
  password: '',
  database: 'microapilb4order',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Microapilb4OrderDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'microapilb4order';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.microapilb4order', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
