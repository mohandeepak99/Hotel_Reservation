import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsuccessComponent } from './paymentsuccess.component';

describe('PaymentsuccessComponent', () => {
  let component: PaymentsuccessComponent;
  let fixture: ComponentFixture<PaymentsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
