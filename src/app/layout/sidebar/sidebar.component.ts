import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from '@data/services/sidebar.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SidebarComponent implements OnInit {
  menus:any = [];
  showClassToggled = true;
  rol: any;
  usuario: any;
  nombres: any;
  
  constructor(private router: Router, private siderbarservice: SidebarService) {
    this.nombres = sessionStorage.getItem('nombreusuario');
    this.rol = sessionStorage.getItem('rol');
    if (this.rol == 'administrador') {
      this.usuario = 'ADMINISTRADOR';
    } else if (this.rol == 'superadministrador') {
      this.usuario = 'SUPER ADMINISTRADOR';
    }
    this.menus = siderbarservice.getMenuList(this.rol);
  }


  ngOnInit(): void {
  }


  getSideBarState() {
    return this.siderbarservice.getSidebarState();
  }

  toggle(currentMenu:any) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element: { active: boolean; }) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu:any) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  toggleSidebar() {
    this.siderbarservice.setSidebarState(!this.siderbarservice.getSidebarState());
  }

  cerrarSidebar() {
    this.siderbarservice.toggle();
  }


  cerrarSession(e: any) {
    Swal.fire({
      title: 'Desea cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!'
    }).then((result)=>{
      if(result.isConfirmed){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('nombreusuario');
        sessionStorage.removeItem('authority');
        sessionStorage.clear();
        this.mensaje();

      }

    })

  }

  mensaje() {
    Swal.fire({
      icon: 'success',
      title: 'Sesión Cerrada',
      text: 'Vuelva pronto'
    }).then(() => {
      this.router.navigate(['/']);

    })
  }
}
