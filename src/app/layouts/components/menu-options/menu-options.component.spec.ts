import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMenuOption } from '../../../shared/interfaces/menu.interface';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuOptionsComponent } from './menu-options.component';
import { ActivatedRoute } from '@angular/router';

describe('MenuOptionsComponent', () => {
  let component: MenuOptionsComponent;
  let fixture: ComponentFixture<MenuOptionsComponent>;
  let optionsMenu:IMenuOption[] = [
    {
      label:"Test",
      routerLink: null
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MenuOptionsComponent,
        MenuItemComponent
      ],
      providers:[
        { provide: ActivatedRoute, useValue: { snapshot: { data: {} } } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("options",optionsMenu)

    fixture.detectChanges();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});
