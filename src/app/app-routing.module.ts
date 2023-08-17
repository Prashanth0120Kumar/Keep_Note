import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteHeaderComponent } from './note-header/note-header.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

const routes: Routes = 
[{path:'note-view',component:NoteViewComponent},
 {path:'note-view/:id',component:NoteViewComponent},
 {path:'note-add',component:NoteAddComponent},
 {path:'note-edit',component:NoteEditComponent},
 {path:'note-edit/:id',component:NoteEditComponent},
 {path:'',redirectTo:'/note-view',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
