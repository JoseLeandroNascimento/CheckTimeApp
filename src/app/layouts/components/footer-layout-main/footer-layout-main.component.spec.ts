import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLayoutMainComponent } from './footer-layout-main.component';

describe('FooterLayoutMainComponent', () => {
  let component: FooterLayoutMainComponent;
  let fixture: ComponentFixture<FooterLayoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterLayoutMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
