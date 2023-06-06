import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistFormularComponent } from './regist-formular.component';

describe('RegistFormularComponent', () => {
  let component: RegistFormularComponent;
  let fixture: ComponentFixture<RegistFormularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistFormularComponent]
    });
    fixture = TestBed.createComponent(RegistFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
