import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '@data/interfaces/form/login';
import { ApiClass } from '@data/schema/ApiClass.class';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService extends ApiClass {

  constructor(private http: HttpClient) {
    super();
  }

/*   getListadoAcciones():Observable<{
    error:boolean,
    msg:string,
    data:Auditoria[]
  }>{
    const response = {error:false,msg:'',data:null};
    return this.http.get<any>(this.url + '/usuario/listadoAcciones').pipe(
        map(r=>{
            response.data = r.datos;
            return response;
        }),catchError(this.error)
    )
  }*/

  getBuscarAcciones(value:any):Observable<{
    error:boolean,
    msg:string,
    data:any[]
  }>{
    const response:any = { error: false, msg: '', data: null };
    const formData = new FormData();
    const params = new HttpParams().set('value',value);
    return this.http.get<any>(this.url+'/filtroacciones?'+params).pipe(
      map(r => {
        response.data = r.datos;
        return response;
      }),
      catchError(this.error)
    );

  }

}
