import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalRef, NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-add-prospect',
  templateUrl: './add-prospect.component.html',
  styleUrls: ['./add-prospect.component.css', '../app.component.css']
})
export class AddProspectComponent implements OnInit {
  addProspectForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalService: NzModalService, private modalRef: NzModalRef) { }

  ngOnInit(): void {
    this.addProspectForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmitAddProspectForm() {

  }

  onCancelAddProspectModalBtn() {
    this.modalRef.close();
  }
}
