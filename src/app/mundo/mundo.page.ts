import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { RecuperadosService } from '../service/recuperados.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.page.html',
  styleUrls: ['./mundo.page.scss'],
})
export class MundoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;


  constructor(private service: RecuperadosService) { }

  mundo: any;
  mundoPage: any[];
  private index: number = 0;
  private readonly offset: number = 10;

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  async ngOnInit() {
    // Buscar casos no mundo
    this.mundo = await this.service.getCasosMundo();
    this.mundo = this.mundo.data;
    this.mundoPage = this.mundo.slice(this.index, this.offset + this.index); this.index += this.offset;
    this.index += this.offset;
  }

  loadData(event) {
    setTimeout(() => {
      let newPage = this.mundo.slice(this.index, this.offset + this.index);
      this.index += this.offset;
      for (let i = 0; i < newPage.length; i++) {
        this.mundoPage.push(newPage[i]);
      }
      event.target.complete();
      if (this.mundoPage.length == this.mundo.length) {
        event.target.disabled = true;
      }
    }, 500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }
}
