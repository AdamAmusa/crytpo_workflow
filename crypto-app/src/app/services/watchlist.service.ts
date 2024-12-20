import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, CollectionReference, deleteDoc, DocumentData, DocumentReference, getDoc, onSnapshot, query, where } from '@angular/fire/firestore';
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

  async removeCoinFromWatchlist(coin: String) {
    const user = this.authService.currentUser;
    const userWatchlistRef = doc(this.tasksCollectionRef, `${user?.uid}/watchlist/${coin}`);
    await deleteDoc(userWatchlistRef);

  }



  
  private filterCoinList(coinList: any[]) {
    const list = coinList.map(coin => coin.coinId).join(',');
    console.log('Coin list:', list);
    return list;
  }

  async inWatchlist(coin: any): Promise<boolean> {
    const user = this.authService.currentUser;
    const userWatchlistRef = doc(this.tasksCollectionRef, `${user?.uid}/watchlist/${coin}`);
    const snap = await getDoc(userWatchlistRef);
    if (snap.exists()) {
      console.log('Coin is in watchlist');
      return true;
    }
    return false;
  }


}



