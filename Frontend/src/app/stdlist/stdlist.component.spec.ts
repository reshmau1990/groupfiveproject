import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdlistComponent } from './stdlist.component';

describe('StdlistComponent', () => {
  let component: StdlistComponent;
  let fixture: ComponentFixture<StdlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
