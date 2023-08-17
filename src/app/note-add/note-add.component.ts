import { Component } from '@angular/core';
import { NoteService } from '../DataAndService/note.service';
import { notes } from '../DataAndService/notes';
@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent
{
  notes:notes={
    id: "",
    title: '',
    content: '',
    reminderDate: '',
    category: '',
    priority: ''
  };
  constructor(private NotesService:NoteService) { }

  ngOnInit(): void {
  }
  addNotes()
  {
    console.log("data");
    this.NotesService.addNotes(this.notes).subscribe(_data=>
      {
        alert("Note Added");
      });
  }


}
