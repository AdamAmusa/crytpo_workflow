import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonSelect, IonIcon,IonItemSliding,IonItemOption,IonItemOptions, IonCol, IonGrid, IonRow} from '@ionic/angular/standalone';
import { NgFor, NgClass,NgIf, DecimalPipe} from '@angular/common';
import{caretDown, caretUp} from "ionicons/icons";
import { CrpytoService } from '../services/crpyto.service';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { WatchlistService } from '../services/watchlist.service';
import { ShortenNumberPipe } from '../shorten-number.pipe';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, NgFor, IonList, MatPaginatorModule, IonSelect, NgClass, IonIcon, NgIf, DecimalPipe,IonItemSliding,IonItemOption,IonItemOptions, IonRow, IonCol, IonGrid, ShortenNumberPipe],
})
export class ExplorePage{

  cryptos: any[] = [];
  displayedCryptos: any[] = [];
  pageSize = 100;
  length = 0;
  pageIndex = 0;

  constructor(private crypto: CrpytoService, private router: Router, private watchlist:WatchlistService) {
    addIcons({caretDown, caretUp});
   }

   public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
    },
  ];

  async ngOnInit() {
    this.crypto.getCoinList().subscribe(data => {
      this.cryptos = data;
      this.length = data.length;
      this.updateDisplayedCryptos();
    });
  }

  updateDisplayedCryptos() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCryptos = this.cryptos.slice(startIndex, endIndex);
  }

  // Pagination
  onPageChange(event: PageEvent) {
    // Update the page index and page size
    this.pageIndex = event.pageIndex;
    // Update the page size
    this.pageSize = event.pageSize;
    this.updateDisplayedCryptos();
  }

  // View graph for a specific coin
  viewGraph(id: string) {
    console.log('View graph for:', id);
    this.crypto.setcoinId(id);
    this.router.navigate(['/coinview']);
  }

  async deletefromWatchlist(coin: any) {
    // Remove the coin from the watchlist
    await this.watchlist.removeCoinFromWatchlist(coin);
  }

  async addtoWatchlist(coin: any) {
    const coinObj = { coinId: coin };
    // Add the coin to the watchlist
    await this.watchlist.addCoinToWatchlist(coinObj);
  }




}

