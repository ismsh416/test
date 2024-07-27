import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
task: Task[] = [
  {id:1, title:'dinner', completed:true},
  {id:2, title:'lunch', completed:true},
  {id:3, title:'breakfast', completed:true}
  
]
getTasks(): Task[] {
  return this.task;
}
  constructor() { }
}
