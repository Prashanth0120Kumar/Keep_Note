import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { notes } from './notes';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: any;

  constructor(private http:HttpClient,router:Router) { }
  note_url='http://localhost:3000/notes';
  getNotes():Observable<notes[]>
  {
    return this.http.get<notes[]>(this.note_url);
  }
  addNotes(Notes:notes)
  {
    return this.http.post<notes>(this.note_url,Notes);
  }
  a(id?: number) : Observable<notes> {
    return this.http.get<notes>(`${this.note_url}/${id}`);
  }

  editCard(id?:any, notes?: notes) {
    return this.http.put<notes>(`${this.note_url}/${id}`,notes);
  }
  // deleteNote(id: number,notes:any): Observable<any> {    
  //   this.notes.splice(this.notes.findIndex((notes: { id: number; }) => notes.id ===id),1);
  //   return new Observable(subscriber => {
  //     subscriber.next(this.notes);
  //   })
  // }
  deleteNote(id?:number,notes?:any)
  {
    return this.http.delete<notes>(`${this.note_url}/${id}`,{body:notes})
  }

}
