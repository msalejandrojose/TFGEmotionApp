import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavProfesorComponent } from './sidenav-profesor.component';

describe('SidenavProfesorComponent', () => {
  let component: SidenavProfesorComponent;
  let fixture: ComponentFixture<SidenavProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
