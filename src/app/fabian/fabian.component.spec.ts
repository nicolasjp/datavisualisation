import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabianComponent } from './fabian.component';

describe('FabianComponent', () => {
  let component: FabianComponent;
  let fixture: ComponentFixture<FabianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
