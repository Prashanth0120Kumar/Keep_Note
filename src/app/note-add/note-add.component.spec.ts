import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAddComponent } from './note-add.component';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteAddComponent]
    });
    fixture = TestBed.createComponent(NoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
