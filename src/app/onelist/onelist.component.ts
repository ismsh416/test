import { Component, OnInit } from '@angular/core';
import { One } from '../one.model';
import { OneServiceService } from '../one-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-onelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onelist.component.html',
  styleUrl: './onelist.component.css'
})
export class OnelistComponent implements OnInit{
  onelist: One[] =[];
  loading =true;
  error:string|null= null;
  constructor(private oenService: OneServiceService ) {}
  ngOnInit(): void {
    this.oenService.getOnes().subscribe(
      (data: One[]) => {
        this.onelist = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    );
    
  }

}
