import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerOneComponent } from './eager-one.component';

describe('EagerOneComponent', () => {
  let component: EagerOneComponent;
  let fixture: ComponentFixture<EagerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
