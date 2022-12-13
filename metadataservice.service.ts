import { catchError, retry} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../Product';
import { Observable, of,map } from 'rxjs';
const apiUrl = 'https://dummyjson.com/products';


@Injectable({
  providedIn: 'root'
})

export class MetadataserviceService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(apiUrl).pipe(map(val=>val.products), retry(3), catchError(this.handleError<Product[]>('getProducts', []))
     );
  }
  getProductById(id: string): Observable<Product> {
    const url = `https://dummyjson.com/products/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Product>(url, {params, headers});
  }
  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
