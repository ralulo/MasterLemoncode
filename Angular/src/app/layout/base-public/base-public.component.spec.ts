import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePublicComponent } from './base-public.component';

describe('BasePublicComponent', () => {
  let component: BasePublicComponent;
  let fixture: ComponentFixture<BasePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasePublicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
