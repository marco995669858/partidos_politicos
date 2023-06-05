import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass.class';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService extends ApiClass {

  constructor(private http: HttpClient) {
    super();
  }

 /*  getListarNotificaciones(): Observable<{
    error: boolean,
    msg: string,
    data: any[]
  }> {
    const response = { error: false, msg: '', data: null };
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(this.url + '/notificaciones', { headers })
      .pipe(
        map(r => {
          response.data = r.datos;
          return response;
        }),
        catchError(this.error)
      );
  }

  getBuscarNotificaciones(valor: any): Observable<{
    error: boolean,
    msg: string,
    data: any[]
  }> {
    const response = { error: false, msg: '', data: null };
    const params = new HttpParams().set('value', valor);
    return this.http.get<any>(this.url + '/filtronotificaciones?' + params).pipe(
      map(r => {
        response.data = r.datos;
        return response;
      }),
      catchError(this.error)
    );
  }

  getPDF(codigo: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null }
    return this.http.get(`${this.url}/ObtenerAcuse/${codigo}`, { responseType: 'blob' }).pipe(
      map(r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );

  }

  getToexcell(): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null }
    return this.http.get(`${this.url}/exportacionTablaPrincipal`, { responseType: 'blob' }).pipe(
      map(r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );

  }

  getEstadisticasToExcel(fechainicio: any,fechafin: any): Observable<{
    error: boolean,
    msg: string,
    data: string
  }> {
    const response = { error: false, msg: '', data: null }
    const payload = new HttpParams().set('fechaInicio',fechainicio).set('fechaFin',fechafin)
    return this.http.get(`${this.url}/reporte?${payload}`, { responseType: 'blob' }).pipe(
      map(r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );

  }

  getBuscarPorFecha(fechainicio: any,fechafin: any,campo:any): Observable<{
    error: boolean,
    msg: string,
    data: any[]
  }> {
    const response = { error: false, msg: '', data: null }
    const payload = new HttpParams().set('fechaInicio',fechainicio).set('fecha Fin',fechafin).set('campo',campo);
    return this.http.get<any>(`${this.url}/filtronotificacionesfechas?${payload}`).pipe(
      map(r => {
        response.data = r.datos;
        return response;
      }),
      catchError(this.error)
    );

  }

  getListarInformacionNotificaciones(): Observable<{
    error: boolean,
    msg: string,
    data: any[]
  }> {
    const response = { error: false, msg: '', data: null }
     return this.http.get<any>(`${this.url}/cantidadNotificaciones`).pipe(
      map(r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );

  }

  postRegistrarNotificaciones(usuario: any, tipo_notificacion: any, cod_reclamo: any, nro_doc: any,
  correlativo: any, recurrenteDNI: any, recurrenteNombre: any, recurrenteCorreo: any,
  remitente: any, correoa: any,file: File,files, files2,tipo_archivo: any): Observable<{
    error: boolean,
    msg: string,
    data: any
  }> {
    const response = { error: false, msg: '', data: null };
    const payload = new FormData()
    payload.append('usuario', usuario)
    payload.append('tipo_notificacion', tipo_notificacion)
    payload.append('cod_reclamo', cod_reclamo)
    payload.append('nro_doc', nro_doc)
    payload.append('correlativo', correlativo)
    payload.append('recurrenteDNI', recurrenteDNI)
    payload.append('recurrenteNombre', recurrenteNombre)
    payload.append('recurrenteCorreo', recurrenteCorreo)
    payload.append('remitente', remitente)
    payload.append('correoa', correoa)
    payload.append('file', file)
    payload.append('files', files)
    payload.append('files2', files2)
    payload.append('tipo_archivo', tipo_archivo)
    return this.http.post(this.url + '/regnotificacion ', payload).pipe(
      map((r) => {
        response.data = r;
        return response
      }), catchError(this.error)
    )
  }
 */

}
