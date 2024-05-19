import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourbookingsComponent } from './tourbookings.component';

describe('TourbookingsComponent', () => {
  let component: TourbookingsComponent;
  let fixture: ComponentFixture<TourbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourbookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
