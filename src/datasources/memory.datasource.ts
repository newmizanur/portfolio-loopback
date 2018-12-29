import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './memory.datasource.json';

export class MemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'Memory';

  constructor(
    @inject('datasources.config.Memory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
