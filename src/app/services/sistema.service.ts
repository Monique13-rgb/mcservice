import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Sistema } from '../models/sistema.model';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  constructor(private firestore: AngularFirestore) {}


  getObservable(): Observable<Sistema[]> {
    const ref = this.firestore
    .collection<Sistema>("sistema");
  return ref.valueChanges({ idField: "id" });
}

async add(sistema: Sistema): Promise<Sistema> {
  const docRef = await this.firestore.collection<Sistema>('sistema').add(sistema);
  const doc = await docRef.get();
  return {
    id: doc.id,
    ...doc.data(),
  } as Sistema;
}
async get(idSistema: string): Promise<Sistema> {
  const doc = await this.firestore.collection('sistema').doc(idSistema).get().toPromise();
  return {
    id: doc.id,
    ...doc.data(),
  } as Sistema;
}
async update(sistema: Sistema): Promise<void> {
    await this.firestore.collection('sistema').doc(sistema.id).update(sistema);

}
async delete(sistemaId): Promise<void> {
  await this.firestore.collection('sistema').doc(sistemaId).delete();
}
}