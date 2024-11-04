import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  
}
