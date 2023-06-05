import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '@data/services/servicios/profile/profile.service';
import { ValidacionesPersonalizadasService } from '@data/services/servicios/validaciones/validaciones-personalizadas.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
  providers: [MessageService]
})
export class PerfilUsuarioComponent implements OnInit {
  /*para validar el formulario*/
  usuarioFormGroup: FormGroup;
  submite: boolean = false;
  /*para desavilitar algunos campos*/
  readonly: boolean = true;
  /*para almacenar los datos del buscar usuario en una variable*/
  formulario: any = {};
  /*para el genero*/
  /*   genero: any[]; */
  /*para el rol*/
  /*  roles: any[]; */
  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private profileService: ProfileService) { }
  rol: any = new FormData
  ngOnInit(): void {
    //para validar el formulario
    this.usuarioFormGroup = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]{8}')]],
      nombrecompleto: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      apellidosusuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      correo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(25), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),
      ValidacionesPersonalizadasService.patternValidator(/\d/, { hasNumber: true }),
      ValidacionesPersonalizadasService.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      ValidacionesPersonalizadasService.patternValidator(/[a-z]/, { hasSmallCase: true }),
      ValidacionesPersonalizadasService.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { hasSpecialCharacters: true }),
      Validators.minLength(8)]],
      confirmPassword: ['', Validators.compose([Validators.required])]
    },
      {
        // check whether our password and confirm password match
        validator: ValidacionesPersonalizadasService.passwordMatchValidator,


        /*   correoalternativo: [, [Validators.minLength(10), Validators.maxLength(25), Validators.email]],
          celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]{9}')]],
          fechanacimiento: ['', [Validators.required]],
          sexo: ['', [Validators.required]],
          roles: ['', [Validators.required]] */
      });

    /*para el genero*/
    /*   this.genero = [{
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
      ] */

    this.listarPerfilUsuario()
  }

  get U() {
    return this.usuarioFormGroup.controls;
  }

  tiposdeAlerta(mensaje: any, alerta: number): void {
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
    this.messageService.add({ severity: icons, summary: null, detail: mensaje });
  }

  codigo: any;
  ActualizarDatosdelPerfil() {
    if (!this.usuarioFormGroup.invalid) {
      //capturar la variable de session
      let id = sessionStorage.getItem("id");
      this.profileService.putActializarDatosPerfil(id, this.usuarioFormGroup.value).subscribe((r) => {
        if (!r.error) {
          switch (r.data) {
            case "El correo ya existe.":
              this.tiposdeAlerta("El correo que esta intentando cambiar ya existe, intentelo de nuevo con otro correo.", 5);
              break;
            default:
              this.limpiarCampos();
              this.listarPerfilUsuario();
              this.tiposdeAlerta("Se actualizo la contraseña con éxito.", 1);
              break
          }
        } else {
          this.tiposdeAlerta("Tenemos problemas para actualizar la contraseña, intentelo nuevamente.", 2);
        }
      })

    } else {
      this.submite = true;
      setTimeout(() => {
        this.submite = false;
      }, 5000);
    }
  }

  /*para listar los datos del perfil del usuario*/
  listarPerfilUsuario() {
    //capturar la variable de session
    let id = sessionStorage.getItem("id");

    this.profileService.postBuscarUsuario(id).subscribe((r) => {
      if (!r.error) {
        this.formulario = r.data
        this.usuarioFormGroup.controls['dni'].setValue(this.formulario.dni);
        this.usuarioFormGroup.controls['nombrecompleto'].setValue(this.formulario.nombrecompleto);
        this.usuarioFormGroup.controls['apellidosusuario'].setValue(this.formulario.apellidosusuario);
        this.usuarioFormGroup.controls['correo'].setValue(this.formulario.correo);
      }
    })

  }

  limpiarCampos() {
    this.usuarioFormGroup.controls['dni'].reset();
    this.usuarioFormGroup.controls['nombrecompleto'].reset();
    this.usuarioFormGroup.controls['apellidosusuario'].reset();
    this.usuarioFormGroup.controls['correo'].reset();
    this.usuarioFormGroup.controls['password'].reset();
    this.usuarioFormGroup.controls['confirmPassword'].reset();
  }
}
