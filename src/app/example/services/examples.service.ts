import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Example } from '../model/example';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExamplesService {
  private readonly API = 'api/examples';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Example[]>(this.API).pipe(
      first(),
      delay(500),
      tap((examples) => console.log(examples))
    );
  }

  getById(id: string) {
    // `` concatenação do ecma script -> ``
    return this.httpClient.get<Example>(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<Example>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Example>) {
    return this.httpClient.post<Example>(this.API, record).pipe(first());
  }

  private update(record: Partial<Example>) {
    return this.httpClient
      .put<Example>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }

  delete(id: string){
    return this.httpClient.delete<Example>(`${this.API}/${id}`)
     .pipe(first());
  }
}
