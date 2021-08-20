import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ModalService{

    isOpen: boolean = false

    constructor() {}

    toggleModal() {
      this.isOpen = !this.isOpen
    }
}
