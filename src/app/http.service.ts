import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private http: HttpClient) {}

    httpGet(url: string){
        return this.http.get('https://api.corona-zahlen.org/'+url).pipe(map(responseData =>{
            const dataArray = [];
            for (const key in responseData) {
                if(responseData.hasOwnProperty(key)){
                    dataArray.push({...responseData[key]});
                }
            }
            return dataArray;
        }));
    }
}