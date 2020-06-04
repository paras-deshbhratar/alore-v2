import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzModalRef, NzModalService} from "ng-zorro-antd";
import {DataService} from "../data.service";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css','../app.component.css']
})
export class AddContactComponent implements OnInit {
  addContactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalService: NzModalService, private modalRef: NzModalRef, private dataService: DataService) {}

  ngOnInit(): void {
    this.addContactForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null],
      email: [null, [Validators.email]],
      contactId: ['124D5', false]
    });
  }

  onSubmitAddContactForm() {
    this.dataService.leads.push();
  }

  onCancelAddContactModalBtn() {
    this.modalRef.close();
  }
}
