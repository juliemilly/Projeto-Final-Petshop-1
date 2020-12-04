import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-petshop',
  templateUrl: './cadastro-petshop.page.html',
  styleUrls: ['./cadastro-petshop.page.scss'],
})
export class CadastroPetshopPage implements OnInit {

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
