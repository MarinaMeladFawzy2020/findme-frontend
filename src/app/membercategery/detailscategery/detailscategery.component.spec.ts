import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscategeryComponent } from './detailscategery.component';

describe('DetailscategeryComponent', () => {
  let component: DetailscategeryComponent;
  let fixture: ComponentFixture<DetailscategeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscategeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscategeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
