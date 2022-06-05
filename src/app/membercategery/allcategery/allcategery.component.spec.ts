import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcategeryComponent } from './allcategery.component';

describe('AllcategeryComponent', () => {
  let component: AllcategeryComponent;
  let fixture: ComponentFixture<AllcategeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcategeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcategeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
