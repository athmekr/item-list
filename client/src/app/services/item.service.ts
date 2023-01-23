import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  readonly ROOT_URL;

  constructor(private httpClient: HttpClient) {
    this.ROOT_URL = 'http://localhost:8000';
  }

  getItems() {
    return this.httpClient.get<Item[]>(`${this.ROOT_URL}/items`);
  }

  createItem(description: string) {
    this.validateItem(description);
    return this.httpClient.post<Item>(`${this.ROOT_URL}/item`, { description });
  }

  validateItem(description: string){

  }
}
