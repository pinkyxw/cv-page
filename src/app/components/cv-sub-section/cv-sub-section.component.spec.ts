import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSubSectionComponent } from './cv-sub-section.component';

describe('CvSubSectionComponent', () => {
  let component: CvSubSectionComponent;
  let fixture: ComponentFixture<CvSubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvSubSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
