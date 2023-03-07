import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openLinkedin() {
    window.open('https://www.linkedin.com/in/soulaimane-chhibou/');
  }
  openGithub() {
    window.open('https://github.com/soulaichhi');
  }
}
