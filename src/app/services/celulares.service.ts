import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Celulares } from '../models/celulares.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularesService {
  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Celulares[]> {
      return this.firestore.collection<Celulares>('celulares').valueChanges({ idField: 'id' });
  }

  async add(celulares: Celulares): Promise<Celulares> {
    const docRef = await this.firestore.collection<Celulares>("celulares").add(celulares);
    const doc = await docRef.get();
    return {
      id: doc.id,
      ...doc.data(),
    } as Celulares;
  }
  async get(id: string): Promise<Celulares> {
    const doc = await this.firestore.collection<Celulares>('celulares').doc(id).get().toPromise();
    return {
      id: doc.id,
      ...doc.data(),
    } as Celulares;
  }
  async update(id: string, celulares: Celulares): Promise<void> {

      await this.firestore.collection<Celulares>('celulares').doc(id).update(celulares);

  }
  async delete(celularesId): Promise<void> {
    await this.firestore.collection('celulares').doc(celularesId).delete();
  }

}