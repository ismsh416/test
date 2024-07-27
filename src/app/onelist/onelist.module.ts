// src/sub-app/sub-app.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OnelistComponent } from './onelist.component';
import { OneServiceService } from '../one-service.service';

@NgModule({
  declarations: [
    OnelistComponent
  ],
  imports: [
    CommonModule,
    HttpClient
  ],
  providers: [OneServiceService],
  exports: [
    OnelistComponent
  ]
})
export class OnelistModule { }
