import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { IMenuOption } from '../../../shared/interfaces/menu.interface';
import { ActivatedRoute } from '@angular/router';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let itemMenu: IMenuOption = {label:"test",routerLink:null}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemComponent],
      providers:[
        {provide: ActivatedRoute,useValue: {snapshot:{data:{}}}}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("itemMenu",itemMenu)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
