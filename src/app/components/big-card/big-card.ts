import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
  @Input()
  Id:string="0"

  ngOnInit(): void {

  }

}
