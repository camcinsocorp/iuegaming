import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../variables/variables.base';
import { Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { ResponseLogin } from '../../../models/response-login';



@Injectable()
export class UserServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServicesProvider Provider');
  }

  Login(model: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params.append('email', model.email);
    params.append('password', model.password);
    return this.http.post(environment.API_DEV_URL + '/user/login',
      // { params: params },
      JSON.stringify(model),
      { headers: headers },
    )
      .map((response: ResponseLogin) => <ResponseLogin>response)
      .toPromise()
      .then((data: ResponseLogin) => {
        return data;
      }, (reason) => {
        return reason;
      });

    // let url = environment.API_DEV_URL + '/user/login';
    // let headers: any = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept' , 'application/json');
    // let urlSearchParams = new URLSearchParams();
    // urlSearchParams.append('email', model.email);
    // urlSearchParams.append('password', model.password);
    // let body = urlSearchParams.toString();
    // // let options = new RequestOptions({ headers: headers });

    // return this.http.post(url, body, 
    //   // { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    //   { headers: headers }
    //   )
    // .map((response: ResponseLogin) => <ResponseLogin>response)
    // .toPromise().then((data: ResponseLogin) => {
    //     return data;
    // }, (reason) => {           
    //     return reason;
    // });

    // return new Promise((resolve, reject) => {
    //   this.http.post(environment.API_DEV_URL + '/user/login', JSON.stringify(model), {
    //     headers: new HttpHeaders().set('Content-Type', 'application/json')
    //   })
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     }
    //     );
    // });
  }
}
