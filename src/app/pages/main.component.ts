import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { SideBarComponent } from "../shared/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [RouterOutlet, NavbarComponent, SideBarComponent]
})
export default class MainComponent implements OnInit {
    ngOnInit(): void {
        initFlowbite();
    }

}
