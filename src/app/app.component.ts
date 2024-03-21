import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SideBarComponent } from "./shared/side-bar/side-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SideBarComponent]
})
export class AppComponent implements OnInit {
  title = 'template';

  ngOnInit(): void {
    initFlowbite();

    
  }
}
