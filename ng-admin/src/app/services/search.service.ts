import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SearchService{

    currentWord = 'default'
    currentTranslation = ''

    constructor() {}

    updateCurrentWord(newWord: string) {
        this.currentWord = newWord;
    }

    async translate() {

        const response = await fetch(`https://link-bilingual-dictionary.p.rapidapi.com/eng/rus/${this.currentWord}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8365a0416dmsh34d5eabd4924b5fp18fd2djsn41d97c04d000",
                "x-rapidapi-host": "link-bilingual-dictionary.p.rapidapi.com"
            }
        })
        const res = await response.json();
        console.log(res)
    }
}
