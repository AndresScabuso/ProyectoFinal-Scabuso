import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageWrapperComponent } from './shared/layout/page-wrapper/page-wrapper.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MyMaterialModule } from './shared/modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { StudentDetailsComponent } from './shared/components/student-details/student-details.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NombreCompletoPipe } from './shared/pipes/nombre-completo.pipe';
import { CabeceraDirective } from './shared/directives/cabecera.directive';
import { ActivoPipe } from './shared/pipes/activo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    StudentDetailsComponent,
    NombreCompletoPipe,
    CabeceraDirective,
    ActivoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
