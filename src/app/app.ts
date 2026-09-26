import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuBar} from './components/menu-bar/menu-bar';
import {MenuTitle} from './components/menu-title/menu-title';
import {BigCard} from './components/big-card/big-card';
import {SmallCard} from './components/small-card/small-card';
import {Home} from './pages/home/home'

@Component({
  imports: [RouterOutlet,MenuBar,MenuTitle,BigCard,SmallCard,Home],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-blog');
}
