import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAlunoComponent } from './perfil-aluno.component';

describe('PerfilAlunoComponent', () => {
  let component: PerfilAlunoComponent;
  let fixture: ComponentFixture<PerfilAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
