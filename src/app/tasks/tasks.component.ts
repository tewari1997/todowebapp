import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks;
  id = "";

  public newTask = {
    title:"",
    description:""
  }

  constructor(private taskService : TasksService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTask().subscribe(res=>{
      this.tasks = res;
    })    
  }

  createTask(){
    if(this.newTask.title !== ''){
      this.taskService.createTask(this.newTask).subscribe(res=>{
        this.cleanvalue();
        this.getTasks();
      })
    }
  }

  deleteTask(id){
    if(confirm("Are you sure to delete the task")){
    this.taskService.deleteTask(id).subscribe(res=>{
      this.getTasks();
    })
    }
  }

  setUpdate(t){
    this.id = t._id;
    this.newTask.title = t.title;
    this.newTask.description = t.description;
  }

  cleanvalue(){
    this.id = "";
    this.newTask = {
      title:"",
      description:""
    }
  }

  updateTask(){
    if(this.newTask.title !== ''){
    this.taskService.updateTask(this.id,this.newTask).subscribe(res=>{
      this.cleanvalue();
      this.getTasks();
    })
  }
  }

}
