import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidosPoliticosComponent } from './agregar-partidos-politicos.component';

describe('AgregarPartidosPoliticosComponent', () => {
  let component: AgregarPartidosPoliticosComponent;
  let fixture: ComponentFixture<AgregarPartidosPoliticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidosPoliticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPartidosPoliticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
