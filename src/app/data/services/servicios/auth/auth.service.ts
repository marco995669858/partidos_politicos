import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '@data/interfaces/form/login';
import { ApiClass } from '@data/schema/ApiClass.class';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiClass {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * Función para iniciar sesión
   * @param form Valores del formulario.
   * @returns
   */
  iniciar_session(form: Login): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    let response:any = { error: false, msg: '', data: null  };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.url + 'auth/login', JSON.stringify(form), { headers })
      .pipe(
        map(r => {
          response.data = [r.token, r.nombreUsuario, r.authorities[0]['authority'], r.id];
          return response;
        }),
        catchError(this.error)
      )
  }

/* 
  postEnviarNotificion(correo: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null };
    const payload = new HttpParams().set('correo', correo);
    return this.http.post<any>(this.url + '/usuario/cambioPassword', payload).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )
  } */

 /*  postInvalidarUrl(token: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null };
    const payload = new HttpParams().set('token', token);
    return this.http.post<any>(this.url + '/usuario/invalidarToken', payload).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )
  } */


  /* postAccionesUsuario(email: any, accion: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null };
    const payload = new FormData()
    payload.set('email ', email)
    payload.set('accion', accion);
    return this.http.post<any>(this.url + '/usuario/acciones ', payload).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )
  } */

  /* postCambiarContrasenia(password: any, token: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {

    const response = { error: false, msg: '', data: null };
    const payload = new FormData()
    payload.set('password ', password)
    payload.set('token', token);
    return this.http.post<any>(this.url + '/usuario/cambioPasswordPorToken ', payload).pipe(
      map((r) => {
        response.data = r.msg;
        return response
      }), catchError(this.error)
    )

  } */

/*   getVerPdf(codigo: any, nombre:any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {

    const response = { error: false, msg: '', data: null };
    return this.http.get(`${this.url}/descarga/notificacion/${codigo}/archivo/${nombre}`,{ responseType: 'blob' }).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )

  } */

  /* postAccionesUsuarioPassword(token: any, accion: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null };
    const payload = new FormData()
    payload.set('token ', token)
    payload.set('accion', accion);
    return this.http.post<any>(this.url + '/usuario/acciones/token', payload).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )
  }  */
}
