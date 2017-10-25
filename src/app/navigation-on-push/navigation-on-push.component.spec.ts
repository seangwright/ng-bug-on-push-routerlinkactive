import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOnPushComponent } from './navigation-on-push.component';

describe('NavigationOnPushComponent', () => {
  let component: NavigationOnPushComponent;
  let fixture: ComponentFixture<NavigationOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
