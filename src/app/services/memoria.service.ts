import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Memoria } from '../models/memoria.model';

@Injectable({
  providedIn: 'root'
})
export class MemoriaService {

  constructor(private firestore: AngularFirestore) {}

  getObservable(): Observable<Memoria[]> {
    return this.firestore.collection<Memoria>('memoria').valueChanges({ idField: 'id' });
}

async add(memoria: Memoria): Promise<Memoria> {
  const docRef = await this.firestore.collection<Memoria>("memoria").add(memoria);
  const doc = await docRef.get();
  return {
    id: doc.id,
    ...doc.data(),
  } as Memoria;
}
async get(id: string): Promise<Memoria> {
  const doc = await this.firestore.collection<Memoria>('memoria').doc(id).get().toPromise();
  return {
    id: doc.id,
    ...doc.data(),
  } as Memoria;
}
async update(id: string, memoria: Memoria): Promise<void> {

    await this.firestore.collection<Memoria>('memoria').doc(id).update(memoria);

}
async delete(memoriaId): Promise<void> {
  await this.firestore.collection('memoria').doc(memoriaId).delete();
}
}
