import { Component, OnInit } from '@angular/core';

import { MenuLink } from './menu-link';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isVisible: boolean;
  private links: MenuLink[];
  private activeRoute: string;

  constructor(public location: Location) {
    this.isVisible = false;
    this.activeRoute = location.path();
    this.links = [
      { label: 'Pedido', url: '/order' },
      { label: 'Como funciona', url: '/how-it-works' },
      { label: 'Privacidade', url: '/privacy' },
      { label: 'Ajuda', url: '/help' },
    ];
  }

  ngOnInit() {
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
