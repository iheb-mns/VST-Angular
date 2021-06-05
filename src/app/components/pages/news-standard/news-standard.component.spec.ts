import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStandardComponent } from './news-standard.component';

describe('NewsStandardComponent', () => {
  let component: NewsStandardComponent;
  let fixture: ComponentFixture<NewsStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
