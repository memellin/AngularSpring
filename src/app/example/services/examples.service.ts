
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Example } from '../model/example';

@Injectable({
  providedIn: 'root'
})
export class ExamplesService {

  constructor(private httpClient: HttpClient) { }

  list(): Example[]{
    return [
      {
        _id: '1', name: 'LeBron James', ppg: '27'
      },
      {
        _id: '2', name: 'Kevin Durant', ppg: '27'
      },
      {
        _id: '3', name: 'Stephen Curry', ppg: '26'
      },
      {
        _id: '4', name: 'James Harden', ppg: '25'
      },
      {
        _id: '5', name: 'Giannis Antetokounmpo', ppg: '25'
      },
      {
        _id: '6', name: 'Anthony Davis', ppg: '25'
      },
      {
        _id: '7', name: 'Damian Lillard', ppg: '24'
      },
      {
        _id: '8', name: 'Luka Doncic', ppg: '24'
      },
      {
        _id: '9', name: 'Kawhi Leonard', ppg: '24'
      },
      {
        _id: '10', name: 'Bradley Beal', ppg: '24'
      }
    ];
  }

}
