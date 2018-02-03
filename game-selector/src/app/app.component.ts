import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  title = 'My Game Selector';
  selectedGame = {
    gameName: ''
  };
  games = [{
    img: 'https://i.pinimg.com/originals/de/61/7e/de617e9e7757a074e8a04aa9894e5aa0.jpg',
    gameName: 'Football',
    players: [
      "Ronaldino",
      "Ronaldo",
      "Messi",
      "Beckham"
    ]
  },
  {
    img: 'https://www.foresthillresort.com/images/img/indoor.jpg',
    gameName: 'Volleyball',
    players: [
      "Earvin",
      "Bartousz",
      "Matt",
      "Ivan"
    ]
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/1231/8788/products/badminton-for-hire-outdoor-games-simply-the-best-events-11576812871_grande.jpg?v=1490963592',
    gameName: 'Badminton',
    players: [
      "P.V. Sindhu",
      "Abhishek nayar",
      "Lee",
      "Gopi Chand"
    ]
  }];
  constructor(private modalService: BsModalService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
