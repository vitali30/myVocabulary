import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: {id: number, name: string, identifier: string, reference: string}[] = [];

}
