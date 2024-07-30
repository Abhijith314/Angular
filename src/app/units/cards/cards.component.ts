import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  department=[
    {
      id:1,
      Title:"Aerospace & Defence",
      Image:"../../../assets/Aerospace & Defence.jpg",
    },
    {
      id:2,
      Title:"Banking & Finantial Service",
      Image:"../../../assets/Banking & Financial Service (BFS).jpg",
    },
    {
      id:3,
      Title:"Insurance",
      Image:"../../../assets/Insurance.jpg",
    },
    {
      id:4,
      Title:"Industrial",
      Image:"../../../assets/Industrial.jpg",
    },
    {
      id:5,
      Title:"Healthcare",
      Image:"../../../assets/Healthcare.jpg",
    },
    {
      id:6,
      Title:"Mobility",
      Image:"../../../assets/Mobility.jpg",
    },
    {
      id:7,
      Title:"Locomotive",
      Image:"../../../assets/Locomotive.jpg",
    },
    {
      id:8,
      Title:"GIS",
      Image:"../../../assets/GIS.jpg",
    },
  ]

}
