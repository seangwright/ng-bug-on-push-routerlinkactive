import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  routes = [
    { link: 'eager-one', name: 'Eager One' },
    { link: 'eager-two', name: 'Eager Two' },
    { link: 'lazy-one', name: 'Lazy One' },
    { link: 'lazy-two', name: 'Lazy Two' }
  ];
  constructor() {}

  ngOnInit() {}
}
