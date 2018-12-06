import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GlobalProvider {

    public userToken: string;
    public userEmail: string;
    public userName: string;
    public userGender: string;
    public userLevelsCompleted: string;
    public ToLevel: string;

    
    public SUname: string;
    public SUgender: string;
    public SUemail: string;
    public SUpassword: string;
    public SUidentification: string;
    public SUnickname: string;

    public Lemail: string;


    constructor(public http: HttpClient) { }

}