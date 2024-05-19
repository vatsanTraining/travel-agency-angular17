import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from './tour';
import { Tourbook } from './tourbook';
import { Office } from './office';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   httpClient = inject(HttpClient)
  baseUrl: string;
   
  constructor() {
   this.baseUrl ="http://localhost:3000/"

   }

   
  getAllTour():Observable<Tour[]>{

    console.log('getAll tour called')
    return this.httpClient.get<Tour[]>(this.baseUrl+"tours")
  }

  getAllBookings():Observable<Tourbook[]>{

    console.log('getAll Bookings called')
    return this.httpClient.get<Tourbook[]>(this.baseUrl+"bookings")
  }
  getAllOffices():Observable<Office[]>{

    console.log('getAll Offices called')
    return this.httpClient.get<Office[]>(this.baseUrl+"offices")
  }

  addOffice(obj:Office):Observable<Office>{

    console.log('Add  Office called')
    return this.httpClient.post<Office>(this.baseUrl+"offices",obj)
  }
  updateOffice(id: number, toEdit: Office) {
    return this.httpClient.put<Office>(this.baseUrl+"offices/"+id,toEdit)

  }

  removeOffice(id:any): Observable<Office> {
    return this.httpClient.delete<Office>(this.baseUrl + 'offices/' + id);
    }
    
   
    findOfficeById(id: number) {
      return this.httpClient.get<Office>(this.baseUrl + 'offices/' + id);

    }
  

}



