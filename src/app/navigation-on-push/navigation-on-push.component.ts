import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation-on-push',
  templateUrl: './navigation-on-push.component.html',
  styleUrls: ['./navigation-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationOnPushComponent implements OnInit {
  routes = [
    { link: 'eager-one', name: 'Eager One' },
    { link: 'eager-two', name: 'Eager Two' },
    { link: 'lazy-one', name: 'Lazy One' },
    { link: 'lazy-two', name: 'Lazy Two' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
