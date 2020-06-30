/*
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';*/
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
//import {ClipboardModule} from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule }    from '@angular/common/http';
import { SocketioService } from './socketio.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectFilterModule } from 'mat-select-filter';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfesorComponent } from './profesor/profesor.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { SidenavProfesorComponent } from './profesor/sidenav-profesor/sidenav-profesor.component';
import { CrearActividadComponent } from './profesor/crear-actividad/crear-actividad.component';
import { VerActividadComponent } from './profesor/ver-actividad/ver-actividad.component';
import { EditarActividadComponent } from './profesor/editar-actividad/editar-actividad.component';
import { CrearClaseComponent } from './profesor/crear-clase/crear-clase.component';
import { EditarClaseComponent } from './profesor/editar-clase/editar-clase.component';
import { VerClaseComponent } from './profesor/ver-clase/ver-clase.component';
import { MensajeComponent } from './profesor/mensaje/mensaje.component';
import { VerAlumnoComponent } from './profesor/ver-alumno/ver-alumno.component';
import { VerEstadisticasClaseComponent } from './profesor/ver-estadisticas-clase/ver-estadisticas-clase.component';
import { CrearProfesorComponent } from './profesor/crear-profesor/crear-profesor.component';
import { EditarProfesorComponent } from './profesor/editar-profesor/editar-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    EstudianteComponent,
    SidenavProfesorComponent,
    CrearActividadComponent,
    VerActividadComponent,
    EditarActividadComponent,
    CrearClaseComponent,
    EditarClaseComponent,
    VerClaseComponent,
    MensajeComponent,
    VerAlumnoComponent,
    VerEstadisticasClaseComponent,
    CrearProfesorComponent,
    EditarProfesorComponent,
  ],
  exports: [
    MatSelectFilterModule,
    MatSidenavModule,
    MatDialogModule,
    MatStepperModule,
    A11yModule,
    //ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MensajeComponent,
    FontAwesomeModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatPaginatorModule,
    DragDropModule,
    WebcamModule,
    HttpClientModule,
    BrowserModule,
    MatTableModule,
    MatSelectFilterModule,
    MatSortModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  providers: [MatSidenavModule,
    MatStepperModule,
    SocketioService,
  ],
  entryComponents: [MensajeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  DragDropModule
 }
