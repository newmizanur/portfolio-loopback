import {Entity, model, property} from '@loopback/repository';

@model()
export class Article extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  author: string;

  constructor(data?: Partial<Article>) {
    super(data);
  }
}
