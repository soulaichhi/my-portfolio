import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  openLinkedin() {
    window.open('https://www.linkedin.com/in/soulaimane-chhibou/');
  }
  openGithub() {
    window.open('https://github.com/soulaichhi');
  }
}
