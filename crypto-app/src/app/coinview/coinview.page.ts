import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { CryptoGraphComponent } from '../components/crypto-graph/crypto-graph.component';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from "ionicons/icons";
import { CrpytoService } from '../services/crpyto.service';
@Component({
  selector: 'app-coinview',
  templateUrl: './coinview.page.html',
  styleUrls: ['./coinview.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, CryptoGraphComponent, IonGrid, IonCol, IonRow, CommonModule, FormsModule]
})
export class CoinviewPage implements OnInit {

  coinName?: string = "";
  constructor(private crypto: CrpytoService) {
    addIcons({ chevronBackOutline });
    this.coinName = this.crypto.getcoinId();
   }

  ngOnInit() {
  }

}
