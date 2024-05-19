import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpackagesComponent } from './tourpackages.component';

describe('TourpackagesComponent', () => {
  let component: TourpackagesComponent;
  let fixture: ComponentFixture<TourpackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourpackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
