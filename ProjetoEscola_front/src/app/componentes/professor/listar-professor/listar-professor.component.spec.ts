import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfessorComponent } from './listar-professor.component';

describe('ListarProfessorComponent', () => {
  let component: ListarProfessorComponent;
  let fixture: ComponentFixture<ListarProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
