import { Component, OnInit } from '@angular/core';
import { One } from '../one.model';
import { OneServiceService } from '../one-service.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onelist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './onelist.component.html',
  styleUrl: './onelist.component.css'
})
export class OnelistComponent implements OnInit{
  onelist: One[] =[];
  loading =true;
  error:string|null= null;
  newItem: {name:string} = {name:''};
  constructor(private oneService: OneServiceService ) {}
  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void{
    this.oneService.getOnes().subscribe(
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
  addItem(): void {
    if (!this.newItem.name) {
      return; // Ensure all fields are filled
    }

    console.log('------')
    this.oneService.addOne(this.newItem).subscribe(
      (data: One) => {
        this.onelist.push(data); // Add the new item to the list
        this.newItem = { name: '' }; // Reset form
      },
      (error) => {
        this.error = 'Failed to add item'+ error.message
            }
    );
  }

  removeItem(id: number): void {
    this.oneService.deleteOne(id).subscribe(
      () => {
        this.onelist = this.onelist.filter(item => item.id !== id); // Remove item from list
      },
      (error) => {
        this.error = 'Failed to remove item';
      }
    );
  
  }
  findByItem(id: number): void{
    this.oneService.findByItem(id)
  }
}
