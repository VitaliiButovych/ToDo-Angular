import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../../app.component';

@Component({
    selector: 'task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

    @Input() item: any;
    @Input() tasks: any;
    @Input() index: any;

    ngOnInit() {
        console.log(this);
    }

    add(title: string) {
        this.tasks.push({
            title,
            complete: false
        });
    }

    toggle(task: ITask) {
        task.complete = !task.complete;
    }

    remove(ind: number) {
        this.tasks.splice(ind, 1);
    }

}