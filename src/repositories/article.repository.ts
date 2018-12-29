import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Article} from '../models';
import {MemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype.author
> {
  constructor(
    @inject('datasources.Memory') dataSource: MemoryDataSource,
  ) {
    super(Article, dataSource);
  }
}
