import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponent } from './main-layout.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterLayoutMainComponent } from '../components/footer-layout-main/footer-layout-main.component';
import { HeaderLayoutMainComponent } from '../components/header-layout-main/header-layout-main.component';
import { MenuSidebarComponent } from '../components/menu-sidebar/menu-sidebar.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterOutlet,
        MainLayoutComponent,
        MenuSidebarComponent,
        HeaderLayoutMainComponent,
        FooterLayoutMainComponent
      ],
      providers:[
        { provide: ActivatedRoute, useValue: { snapshot: { data: {} } } }
      ],
      declarations:[
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
