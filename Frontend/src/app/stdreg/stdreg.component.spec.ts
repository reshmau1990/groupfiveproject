import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdregComponent } from './stdreg.component';

describe('StdregComponent', () => {
  let component: StdregComponent;
  let fixture: ComponentFixture<StdregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
