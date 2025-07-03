import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'https://dummy.restapiexample.com/api/v1';

  constructor(private _http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this._http.get(`${this.apiUrl}/employees`);
  }

  getEmployee(id: number): Observable<any> {
    return this._http.get(`${this.apiUrl}/employee/${id}`);
  }

  createEmployee(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/create`, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`${this.apiUrl}/update/${id}`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
