import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTwoComponent } from './footer-two.component';

describe('FooterTwoComponent', () => {
  let component: FooterTwoComponent;
  let fixture: ComponentFixture<FooterTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
