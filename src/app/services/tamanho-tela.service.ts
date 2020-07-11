import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TamanhoTelaService {
  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<tamanhoTela[]> {
    return this.firestore.collection<tamanhoTela>('tamanhoTela').valueChanges({ idField: 'id' });
  }

  async add(tamanhoTela: tamanhoTela): Promise<tamanhoTela> {
    const docRef = await this.firestore.collection<tamanhoTela>("tamanhoTela").add(tamanhoTela);
    const doc = await docRef.get();
    return {
      id: doc.id,
      ...doc.data(),
    } as tamanhoTela;
  }
  async get(id: string): Promise<tamanhoTela> {
    const doc = await this.firestore.collection<tamanhoTela>('tamanhoTela').doc(id).get().toPromise();
    return {
      id: doc.id,
      ...doc.data(),
    } as tamanhoTela;
  }
  async update(id: string, tamanhoTela: tamanhoTela): Promise<void> {

    await this.firestore.collection<tamanhoTela>('tamanhoTela').doc(id).update(tamanhoTela);

  }
  async delete(tamanhoTelaId): Promise<void> {
    await this.firestore.collection('tamanhoTela').doc(tamanhoTelaId).delete();
  }

}
