import { Component } from '@angular/core';
import { NewTicketsComponent } from "./new-tickets/new-tickets.component";

@Component({
    selector: 'app-tickets',
    standalone: true,
    templateUrl: './tickets.component.html',
    styleUrl: './tickets.component.css',
    imports: [NewTicketsComponent]
})
export class TicketsComponent {}
