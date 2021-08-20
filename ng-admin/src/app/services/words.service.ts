import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class WordService {
    words = [
          {id: 0, word: 'Hello', translation: ['Привет'], example: 'Hello world!', rating: 36, learned: false},
          {id: 1, word: 'World', translation: ['Мир'], example: 'Hello world!', rating: 100, learned: true},
          {id: 2, word: 'number', translation: ['число', 'номер', 'значение'], example: 'number is a type of JS data', rating: 12, learned: false},
          {id: 3, word: 'vendor', translation: ['продавец', 'трейдер', 'барахольщик'], example: 'Vendor is a person who trade of smth.', rating: 6, learned: false}
        ]
    filtredWords: {id: number, word: string, translation: string[], example: string, rating: number, learned: boolean}[] = []
    constructor() {}

    async getCurrentWords() {
        const response = await fetch ('http://localhost:5000/words', {method: "GET"});
        const res = await response.json();
        this.words = res
    }

    filterArray(typedWord: string) {
        this.filtredWords = typedWord === ''? [] : this.words.filter(oneWord => oneWord.word.includes(typedWord))  
    }
}
