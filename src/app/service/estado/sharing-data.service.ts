import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  private apiResponse = new BehaviorSubject<any>(null);
  apiReponse$ = this.apiResponse.asObservable();

  updateApiReponse(data: any): void{
    this.apiResponse.next(data);
  }

  getApiResponse(): any{
    return this.apiResponse.getValue();
  }
}
