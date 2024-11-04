import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmproyeeListComponent } from './emproyee-list.component';

describe('EmproyeeListComponent', () => {
  let component: EmproyeeListComponent;
  let fixture: ComponentFixture<EmproyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmproyeeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmproyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
