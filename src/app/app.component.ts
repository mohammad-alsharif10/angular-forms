import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'angular-forms';

   suggestUserName(): void {
      const suggestedName = 'Superuser';
   }

   onSubmit(form: NgForm): void {
      console.log('submitted');
      console.log(form);
      console.log(form.controls.username.status);
   }
}
