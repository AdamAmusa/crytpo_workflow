import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonGrid, IonCol, IonRow, IonCardSubtitle, IonCard, IonCardContent, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { CryptoGraphComponent } from '../components/crypto-graph/crypto-graph.component';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from "ionicons/icons";
import { CrpytoService } from '../services/crpyto.service';
import { WatchlistService } from '../services/watchlist.service';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-coinview',
  templateUrl: './coinview.page.html',
  styleUrls: ['./coinview.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonCardSubtitle, CryptoGraphComponent, IonGrid, IonCol, IonRow, CommonModule, FormsModule, IonCard, IonCardContent, IonCardTitle, IonButton]
})
export class CoinviewPage{

  coinName?: string = "";
  data: any = [];
  errorMessage: any;
  constructor(private crypto: CrpytoService, private list: WatchlistService) {
    addIcons({ chevronBackOutline });

    // get the coin name
    this.coinName = this.crypto.getcoinId();

    // get the data from the api
    this.crypto.getMarketData().subscribe(data => { 
      this.data = data;
    },
      error => {
        this.errorMessage = "Rate Limit Exceeded";
      }
    );
  }

  // add coin to watchlist
  async addCoinToWatchlist() {
    // structure the coin object
    const coin = { coinId: this.crypto.getcoinId() };
    await this.list.addCoinToWatchlist(coin);
  }

  //capacitor browser plugin to open a browser
  learnMore = async () => {
    await Browser.open({ url: `https://www.google.com/search?q=${this.coinName}` });
  };


}
