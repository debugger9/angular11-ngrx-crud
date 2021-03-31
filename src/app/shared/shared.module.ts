import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [FooterComponent, HeaderComponent, MainLayoutComponent],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HeaderComponent,
    FooterComponent
  ]
})

export class SharedModule {
}
