import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfessorComponent } from './perfil-professor.component';

describe('PerfilProfessorComponent', () => {
  let component: PerfilProfessorComponent;
  let fixture: ComponentFixture<PerfilProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
