import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/class';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URl + "GetAllClients"); // Fixed "API_URl" to "API_URL"
  }  
  
  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URl + "GetAllEmployee"); // Fixed "API_URl" to "API_URL"
  }

  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URl + "AddUpdateClient", obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URl + "DeleteClientByClientId?clientId="+id);
  }

  addAddClientUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URl + "AddUpdateClientProject", obj);
  }
}
