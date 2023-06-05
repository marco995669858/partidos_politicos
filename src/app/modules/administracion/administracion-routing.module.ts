import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionPoliticaComponent } from './administracion-politica/administracion-politica.component';
import { AgregarPartidosPoliticosComponent } from './agregar-partidos-politicos/agregar-partidos-politicos.component';

const routes: Routes = [{
  path: 'partidos-electorales',
  component: AdministracionPoliticaComponent
},
{
  path: 'agregar-partidos-electorales',
  component: AgregarPartidosPoliticosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
