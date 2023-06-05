import { NgModule } from '@angular/core';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AgregarPartidosPoliticosComponent } from './agregar-partidos-politicos/agregar-partidos-politicos.component';
import { AdministracionPoliticaComponent } from './administracion-politica/administracion-politica.component';


@NgModule({
  declarations: [
    AdministracionPoliticaComponent,
    AgregarPartidosPoliticosComponent
  ],
  imports: [
    SharedModule,  
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
