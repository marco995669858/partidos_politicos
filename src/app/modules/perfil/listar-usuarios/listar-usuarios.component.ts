import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '@data/services/servicios/profile/profile.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
  providers: [MessageService]
})
export class ListarUsuariosComponent implements OnInit {
  /*para abrir el modal*/
  display: boolean;
  //variables para listar la tabla usuario
  usuario: any[];
  selectUsuario: any;
  /*PARA SABER SI SE ACTUALIZA O SE REGISTRAR, MOSTRAR TITULO SEGUN EDICION*/
  titulo: boolean = false;
  /*para llenar los nombre*/
  formulario: any = {};
  readonly: boolean = true;
  /*para el genero*/
  genero: any[];
  /*para el rol*/
  roles: any[];
  /*para validar el formulario*/
  usuarioFormGroup:FormGroup;
  submite:boolean = false;
  /*para el modal*/
  @ViewChild('lgModal') lgModal:any;
  constructor(private profileService: ProfileService,private messageService: MessageService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    //para validar el formulario
    this.usuarioFormGroup = this.formBuilder.group({
      dni:['',[Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')]],
      nombrecompleto:['',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      apellidosusuario:['',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      correo:['',[Validators.required, Validators.minLength(10), Validators.maxLength(25), Validators.email]],
      correoalternativo:[,[Validators.minLength(10), Validators.maxLength(25), Validators.email]],
      celular:['',[Validators.required, Validators.minLength(9), Validators.maxLength(9),Validators.pattern('[0-9]{9}')]],
      fechanacimiento:['',[Validators.required]],
      sexo:['',[Validators.required]],
      roles:['',[Validators.required]]
    });

    this.listarUsuario();

    /*para el genero*/
    this.genero = [{
      id: 'M',
      name: 'Masculino'
    },
    {
      id: 'F',
      name: 'Femenino'
    },
    {
      id: 'NDE',
      name: 'No deseo especificar'
    }
    ]

    this.roles = [{
      id: ['user'],
      name: 'Rol usuario'
    },
    {
      id: ['admin'],
      name: 'rol administrador'
    }
    ]

  }

  get U(){
    return this.usuarioFormGroup.controls;
  }



  listarUsuario() {
    this.profileService.getListarUsuario().subscribe((r) => {
      if (!r.error) {
        this.usuario = r.data;

      }
    })
  }


  tiposdeAlerta(mensaje:any,alerta: number): void{
    let icons = 'success';
    switch (alerta) {
      case 2: 
        icons = 'error';
      break;
      case 3: 
        icons = 'question'
      break;
      case 4:
        icons = 'warn';
      break;
      case 5:
        icons = 'info';
        break;
    }
    this.messageService.add({severity: icons, summary: null, detail:mensaje});
  }

  registrarNuevoUsuario() {
    if(!this.usuarioFormGroup.invalid){
      this.profileService.postAgregarUsuario(this.usuarioFormGroup.value).subscribe((r)=>{
        if(!r.error){
       switch(r.data){
            case "El correo ya existe.":
              this.tiposdeAlerta("El correo ingresado ya existe, ingrese otro correo.",5);
              break;
            case "El dni ya existe.":
              this.tiposdeAlerta("El dni ingresado ya existe, ingrese otro dni.",5);
              break;
            case "El nombre de usuario ya existe.":
              this.tiposdeAlerta("El nombre de usuario ingresado ya existe, ingrese otro nombre de usuario.",5);
              break;
            default:
              this.limpiarCampos();
              this.lgModal.hide();
              this.listarUsuario();
              this.tiposdeAlerta("Se registro el usuario correctamente.",1);
              break
          }
        }else{
          this.tiposdeAlerta("Tenemos problemas para registrar el usuario, intentelo nuevamente.",2);
        }
      })
      
    }else{
      this.submite = true;
      setTimeout(() => {
        this.submite = false;
      }, 5000);
    }
    
  }

  buscarPersonaNatural(e: any) {
    if (e.target.value.length == 8) {
      this.profileService.getBuscarPesonaNatural(e.target.value).subscribe(r => {
        if (!r.error) {
          this.formulario = r.data;
          this.readonly = true;
          this.usuarioFormGroup.controls['nombrecompleto'].setValue(this.formulario.nombres);
          this.usuarioFormGroup.controls['apellidosusuario'].setValue(this.formulario.apellidoCompletos);
          if (this.formulario.mensaje ==
            "No se encontro el numero del dni o el dni ingresado no existe.") {
            this.readonly = false;
            this.usuarioFormGroup.controls['nombrecompleto'].reset();
            this.usuarioFormGroup.controls['apellidosusuario'].reset();
          }


        }
      })
    }

  }

  limpiarCampos(){
    this.usuarioFormGroup.controls['dni'].reset();
    this.usuarioFormGroup.controls['nombrecompleto'].reset();
    this.usuarioFormGroup.controls['apellidosusuario'].reset();
    this.usuarioFormGroup.controls['sexo'].reset();
    this.usuarioFormGroup.controls['correo'].reset();
    this.usuarioFormGroup.controls['correoalternativo'].reset();
    this.usuarioFormGroup.controls['fechanacimiento'].reset();
    this.usuarioFormGroup.controls['celular'].reset();
    this.usuarioFormGroup.controls['roles'].reset();
  }
 
}
