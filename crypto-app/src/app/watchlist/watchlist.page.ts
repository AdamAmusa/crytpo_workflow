import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem,IonLabel, IonIcon, IonItemOptions, IonItemSliding, IonItemOption } from '@ionic/angular/standalone';
import { CrpytoService } from '../services/crpyto.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { caretDown, caretUp } from 'ionicons/icons';
import { WatchlistService } from '../services/watchlist.service';
import { ShortenNumberPipe } from '../shorten-number.pipe';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonIcon, IonItemOptions, IonItemSliding, IonItemOption, ShortenNumberPipe]
})
export class WatchlistPage implements OnInit { 
  list: any[] = []; // Initialize list as an empty array
   constructor(
     private crypto: CrpytoService, private router: Router, private watchlist: WatchlistService) {
          addIcons({caretDown, caretUp});
      
      }


     async ngOnInit() {
      this.crypto.getWatchlist().subscribe(data => {
        this.list = data;
      }); // Subscribe to the result of getWatchlist
    }
    //view graph for coin
  viewGraph(id: string) {
    console.log('View graph for:', id);
    this.crypto.setcoinId(id);
    this.router.navigate(['/coinview']);
  }
  //delete coin from watchlist
  async deletefromWatchlist(coin: any) {
    this.watchlist.removeCoinFromWatchlist(coin);
  }

}


