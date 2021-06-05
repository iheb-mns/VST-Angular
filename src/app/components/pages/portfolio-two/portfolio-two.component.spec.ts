import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoComponent } from './portfolio-two.component';

describe('PortfolioTwoComponent', () => {
  let component: PortfolioTwoComponent;
  let fixture: ComponentFixture<PortfolioTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
