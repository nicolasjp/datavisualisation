import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicolasComponent } from './nicolas.component';

describe('NicolasComponent', () => {
  let component: NicolasComponent;
  let fixture: ComponentFixture<NicolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
