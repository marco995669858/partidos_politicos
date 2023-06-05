import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;

  constructor() { }



  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList(rol:any) {
    let array = [];
      array = ['Administrado','assets/img/icon_usuarios.gif','administracion/registrar-Usuario','Auditoria','assets/img/icon-auditoria.png','administracion/auditoria',];
      return this.getRoles(array);
   

  }


  getRoles(title:any){
    return  [
      {
        title: 'LUZ DEL SUR MENU',
        type: 'header'
      },
      {
        title: 'Principal',
        icon: 'fa-solid fa-house-user',
        active: false,
        type: 'dropdown',
        badge: {
          class: 'badge-warning',

        },
        submenus: [
          {
            title: 'Inicio',
            badge: {
              class: 'badge-success'
            },
            icon:'assets/img/icon_home.gif',
            url: 'home'
          }
        ]
      },
      {
        title: 'Administración',
        icon: 'fa-brands fa-old-republic',
        active: false,
        type: 'dropdown',
        badge: {
          class: 'badge-danger'
        },
        submenus: [
          {
            title: 'Partidos Políticos',
            icon:'fa-solid fa-handshake',
            url: 'administracion/partidos-electorales'
          },
          {
            title: 'Agregar P . P',
            icon:'fa-solid fa-handshake',
            url: 'administracion/agregar-partidos-electorales'
          }
         /*  {
            title: 'Prueba',
            icon:'assets/img/icon_firmadig.gif',
            url: 'administracion/prueba'
          },
          {
            title: title[0],
            icon:title[1],
            url: title[2]
          },
          {
            title: title[3],
            icon:title[4],
            url: title[5]
          } */
        ]
      }, 
      {
        title: 'Usuario',
        icon: 'fa-solid fa-user',
        active: false,
        type: 'dropdown',
        badge: {
          class: 'badge-danger'
        },
        submenus: [
          {
            title: 'Datos del Perfil',
            icon:'fa-solid fa-address-card',
            url: 'usuario/perfil'
          },
          {
            title: 'Agregar usuarios',
            icon:'fa-solid fa-user-plus',
            url: 'usuario/agregar-usuario'
          }
        ]
      },
      {
        title:'Cerrar',
        icon:'fa-solid fa-right-from-bracket',
        active:false,
        codigo:'tcSalir',
        type:'dropdown',
        badge:{
          class: 'badge-success'
        },
        submenus:[
          {
            title:'Cerrar Sesión',
            icon2:'fa-solid fa-power-off',
            codigo: 'csSalir'
          }
        ]
      }
    ]
  }


}
