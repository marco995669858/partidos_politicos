import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService extends ApiClass{
    constructor(private http: HttpClient) {
        super();
     }

    getListarUsuario():Observable<{
        error: boolean,
        msg: string,
        data: any[]
    }>{
        let response:any = {error:false, msg:'', data: null}
        return this.http.get<any>(this.url+'usuario/listaUsuario').pipe(
            map((r)=>{
                response.data = r.usuario;
                return response;
            }),catchError(this.error)
        )
    }

    postAgregarUsuario(request:any):Observable<{
        error: boolean,
        msg: string,
        data:string
    }>{
        const response:any = {error: false, msg: '', data:null};
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.post<any>(this.url+'usuario/nuevo', JSON.stringify(request),{headers}).pipe(
            map((r)=>{
                response.data = r.message;
                return response;
            }),catchError(this.error)
        )
    }

    getBuscarPesonaNatural(dni:any):Observable<{
        error: boolean,
        msg: string,
        data:string
    }>{
        let response:any = {error: false, msg: '', data: null};
        let params = new HttpParams().set('dni',dni);

        return this.http.get<any>(this.url+'usuario/buscarDni', {params}).pipe(
            map(r=>{
                response.data = r;
                return response;
            }),catchError(this.error)
        )
    }

    postBuscarUsuario(codigo:any):Observable<{
        error: boolean,
        msg: string,
        data:string
    }>{
        let response:any = {error: false, msg: '', data: null};
        const formData = new FormData();
        formData.append("codigo", codigo);
        return this.http.post<any>(this.url+'usuario/buscarusuario',formData).pipe(map(r=>{
            response.data = r.usuario;
            return response;
        }),catchError(this.error));
    }

    putActializarDatosPerfil(codigo: any, request:any):Observable<{
        error: boolean,
        msg: string,
        data:string
    }>{
        let response:any = {error: false, msg: '', data: null};
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        return this.http.put<any>(this.url+'usuario/actualizar?codigo=' + codigo,JSON.stringify(request), {headers}).pipe(map(r=>{
            response.data = r.message;
            return response;
        }),catchError(this.error));
    }
}