import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSidebarComponent } from './news-sidebar.component';

describe('NewsSidebarComponent', () => {
  let component: NewsSidebarComponent;
  let fixture: ComponentFixture<NewsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
