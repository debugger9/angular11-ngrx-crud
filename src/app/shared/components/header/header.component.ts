import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route: any;
  constructor(route: Router) {
    this.route = route;
  }

  ngOnInit(): void {
  }

}
