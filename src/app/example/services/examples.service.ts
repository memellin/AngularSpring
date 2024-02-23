
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Example } from '../model/example';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  private readonly API = 'api/examples';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Example[]>(this.API)
    .pipe(
      first(),
      delay(1500),
      tap(examples => console.log(examples))
    );
  }

}
