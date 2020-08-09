import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShortDescriptionComponent } from './book-short-description.component';

describe('BookShortDescriptionComponent', () => {
  let component: BookShortDescriptionComponent;
  let fixture: ComponentFixture<BookShortDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShortDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
