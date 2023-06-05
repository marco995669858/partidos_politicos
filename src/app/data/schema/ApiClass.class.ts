import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

export class ApiClass{
  public url = environment.url;
  public isProduction = environment.production;
  /*encabezado de cabezera de envio al servidor*/
  constructor() { }

  error(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage:_${error.message}`;
    }
    return of({error: true, msg: errorMessage, data: null});
  };

  protected addHeaders(request: HttpRequest<any>) {
    let token: string | null = '';
    token = sessionStorage.getItem('token');
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      return request;
    }

  }

}