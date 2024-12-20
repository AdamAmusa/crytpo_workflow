import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, CollectionReference, deleteDoc, DocumentData, DocumentReference, getDoc, onSnapshot, query, where } from '@angular/fire/firestore';
import { addDoc, collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { getDocs } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular/standalone';



export interface Task {
  coinId?: string;
}


@Injectable({
  providedIn: 'root'
})

export class WatchlistService {
  
  private readonly alertController = inject(AlertController);
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


  private async presentAlert(coin:any, option:any) {
    if(option === 'delete'){
      const alert = await this.alertController.create({
      header: 'Coin Deleted',
      message: coin.coinId + ' has been deleted from your watchlist',
      buttons: ['OK'],
    });
    await alert.present();
    }
    else{
      const alert = await this.alertController.create({
      header: 'Coin Added',
      message: coin.coinId+ ' has been added to your watchlist',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
  async addCoinToWatchlist(coin: Task) {
    const user = this.authService.currentUser;
    const userWatchlistRef = doc(this.tasksCollectionRef, `${user?.uid}/watchlist/${coin.coinId}`);
    this.presentAlert(coin, "add");
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
    const coinObj = { coinId: coin };
    this.presentAlert(coinObj, "delete");
    await deleteDoc(userWatchlistRef);

  }

  
  private filterCoinList(coinList: any[]) {
    const list = coinList.map(coin => coin.coinId).join(',');
    console.log('Coin list:', list);
    return list;
  }




}



