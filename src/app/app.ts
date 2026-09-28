import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuBar} from './components/menu-bar/menu-bar';


@Component({
  imports: [RouterOutlet,MenuBar],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-blog');
}
