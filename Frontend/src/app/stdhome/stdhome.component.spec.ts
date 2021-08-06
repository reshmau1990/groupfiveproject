import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdhomeComponent } from './stdhome.component';

describe('StdhomeComponent', () => {
  let component: StdhomeComponent;
  let fixture: ComponentFixture<StdhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
