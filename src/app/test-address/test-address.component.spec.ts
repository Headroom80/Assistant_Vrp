import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAddressComponent } from './test-address.component';

describe('TestAddressComponent', () => {
  let component: TestAddressComponent;
  let fixture: ComponentFixture<TestAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAddressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
