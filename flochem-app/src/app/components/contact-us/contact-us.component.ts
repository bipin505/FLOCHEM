import { Component, OnInit } from '@angular/core';
import { faGlobe, faAddressCard, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faAddressCard:any;
  faEnvelope:any;
  faPhone:any;
  faGlobe:any;
  constructor() { }

  ngOnInit(): void {
    this.faPhone = faPhone;
    this.faAddressCard = faAddressCard;
    this.faEnvelope = faEnvelope;
    this.faGlobe= faGlobe;

  }

}
