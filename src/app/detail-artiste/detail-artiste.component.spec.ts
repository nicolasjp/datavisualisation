import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtisteComponent } from './detail-artiste.component';

describe('DetailArtisteComponent', () => {
  let component: DetailArtisteComponent;
  let fixture: ComponentFixture<DetailArtisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailArtisteComponent]
    });
    fixture = TestBed.createComponent(DetailArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
