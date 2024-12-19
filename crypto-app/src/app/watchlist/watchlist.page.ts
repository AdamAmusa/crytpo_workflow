import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem,IonLabel, IonIcon } from '@ionic/angular/standalone';
import { CrpytoService } from '../services/crpyto.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { caretDown, caretUp } from 'ionicons/icons';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonIcon]
})
export class WatchlistPage implements OnInit { 
  list: any[] = []; // Initialize list as an empty array
   constructor(
     private crypto: CrpytoService, private router: Router) {
          addIcons({caretDown, caretUp});
      
      }


     async ngOnInit() {
      this.crypto.getWatchlist().subscribe(data => {
        this.list = data;
      }); // Subscribe to the result of getWatchlist
    }

  viewGraph(id: string) {
    console.log('View graph for:', id);
    this.crypto.setcoinId(id);
    this.router.navigate(['/coinview']);
  }

}


