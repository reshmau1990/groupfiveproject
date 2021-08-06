import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdformComponent } from './stdform.component';

describe('StdformComponent', () => {
  let component: StdformComponent;
  let fixture: ComponentFixture<StdformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
