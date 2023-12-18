import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTresCardComponent } from './proyecto-tres-card.component';

describe('ProyectoTresCardComponent', () => {
  let component: ProyectoTresCardComponent;
  let fixture: ComponentFixture<ProyectoTresCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectoTresCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoTresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
