import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Chip } from '../models/chip.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChipService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Chip[]> {
    return this.firestore.collection<Chip>('chip').valueChanges({ idField: 'id' });
  }

  async add(chip: Chip): Promise<Chip> {
    const docRef = await this.firestore.collection<Chip>("chip").add(chip);
    const doc = await docRef.get();
    return {
      id: doc.id,
      ...doc.data(),
    } as Chip;
  }
  async get(id: string): Promise<Chip> {
    const doc = await this.firestore.collection<Chip>('chip').doc(id).get().toPromise();
    return {
      id: doc.id,
      ...doc.data(),
    } as Chip;
  }
  async update(id: string, chip: Chip): Promise<void> {

    await this.firestore.collection<Chip>('chip').doc(id).update(chip);

  }
  async delete(chipId): Promise<void> {
    await this.firestore.collection('chip').doc(chipId).delete();
  }

}
