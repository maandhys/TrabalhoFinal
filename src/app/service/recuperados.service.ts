import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecuperadosService {

  url = "https://covid19-brazil-api.now.sh/api/report/v1";

  constructor(private http: HttpClient) { }
  
  async getCasosBrasil() {
    let response = await this.http.get(this.url + "/brazil").toPromise();
    console.log(response);
    return response;
  }

  async getCasosMundo() {
    let response = await this.http.get(this.url + "/countries").toPromise();
    console.log(response);
    return response;
  }

  async getCasosBrasilPorEstado(estado) {
    let response = await this.http.get(this.url+ "/brazil/uf/" + estado.toLowerCase()).toPromise();
    console.log(response);
    return response;
  }

 

}
