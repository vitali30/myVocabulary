import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/words.service';

@Component({
  selector: 'app-word-section',
  templateUrl: './word-section.component.html',
  styleUrls: ['./word-section.component.scss']
})
export class WordSectionComponent implements OnInit {

  // wordsExample = [
  //   {id: 0, word: 'Hello', translation: ['Привет'], example: 'Hello world!', rating: 36, learned: false},
  //   {id: 1, word: 'World', translation: ['Мир'], example: 'Hello world!', rating: 100, learned: true},
  //   {id: 2, word: 'number', translation: ['число', 'номер', 'значение'], example: 'number is a type of JS data', rating: 12, learned: false},
  //   {id: 3, word: 'vendor', translation: ['продавец', 'трейдер', 'барахольщик'], example: 'Vendor is a person who trade of smth.', rating: 6, learned: false}
  // ]

  constructor(
    public WordService : WordService
  ) { }

  ngOnInit(): void {
    this.clickFunction()
  }

  clickFunction() {
    console.log('you call injected service`s method')
    this.WordService.getCurrentWords()
  }

}
