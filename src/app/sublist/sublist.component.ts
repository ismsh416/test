import { Component, OnInit} from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sublist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sublist.component.html',
  styleUrl: './sublist.component.css'
})
export class SublistComponent {
best = 'subList';
tasks:Task[] =[];
constructor(
  private taskService:TaskService){}
  

ngOnInit(): void {
  this.tasks = this.taskService.getTasks();
}

}
