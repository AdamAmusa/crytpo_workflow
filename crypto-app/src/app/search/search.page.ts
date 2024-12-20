import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar, IonList, IonItemSliding, IonLabel, IonIcon, IonItem, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { CrpytoService } from '../services/crpyto.service';
import { ShortenNumberPipe } from '../shorten-number.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSearchbar, IonList, IonItemSliding, IonLabel, IonIcon, IonItem, IonItemOption, IonItemOptions, ShortenNumberPipe]
})
export class SearchPage implements OnInit {
searchQuery: string = '';
displayedCryptos: any[] = [];
  constructor(private crypto: CrpytoService) { }

  ngOnInit() {
  }


    onSearchInput(event: any) {
      this.searchQuery = event.target.value;
    }

    onSearchEnter() {
      this.crypto.setcoinId(this.searchQuery);
      this.crypto.getMarketData().subscribe(data => {
        this.displayedCryptos = data;
      });
    }
}
