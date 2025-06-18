import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OverlayDataService {
  private dataUrl = 'assets/mockdata.json';
  private contractUrl ='assets/contract.json'



  constructor(private http: HttpClient) {}

//Fetch real time data for parent component. Can be selectively Passed to child component based on individual row selection
  getSectionData(): Observable<any> {
    return this.http.get<any>('assets/mockdata.json').pipe();  
  }

  // Service call to lazy load few subcomponents items, which are not passed from parent. For heavier data. 
getSectionByTitle(title: string): Observable<{ items?: any[]; tags?: { label: string; count: number }[] }> {
  return this.http.get<any>('assets/mockdata.json').pipe(
    map(data => data[title])
  );
}

}
