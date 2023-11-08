import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuillaumeComponent } from './guillaume.component';

describe('GuillaumeComponent', () => {
  let component: GuillaumeComponent;
  let fixture: ComponentFixture<GuillaumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuillaumeComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuillaumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
