import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJogosComponent } from './editar-jogos.component';

describe('EditarJogosComponent', () => {
  let component: EditarJogosComponent;
  let fixture: ComponentFixture<EditarJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
