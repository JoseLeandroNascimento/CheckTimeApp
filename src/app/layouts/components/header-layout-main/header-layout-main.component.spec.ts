import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayoutMainComponent } from './header-layout-main.component';

describe('HeaderLayoutMainComponent', () => {
  let component: HeaderLayoutMainComponent;
  let fixture: ComponentFixture<HeaderLayoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLayoutMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderLayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
