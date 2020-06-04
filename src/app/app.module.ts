import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {LeadsComponent} from "./leads/leads.component";
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddProspectComponent } from './add-prospect/add-prospect.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LeadsComponent,
    AddContactComponent,
    AddProspectComponent,
    SideNavComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        DragDropModule
    ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
