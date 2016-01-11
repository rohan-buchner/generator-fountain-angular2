import { Component } from 'angular2/core';

@Component({
  selector: 'hello-app',
  template: '<h1>{{ hello }}</h1>'
})
export class Hello {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}