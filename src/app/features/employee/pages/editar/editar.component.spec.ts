import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComponent } from './editar.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';

describe('EditarComponent', () => {
  let component: EditarComponent;
  let fixture: ComponentFixture<EditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarComponent],
      providers:[
        provideEnvironmentNgxMask(),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
