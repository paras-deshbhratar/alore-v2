import { Component } from '@angular/core';
import {NzModalService} from "ng-zorro-antd";
import {AddContactComponent} from "./add-contact/add-contact.component";
import {AddProspectComponent} from "./add-prospect/add-prospect.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NzModalService) {
  }
  title = 'alore-v2';

  onCreateNewContact() {
    this.modalService.create({
      nzContent: AddContactComponent,
      nzFooter: null,
      nzWrapClassName: 'vertical-center-modal',
      nzWidth: '550',
      nzMaskClosable: false
    });
  }

  onCreateNewProspect() {
    this.modalService.create({
      nzContent: AddProspectComponent,
      nzFooter: null,
      nzWrapClassName: 'vertical-center-modal',
      nzWidth: '550',
      nzMaskClosable: false
    });
  }
}
