import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion-politica',
  templateUrl: './administracion-politica.component.html',
  styleUrls: ['./administracion-politica.component.scss']
})
export class AdministracionPoliticaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }






}
