import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YohanComponent } from './yohan.component';

describe('YohanComponent', () => {
  let component: YohanComponent;
  let fixture: ComponentFixture<YohanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YohanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
