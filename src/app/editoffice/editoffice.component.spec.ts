import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditofficeComponent } from './editoffice.component';

describe('EditofficeComponent', () => {
  let component: EditofficeComponent;
  let fixture: ComponentFixture<EditofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditofficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
