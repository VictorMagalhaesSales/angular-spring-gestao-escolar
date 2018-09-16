import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasEFaltasComponent } from './notas-e-faltas.component';

describe('NotasEFaltasComponent', () => {
  let component: NotasEFaltasComponent;
  let fixture: ComponentFixture<NotasEFaltasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasEFaltasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasEFaltasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
