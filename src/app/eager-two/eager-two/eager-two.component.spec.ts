import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerTwoComponent } from './eager-two.component';

describe('EagerTwoComponent', () => {
  let component: EagerTwoComponent;
  let fixture: ComponentFixture<EagerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
