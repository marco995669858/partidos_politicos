import { Roles } from "./roles";

export interface Usuario {
    id?: number;
    nombrecompleto?:string;
    nombreusuario?:string;
    apellidosusuario?:string;
    correo?:string;
    correoalternativo?:string;
    password?:string;
    fechanacimiento?:string;
    dni?:string;
    celular?:string;
    sexo?:string;
    fecharegistro?:string;
    fechaactualizacion?:string;
    roles?: Roles;
}
