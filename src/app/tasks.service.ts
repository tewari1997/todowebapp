import { Injectable } from '@angular/core';

import {HttpClient , HttpHeaders} from '@angular/common/http';

const baseUrl = "http://localhost:3000/tasks";

var httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) { }

  getTask(){
    return this._http.get(baseUrl);
  }

  createTask(task){
    return this._http.post(baseUrl,JSON.stringify(task),httpOptions);
  }

  updateTask(id,task){
    return this._http.put(baseUrl+"/"+id,JSON.stringify(task),httpOptions);
  }

  deleteTask(id){
    return this._http.delete(baseUrl+"/"+id);
  }
}
