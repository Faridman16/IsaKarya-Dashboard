import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadProgress: Observable<number>;

  constructor(private fireStorage: AngularFireStorage) { }

  uploadFile(file: File){
    console.log(file.name);
    const task = this.fireStorage.ref(`agents/${file.name}`).put(file);
    return task.percentageChanges();
  }
}
