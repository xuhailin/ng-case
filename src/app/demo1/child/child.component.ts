import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface CanCancelArgus {
  cancel: boolean;
}

@Component({
  selector: 'app-demo1-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() public canCancel: EventEmitter<CanCancelArgus> = new EventEmitter<CanCancelArgus>();
  public showText: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  doSomething1(): void {
    const argus = {cancel: false};
    this.canCancel.emit(argus);
    if (!argus.cancel) {
      this.showText = true;
    }
  }

  doSomething2(): void {
    this.showText = true;
  }

}
