import { TodosClassInterface } from './TodosClassInterface';
import { Todo } from './TodoInterface';
import {Promise} from 'es6-promise'

export class Todos implements TodosClassInterface {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id:1,
        text: 'My Todo One'
      },
      {
        id:2,
        text: 'My Todo Two'
      },
      {
        id:3,
        text: 'My Todo Three'
      },
    ];
  }

  getTodos():Promise<{}>{
    let promise = new Promise(resolve => resolve(this.todos));
    return promise
  }
}