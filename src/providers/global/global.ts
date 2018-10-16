import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GlobalProvider {

    public userToken: string;
    public userEmail: string;
    public userName: string;
    public userGender: string;
    public userLevelsCompleted: string;

    constructor(public http: HttpClient) { }

}