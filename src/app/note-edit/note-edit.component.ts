import { Component,OnInit } from '@angular/core';
import { notes } from '../DataAndService/notes';
import { NoteService } from '../DataAndService/note.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit 
{

  id: any;
  constructor(private activatedRoute: ActivatedRoute, 
    private service: NoteService) { 
}
  notes: notes={
    id:'',
    title: '',
    content: '',
    reminderDate: '',
    category: '',
    priority: ''
  };
ngOnInit(): void 
{
  this.activatedRoute.paramMap.subscribe(data => 
    {
      let id = data.get('id') ?? 0;
      this.service.a(+id).subscribe(data => {
          this.notes = data;
          console.log(data);
      });
  });
}
editCard() {
  this.service.editCard(this.notes?.id, this.notes).subscribe(data => {
  this.notes = data;
  })
}

}
