import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-small-card',
  standalone: true,
  styleUrl: './small-card.css',
  templateUrl: './small-card.html',
})
export class SmallCard  implements OnInit{
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle : string = ""
  
  @Input()
  Id:string="0"

  ngOnInit(): void {
}


}
