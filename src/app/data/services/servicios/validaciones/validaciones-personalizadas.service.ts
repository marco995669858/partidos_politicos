import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesPersonalizadasService {

  constructor() { }
  /*para validar la fecha*/
  public static validarFecha(elemento:FormControl){
    let texto = elemento.value;
    let invalido:boolean = false;
    let aux:Date = new Date(texto);
    let fechaSelecciona:Date = new Date(aux.getUTCFullYear(), aux.getUTCMonth(),aux.getUTCDate());

    invalido = (fechaSelecciona > new Date(new Date().getFullYear(), new Date().getMonth() +6, new Date().getDate()))
            || (fechaSelecciona < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1))

    return invalido ? {fechainvalido:true}:null;
  } 

  public static validarFechaMaxima(elemento:FormControl){
    let texto = elemento.value;
    let invalido:boolean = false;
    let aux:Date = new Date(texto);
    let fechaSelecciona:Date = new Date(aux.getUTCFullYear(), aux.getUTCMonth(),aux.getUTCDate());

    invalido = (fechaSelecciona > new Date(new Date().getFullYear(), new Date().getMonth() +6, new Date().getDate()))
            || (fechaSelecciona < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+10))

    return invalido ? {fechainvalido:true}:null;
  } 


  /*para validar la contraseña*/
  public static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null!;
      }
  
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
  
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null! : error;
    };
  }

 public static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  } 

  /*par validar las paginas*/
  public static validarPaginas(pagina:FormControl){
    let texto = parseInt(pagina.value);
    let invalido:boolean = false;
    let aux:number = 5;
    invalido = (aux < texto);
    return  invalido?{numeroInvalido:true}:null;

  }

  public static validarPaginasanchoyAlto(pagina:FormControl){
    let texto = parseInt(pagina.value);
    let invalido:boolean = false;
    let aux:number = 100;
    let aux1:number = 5000;
    invalido = (aux > texto   || aux1 < texto );
    return  invalido?{numeroInvalido:true}:null;

  }
}
