import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { ENTITY } from './entities/entity';


@Injectable()
export class FormService {

  private BASE_URL: 'http://localhost/api';

  constructor(
    private http = Http
  ) { }

create(entity: ENTITY) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
  const options = new RequestOptions({ headers: headers });
  const body = JSON.stringify(entity);
  return this.http.post (this.BASE_URL + 'create', body, options).map((res: Response) => res.json());
}
}
