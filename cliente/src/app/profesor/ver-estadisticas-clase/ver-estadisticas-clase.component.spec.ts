import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEstadisticasClaseComponent } from './ver-estadisticas-clase.component';

describe('VerEstadisticasClaseComponent', () => {
  let component: VerEstadisticasClaseComponent;
  let fixture: ComponentFixture<VerEstadisticasClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEstadisticasClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEstadisticasClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
