import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@layout/auth/auth.component';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('@modules/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },{
    path: 'inicio',
    component: SkeletonComponent,
    //cuando se implementa el token, se habilita
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('@modules/perfil/perfil.module').then((m) => m.PerfilModule)
      },
      {
        path: 'administracion',
        loadChildren: () =>
          import('@modules/administracion/administracion.module').then((m) => m.AdministracionModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
