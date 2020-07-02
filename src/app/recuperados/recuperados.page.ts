import { Component, OnInit } from '@angular/core';
import { RecuperadosService } from '../service/recuperados.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-recuperados',
  templateUrl: './recuperados.page.html',
  styleUrls: ['./recuperados.page.scss'],
})
export class RecuperadosPage implements OnInit {

  constructor(private service: RecuperadosService) { }
  brasil: any;
  mundo: any;
  atualizacao: any;
  totalCasosBrasil: 0;
  totalCasosMundo: 0;

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  async ngOnInit() {
    // Buscar casos no Brasil
    this.brasil = await this.service.getCasosBrasil();
    this.totalCasosBrasil = this.numberWithCommas(this.brasil.data.recovered);
  
    // Buscar casos no mundo
    this.mundo = await this.service.getCasosMundo();
    this.totalCasosMundo = this.numberWithCommas(this.mundo.data.reduce((totalCasos, x) => totalCasos + x.recovered, 0));

  }
}

