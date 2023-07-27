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

            this.http.post("https://localhost:32774/uploadFile", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .subscribe()
        }
    }

}