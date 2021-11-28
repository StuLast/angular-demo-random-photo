import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFinderComponent } from './photo-finder.component';

describe('PhotoFinderComponent', () => {
  let component: PhotoFinderComponent;
  let fixture: ComponentFixture<PhotoFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
