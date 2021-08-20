import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { WordService } from '../services/words.service';
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  constructor(
    public SearchService: SearchService,
    public WordService : WordService,
    public ModalService: ModalService,
  ) { }

  ngOnInit(): void {
  }

  word: string = ''

  inputText(event: any) {
    this.SearchService.updateCurrentWord(event.target.value)
    this.WordService.filterArray(event.target.value)
  }

  clickSearch() {
    this.SearchService.translate()
    this.ModalService.toggleModal()
  }

}

