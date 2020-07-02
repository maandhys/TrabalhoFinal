import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-meajuda',
  templateUrl: './meajuda.page.html',
  styleUrls: ['./meajuda.page.scss'],
})
export class MeajudaPage implements OnInit {

  arrayAjuda: any[] = [];

  constructor(public alertController: AlertController) {

  }

  ngOnInit() {
    this.hide(document.getElementById('ajudar'));
    this.show(document.getElementById('receber'));
  }

  register(form) {
    var help = form.form.value
    this.arrayAjuda.push({
      'nome': help.name,
      'email': help.email,
      'telefone': help.telefone,
      'descricao': help.descricao,
      'local': help.local
    })
    this.Alert();
  }

  async Alert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cadastro',
      subHeader: '',
      message: 'Solicitacão de ajuda cadastrada',
      buttons: ['OK']
    });
    await alert.present();
  }


  async presentAlert(info) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ajuda',
      subHeader: 'Entre em contato com' + info.nome,
      message: '        Telefone: ' + info.telefone + '        Email: ' + info.email + '        local: ' + info.local,
      buttons: ['OK']
    });
    await alert.present();
  }

  segmentChanged(ev: any) {
    if (ev.detail.value == 'receber') {
      this.hide(document.getElementById('ajudar'));
      this.show(document.getElementById('receber'));
    } else {
      this.hide(document.getElementById('receber'));
      this.show(document.getElementById('ajudar'));
    }
  }

  hide(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'none';
    }
  }

  show(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = 'block';
    }
  }

}
