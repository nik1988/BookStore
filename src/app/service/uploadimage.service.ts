import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpRequest} from "@angular/common/http";

@Injectable()
export class UploadimageService{

  constructor(private httpClient:HttpClient){

  }


  uploadFile(bookId:number,currentFile:File){

    let formData:FormData  = new FormData();

    formData.append('file',currentFile);

    const req = new HttpRequest("POST","http://localhost:8282/book/uploadBookImage?bookId="+bookId,
      formData,
      {
        reportProgress:true,
        responseType:'text',

      },
    );

    return this.httpClient.request(req)

  }
}
