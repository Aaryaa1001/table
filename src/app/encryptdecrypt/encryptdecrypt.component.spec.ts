import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptdecryptComponent } from './encryptdecrypt.component';

describe('EncryptdecryptComponent', () => {
  let component: EncryptdecryptComponent;
  let fixture: ComponentFixture<EncryptdecryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptdecryptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptdecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
