import { Component, OnInit } from '@angular/core';
import { RecuperadosService } from '../service/recuperados.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-brasil',
  templateUrl: './brasil.page.html',
  styleUrls: ['./brasil.page.scss'],
})
export class BrasilPage implements OnInit {

  brasilGeral: any;
  dadosEstado: any;
  confirmed: 0;
  deaths: 0;
  recovered: 0;
  estado = false;

  constructor(private service: RecuperadosService,
    public loadingController: LoadingController) { }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  async ngOnInit() {
    this.brasilGeral = await this.service.getCasosBrasil();
    this.brasilGeral = this.brasilGeral.data;
    this.confirmed = this.numberWithCommas(this.brasilGeral.confirmed);
    this.deaths = this.numberWithCommas(this.brasilGeral.deaths);
    this.recovered = this.numberWithCommas(this.brasilGeral.recovered);
  }

  async getDadosEstado(estado) {
    this.dadosEstado = await this.service.getCasosBrasilPorEstado(estado.detail.value);
    this.estado = true;
    this.dadosEstado.cases = this.numberWithCommas(this.dadosEstado.cases);
    this.dadosEstado.deaths = this.numberWithCommas(this.dadosEstado.deaths);
    this.dadosEstado.suspects = this.numberWithCommas(this.dadosEstado.suspects);
    this.dadosEstado.refuses = this.numberWithCommas(this.dadosEstado.refuses);
  }
}


