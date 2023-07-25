import { Component, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs';

@Component({
  selector: 'input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
    @Input()
    requiredFileType:string ='';
    
    fileName = '';
    uploadProgress:number = 0;
    uploadSub: any;

    constructor(private http: HttpClient) {}

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("file", file);
            console.log(file)

            const uploadFile = this.http.post("/api/thumbnail-upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            // .pipe(
            //     finalize(() => this.reset())
            // );

            // this.uploadSub = upload$.subscribe(event => {
            //     if (event.type == HttpEventType.UploadProgress) {
            //       this.uploadProgress = Math.round(100 * (event.total == undefined ? 0 :(event.loaded / event.total)));
            //     }
            //   })
        }
    }

    // cancelUpload() {
    //     this.uploadSub.unsubscribe();
    //     this.reset();
    //   }
    
    //   reset() {
    //     this.uploadProgress = 0;
    //     this.uploadSub = null;
    //   }
}