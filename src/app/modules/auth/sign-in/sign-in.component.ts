import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '@data/interfaces/form/login';
import { LoaderService } from '@data/services/loader/loader.service';
import { AuthService } from '@data/services/servicios/auth/auth.service';
import Swal from 'sweetalert2';
import "../../../../assets/login-animation.js";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class signInComponent implements OnInit {

  formLogin!: FormGroup;
  submite: boolean = false;
  form: Login = new Login();
  /*llave del captcha*/
  siteKey: string;
  theme: any;
  size: any;
  type: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, public loaderService:LoaderService) {
    this.siteKey = '6Ld0r5cUAAAAADysjFk3Z-QDyEjCkCqGYABL8XRZ ';
    this.theme = 'Normal';
    this.size = 'Normal';
    this.type = 'Imagen';
  }

  
  ngAfterViewInit() {
    (window as any).initialize();
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      /* recaptcha: ['', [Validators.required]] */
    });
  }

  get U(){
    return this.formLogin.controls;
  }

 
  onLogin() {
    if (!this.formLogin.invalid) {
      this.form.nombreUsuario = this.formLogin.value.username;
      this.form.password = this.formLogin.value.password;
      this.authService.iniciar_session(this.form).subscribe((r)=>{
        if(!r.error){
          sessionStorage.setItem("token", r.data[0]);
          sessionStorage.setItem("nombreusuario", r.data[1]);
          sessionStorage.setItem("authority", r.data[2])
          sessionStorage.setItem("id", r.data[3])
          this.mensaje("Credenciales correctas!","Bienvenido de nuevo a la plataforma: " + r.data[1],
          "success",)
        }else{
          this.mensaje("Credenciales erroneas!","Por favor ingrese de nuevo sus credenciales",
          "error",)
        }
      })
    } else {
      this.submite = true;
      setTimeout(() => {
        this.submite = false;
      }, 6000);
    }

  }

  mensaje(titulo: any, texto: any, estado: any) {
    Swal.fire({
      icon: estado,
      title: titulo,
      text: texto
    }).then(() => {
      if(estado == "success"){
        this.router.navigate(["inicio"]);
      }
    })
  }






}