import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprofComponent } from './viewprof.component';

describe('ViewprofComponent', () => {
  let component: ViewprofComponent;
  let fixture: ComponentFixture<ViewprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
