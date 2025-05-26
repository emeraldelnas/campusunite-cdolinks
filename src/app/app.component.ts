import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // startBodyBackgroundCycle(1500);
  }
}

const y2kColors: string[] = [
  '#ff00ff', // magenta
  '#00ffff', // cyan
  '#ffff00', // yellow
  '#ff66cc', // pink
  '#6600ff', // purple
  '#00ff99', // mint
  '#ff3300', // neon orange
];

let currentIndex = 0;

export function startBodyBackgroundCycle(interval = 2000): void {
  const body = document.body;
  if (!body) return;

  setInterval(() => {
    body.style.backgroundColor = y2kColors[currentIndex];
    currentIndex = (currentIndex + 1) % y2kColors.length;
  }, interval);
}
