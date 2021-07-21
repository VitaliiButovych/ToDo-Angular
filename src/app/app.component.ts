import { Component } from '@angular/core';

export interface ITask {
  title: string;
  complete: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo';

  tasks: ITask[] = [
    {
      title: 'Default task 1',
      complete: false
    },
    {
      title: 'Default task 2',
      complete: false
    },
    {
      title: 'Default task 3',
      complete: false
    }
  ];

  add(title: string) {
    this.tasks.push({
        title,
        complete: false
    });
}

}
