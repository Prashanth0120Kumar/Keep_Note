import { Component,OnInit } from '@angular/core';
import { notes } from '../DataAndService/notes';
import { NoteService } from '../DataAndService/note.service';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit
{
  note:notes[]=[];
  constructor(private a:NoteService) { }
  ngOnInit(): void
  {
    this.a.getNotes().subscribe(data=>
      {this.note=data});
  }
  searchNote(searchText:string)
  {
    if (searchText === '' || !searchText)
    this.a.getNotes().subscribe(data=>{
      this.note=data;})    
      else 
    {
      this.a.getNotes().subscribe(data=>{
        const filter=data.filter(notes => notes.title?.toLowerCase().startsWith(searchText.toLowerCase()))
        this.note=filter;});
    }
  }
  deleteNote(id:number) {
    this.a.deleteNote(id,this.note).subscribe(data => {
      alert("Note Deleted");
      });
}

}