import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNebularComponent } from './dialog-nebular.component';

describe('DialogNebularComponent', () => {
  let component: DialogNebularComponent;
  let fixture: ComponentFixture<DialogNebularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNebularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNebularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
