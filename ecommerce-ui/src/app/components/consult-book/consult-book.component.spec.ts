import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultBookComponent } from './consult-book.component';

describe('ConsultBookComponent', () => {
  let component: ConsultBookComponent;
  let fixture: ComponentFixture<ConsultBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
