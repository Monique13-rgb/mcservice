import { Injectable } from '@angular/core';
import { Marca } from '../models/marca.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor (private firestore: AngularFirestore) {}

  async add(marca: Marca): Promise<Marca>{
const docRef = await this.firestore.collection<Marca>('marca').add(marca);
 const doc = await docRef.get();

 return {
   id: doc.id,
  ...doc.data()
 } as Marca;
 }

}
