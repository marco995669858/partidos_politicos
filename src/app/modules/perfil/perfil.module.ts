import { NgModule } from '@angular/core';
import { PerfilRoutingModule } from './perfil-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';


@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    ListarUsuariosComponent
  ],
  imports: [
    SharedModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
