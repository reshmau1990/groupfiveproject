import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployerComponent } from './newemployer.component';

describe('NewemployerComponent', () => {
  let component: NewemployerComponent;
  let fixture: ComponentFixture<NewemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
