import { Component } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonSelect, IonIcon } from '@ionic/angular/standalone';
import { NgFor, NgClass,NgIf, DecimalPipe} from '@angular/common';
import{caretDown, caretUp} from "ionicons/icons";
import { CrpytoService } from '../services/crpyto.service';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, NgFor, IonList, MatPaginatorModule, IonSelect, NgClass, IonIcon, NgIf, DecimalPipe],
})
export class ExplorePage{

  cryptos: any[] = [];
  displayedCryptos: any[] = [];
  pageSize = 100;
  length = 0;
  pageIndex = 0;

  constructor(private crypto: CrpytoService, private router: Router) {
    addIcons({caretDown, caretUp});
   }

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

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedCryptos();
  }

  viewGraph(id: string) {
    console.log('View graph for:', id);
    this.crypto.setcoinId(id);
    this.router.navigate(['/coinview']);
  }

}

