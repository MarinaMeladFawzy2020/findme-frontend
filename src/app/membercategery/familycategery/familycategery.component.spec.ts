import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilycategeryComponent } from './familycategery.component';

describe('FamilycategeryComponent', () => {
  let component: FamilycategeryComponent;
  let fixture: ComponentFixture<FamilycategeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilycategeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilycategeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
