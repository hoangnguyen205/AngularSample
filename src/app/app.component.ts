import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'sample';
  user = '';
  hvndisplay =  false;
  className = 6;
  clickhandler() {
    this.hvndisplay = !this.hvndisplay;
    this.className += 1;
  }
}
