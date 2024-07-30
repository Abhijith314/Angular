import { Component } from '@angular/core';
import { CardsComponent } from '../../units/cards/cards.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardsComponent,FooterComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
