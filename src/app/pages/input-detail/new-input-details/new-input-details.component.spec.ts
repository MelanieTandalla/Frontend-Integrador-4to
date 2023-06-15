import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputDetailsComponent } from './new-input-details.component';

describe('NewInputDetailsComponent', () => {
  let component: NewInputDetailsComponent;
  let fixture: ComponentFixture<NewInputDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInputDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInputDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
