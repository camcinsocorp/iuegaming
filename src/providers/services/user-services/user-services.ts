import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../variables/variables.base';
import { Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { ResponseLogin } from '../../../models/response-login';
import { ResponseSingup } from '../../../models/response-singup';



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
  }

  Signup(model: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams();
    params.append('email', model.email);
    params.append('password', model.password);
    params.append('identification', model.identification);
    params.append('name', model.name);
    params.append('gender', model.gender);
    params.append('nickname', model.nickname);
    return this.http.post(environment.API_DEV_URL + '/user/singup',
      // { params: params },
      JSON.stringify(model),
      { headers: headers },
    )
      .map((response: ResponseSingup) => <ResponseSingup>response)
      .toPromise()
      .then((data: ResponseSingup) => {
        return data;
      }, (reason) => {
        return reason;
      });
  }

  ForgorPassword(model: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API_DEV_URL + '/user/forgot_password',
      // { params: params },
      JSON.stringify(model),
      { headers: headers },
    )
      .map((response: ResponseSingup) => <ResponseSingup>response)
      .toPromise()
      .then((data: ResponseSingup) => {
        return data;
      }, (reason) => {
        return reason;
      });
  }

  ConfirmToken(model: any) {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // return this.http.post(environment.API_DEV_URL + '/user/verify_token',
    //   // { params: params },
    //   JSON.stringify(model),
    //   { headers: headers },
    // )
    //   .map((response: ResponseSingup) => <ResponseSingup>response)
    //   .toPromise()
    //   .then((data: ResponseSingup) => {
    //     return data;
    //   }, (reason) => {
    //     return reason;
    //   });
  //   // let headers = new HttpHeaders();
  //   // headers.append('Content-Type', 'application/json');
  //   // return this.http.post(environment.API_DEV_URL + '/user/verify_token', JSON.stringify(model), { headers: headers })
  //   //   .map((response: ResponseSingup) => <ResponseSingup>response);
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   let params = new HttpParams();
  //   params.append('token', model.token);
  //   return this.http.post(environment.API_DEV_URL + '/user/verify_token',
  //     // { params: params },
  //     JSON.stringify(model),
  //     { headers: headers },
  //   )
  //     .map((response: ResponseSingup) => <ResponseSingup>response)
  //     .toPromise()
  //     .then((data: ResponseSingup) => {
  //       return data;
  //     }, (reason) => {
  //       return reason;
  //     }).catch(err => {
  //       console.log(err);

  //   });
  }
  RecoverPassword(model: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API_DEV_URL + '/user/reset_password',
      // { params: params },
      JSON.stringify(model),
      { headers: headers },
    )
      .map((response: ResponseSingup) => <ResponseSingup>response)
      .toPromise()
      .then((data: ResponseSingup) => {
        return data;
      }, (reason) => {
        return reason;
      });
  }
}
