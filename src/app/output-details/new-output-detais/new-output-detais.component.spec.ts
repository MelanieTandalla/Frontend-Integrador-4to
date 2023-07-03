import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOutputDetaisComponent } from './new-output-detais.component';

describe('NewOutputDetaisComponent', () => {
  let component: NewOutputDetaisComponent;
  let fixture: ComponentFixture<NewOutputDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOutputDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOutputDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
