import { Component, OnInit } from '@angular/core';
import { CanCancelArgus } from './child/child.component';



@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleCanCancel(argus: CanCancelArgus) {
    argus.cancel = true;
  }

}
