# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 如何在父级组件能够控制/及时中断子组件事件

这个场景应该是常有的，目前还没用过此种方法。对应demo1路由。

代码核心片段：

```
// parent

public handleCanCancel(argus: CanCancelArgus) {
  argus.cancel = true;
}

// child
@Output() public canCancel: EventEmitter<CanCancelArgus> = new EventEmitter<CanCancelArgus>();


doSomething(): void {
  const argus = {cancel: false};
  this.canCancel.emit(argus);
  if (!argus.cancel) {
    // do
  }
}


```