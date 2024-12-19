import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, CollectionReference, DocumentData, onSnapshot, query, where } from '@angular/fire/firestore';
import { addDoc, collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { getDocs } from '@angular/fire/firestore';



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


  private readonly userWatchlist$ = this.authenticatedUser$.pipe(
    switchMap(user => !user ? of([]) :
      collectionData(
        query(collection(this.tasksCollectionRef, `${user?.uid}/watchlist`)),
        { idField: 'id' }
      ) as Observable<Task[]>
    )
  );


  async addCoinToWatchlist(coin: Task) {
    const user = this.authService.currentUser;
    const userWatchlistRef = doc(this.tasksCollectionRef, `${user?.uid}/watchlist/${coin.coinId}`);
    await setDoc(userWatchlistRef, coin, { merge: true });
  }

  getCoinList(): Observable<string> {
    return this.userWatchlist$.pipe(
      map(coinList => this.filterCoinList(coinList))
    );
  }

  
  private filterCoinList(coinList: any[]) {
    const list = coinList.map(coin => coin.coinId).join(',');
    console.log('Coin list:', list);
    return list;
  }


}

