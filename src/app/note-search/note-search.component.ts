import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css']
})
export class NoteSearchComponent {
  ngOnInit(): void {
  }
  searchText:string='';
  @Output()
  noteSearch:EventEmitter<any>=new EventEmitter()
  search()
  {
    this.noteSearch.emit(this.searchText);
  }

}
