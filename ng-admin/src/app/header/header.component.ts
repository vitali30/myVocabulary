import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerList = [
    {id: 0, name: 'All words', identifier: 'words_tab', reference: '#'},
    {id: 1, name: 'Learned', identifier: 'ended_tab', reference: '#learned'},
    {id: 2, name: 'For learning', identifier: 'learning_tab', reference: '#forLearning'},
    {id: 3, name: 'Statistic', identifier: 'statistic_tab', reference: '#statistic'},
    {id: 4, name: 'Settings', identifier: 'settings_tab', reference: '#settings'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
