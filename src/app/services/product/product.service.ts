import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface IPizza {
  id: number
  name: string
  ingredients: string[]
  image: string
}
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
}
