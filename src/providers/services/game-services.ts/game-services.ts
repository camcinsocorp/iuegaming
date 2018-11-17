import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../variables/variables.base';
import { Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { ResponseLogin } from '../../../models/response-login';
import { ResponseSingup } from '../../../models/response-singup';
import { ResponseTop } from '../../../models/response-top';
import { ResponseGame } from '../../../models/response-game';
import { ResponseGameLevel } from '../../../models/response-game-level';



@Injectable()
export class GameServicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserServicesProvider Provider');
  }

  getAllLevels(){
    return this.http.get(environment.API_DEV_URL + '/game/getlevel')
      .map((response: ResponseGame) => <ResponseGame>response)
      .toPromise()
      .then((data: ResponseGame) => {
        return data;
      }, (reason) => {
        return reason;
      });
  }

  getLevels(model: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API_DEV_URL + '/game/level',
      // { params: params },
      JSON.stringify(model),
      { headers: headers },
    )
      .map((response: ResponseGameLevel) => <ResponseGameLevel>response)
      .toPromise()
      .then((data: ResponseGameLevel) => {
        return data;
      }, (reason) => {
        return reason;
      });
  }

}