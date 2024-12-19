import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onSnapshot } from '@angular/fire/firestore';
import { addDoc, collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';



export interface Task {
  coinId?: string;
}


@Injectable({
  providedIn: 'root'
})

export class WatchlistService {

  private readonly firestoreDb = inject(Firestore);
  private readonly authService = inject(Auth);
  private readonly tasksCollectionRef = collection(this.firestoreDb, 'watchlists');

  private readonly authenticatedUser$ = new BehaviorSubject(this.authService.currentUser);



  async addCoinToWatchlist(coin: Task) {
    const user = this.authService.currentUser;
    const userWatchlistRef = doc(this.tasksCollectionRef, `${user?.uid}/watchlist/${coin.coinId}`);
    await setDoc(userWatchlistRef, coin, { merge: true });
  }

  async getCoinList() {
    const user = this.authService.currentUser;
    const userWatchlistRef = collection(this.tasksCollectionRef, `${user?.uid}/watchlist`);
    onSnapshot(userWatchlistRef, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());

      return this.filterCoinList(data);
    },
      (error) => {
        console.log(error);
      },

    );

  }

  private filterCoinList(coinList: any[]) {
    return coinList.map(coin => coin.coinId).join(', ');
  }


}
