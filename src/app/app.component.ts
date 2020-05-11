import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Telephones';

  constructor(private firestore: AngularFirestore) { }
 

 
  async ngOnInit()  {
    
  const documento = await this.firestore.collection('testes')
  .doc('sz3gcQCnivlX7ZEVrzC9')
  .get()
  .toPromise();

console.log(documento);

  }
  
 
}
