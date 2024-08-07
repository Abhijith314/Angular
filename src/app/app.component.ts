import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { AccordionComponent } from './units/accordion/accordion.component';
import { CardsComponent } from './units/cards/cards.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,DepartmentComponent,CarouselComponent,AccordionComponent,CardsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project1';
}