import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts()
  { //link of json file present inside asset folder
    let url="assets/mobile.json";
    return this.http.get(url);
  }
}
