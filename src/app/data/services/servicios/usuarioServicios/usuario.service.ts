import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '@data/interfaces/form/login';
import { ApiClass } from '@data/schema/ApiClass.class';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService extends ApiClass {

  constructor(private http: HttpClient) {
    super();
  }

 /*  postRegistrarUsuario(params:any):Observable<{
    error:boolean,
    msg:string,
    data:string
  }>{

    let response:any = {error:false,msg:'', data:null};
    return this.http.post<any>(this.url + "/usuario/nuevo", JSON.stringify(params)).pipe(
      map((r) =>{
        response.data = r.message;
        return response;
      }),
      catchError(this.error)
    );
  } */

/*   registrar_usuario(form:Login):Observable<{
    error:boolean,
    msg:string,
    data:string
  }>{
    const response = {error:false, msg:'', data:null};
    let payload = new FormData();
    payload.set('email',form.email);
    payload.set('password',form.password)
    payload.set('nombres',form.nombres)
    payload.set('apellidos',form.apellidos);

    return this.http.post<any>(this.url+'/usuario/registro',payload)
    .pipe(
      map( r=> {
        response.data = r.creado;
        return response;
      }),
      catchError(this.error)
    )
  }

  getListarUsuario():Observable<{
    error:boolean,
    msg:string,
    data:any[]
  }>{
    const response = {error:false,msg:'',data:null};
    return this.http.get<any>(this.url + '/usuario/listado').pipe(
        map(r=>{
            response.data = r.datos;
            return response;
        }),catchError(this.error)
    )
  }

  getEliminarUsuario(codigo:any):Observable<{
    error:boolean,
    msg:string,
    data:string
  }>
  {
    const response ={error:false,msg:'',data:null};
    return this.http.delete<any>(this.url + '/usuario/eliminar/' + codigo).pipe(
        map((r)=>{
            response.data = r;
            return response
        }), catchError(this.error)
    )
  } */
}
