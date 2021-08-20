import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSectionComponent } from './word-section.component';

describe('WordSectionComponent', () => {
  let component: WordSectionComponent;
  let fixture: ComponentFixture<WordSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
