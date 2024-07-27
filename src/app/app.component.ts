import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SublistComponent } from './sublist/sublist.component';
import { CommonModule } from '@angular/common';
import { OnelistComponent } from './onelist/onelist.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SublistComponent, CommonModule, OnelistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning Jack';
}
