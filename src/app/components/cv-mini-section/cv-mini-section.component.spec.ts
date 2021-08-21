import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMiniSectionComponent } from './cv-mini-section.component';

describe('CvMiniSectionComponent', () => {
  let component: CvMiniSectionComponent;
  let fixture: ComponentFixture<CvMiniSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvMiniSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMiniSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
