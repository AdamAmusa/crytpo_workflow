import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar, IonList, IonItemSliding, IonLabel, IonIcon, IonItem, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { CrpytoService } from '../services/crpyto.service';
import { ShortenNumberPipe } from '../shorten-number.pipe';
import { WatchlistService } from '../services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItemSliding, IonLabel, IonIcon, IonItem, IonItemOption, IonItemOptions, ShortenNumberPipe]
})
export class SearchPage implements OnInit {
searchQuery: string = '';
data: any[] = [];
  constructor(private crypto: CrpytoService, private watchlist: WatchlistService, private router: Router) { }

  ngOnInit() {
  }


    onSearchInput(event: any) {
      // Update the search query
      this.searchQuery = event.target.value;
    }

    onSearchEnter() {
      //Set the coinId to the search query
      this.crypto.setcoinId(this.searchQuery);
      if(this.searchQuery != ''){
        //Subscribe to the getMarketData method to retrieve coin data
      this.crypto.getMarketData().subscribe(data => {
        this.data = data;
      });
    }
 
    }

    async addtoWatchlist(coin: any) {
      const coinObj = {coinId: coin};
      this.watchlist.addCoinToWatchlist(coinObj);
    }

    async deletefromWatchlist(coin: any) {
      this.watchlist.removeCoinFromWatchlist(coin);
    }

    async viewGraph(id: string) {
      console.log('View graph for:', id);
      this.crypto.setcoinId(id);
      this.router.navigate(['/coinview']);

    }
}
