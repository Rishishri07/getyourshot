import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class VaccinationCentersService {

  constructor(private httpClient: HttpClient) { }

  public getCenters(state: string): Observable<any> {
    return this.httpClient.get(`https://getyourshot.herokuapp.com/getcenterbystate/${state}`);
  }
}
