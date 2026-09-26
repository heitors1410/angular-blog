import { Component, Input, OnInit } from '@angular/core';

@Component({
  imports: [],
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
  ngOnInit(): void {
}


}
