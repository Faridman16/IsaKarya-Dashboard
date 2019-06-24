import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  uploadPercent: Observable<number>;
  imgURL: Observable<string>;
  constructor(private fireStorage: AngularFireStorage) { }

  uploadFile(file: File){
    const fileRef = this.fireStorage.ref(`agents/${file.name}`);
    const task = fileRef.put(file).then(snapshot => {
      return snapshot.ref.getDownloadURL()
    });

    return task;
    // this.uploadProgress = task.percentageChanges();
    
    // task.snapshotChanges().pipe(
    //   finalize(() => this.imgURL = fileRef.getDownloadURL() )
    // ).subscribe();

    // console.log(this.imgURL);

    // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //     finalize(() => this.imgURL = fileRef.getDownloadURL() )
    //  )
    // .subscribe()    
    // return this.imgURL;
  }
}
