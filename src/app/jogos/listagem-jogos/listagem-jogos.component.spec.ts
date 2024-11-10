import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemJogosComponent } from './listagem-jogos.component';

describe('ListagemJogosComponent', () => {
  let component: ListagemJogosComponent;
  let fixture: ComponentFixture<ListagemJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
