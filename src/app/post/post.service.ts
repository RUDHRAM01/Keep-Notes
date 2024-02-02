import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) { }
  // get all method
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/posts/').pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server Error');
    }));
  }

  // create method
  create(post:Post): Observable<any> {
    return this.httpClient.post(this.apiUrl + '/posts/', JSON.stringify(post), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server Error');
    }));
  }

  // find data by id
  find(id: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/posts/' + id).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server Error');
    }));
  }

  // update method
  update(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.apiUrl + '/posts/' + id, JSON.stringify(post), this.httpOptions).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server Error');
    }));
  }

  // delete method
  delete(id: number) {
    return this.httpClient.delete(this.apiUrl + '/posts/' + id).pipe(catchError((error: HttpErrorResponse) => {
      return throwError(error.message || 'Server Error');
    }));
  }
}
