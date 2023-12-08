import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { Query1Component } from './components/query1/query1.component';
import { CommonModule } from '@angular/common';
import {NgChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    Query1Component,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NgChartsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
