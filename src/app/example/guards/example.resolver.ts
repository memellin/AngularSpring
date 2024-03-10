import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExamplesService } from '../services/examples.service';
import { Example } from '../model/example';

@Injectable({
  providedIn: 'root',
})
export class ExampleResolver implements Resolve<Example> {
  constructor(private service: ExamplesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Example> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']).pipe();
    }
    return of({ _id: '', name: '', ppg: '' });
  }
}
