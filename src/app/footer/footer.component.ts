import { Component } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  getFullYear() {
    return new Date().getFullYear();
  }
}
