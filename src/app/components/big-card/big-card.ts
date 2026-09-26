import { Component, Input, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-big-card',
  standalone: true,
  styleUrl: './big-card.css',
  templateUrl: './big-card.html',
})
export class BigCard implements OnInit{

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription : string = ""

  ngOnInit(): void {

  }

}
