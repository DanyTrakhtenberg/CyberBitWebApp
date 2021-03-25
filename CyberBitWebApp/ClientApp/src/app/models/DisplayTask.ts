import { Task } from "./task";
export class DisplayTask {

    doneTasks: Task[];
    lateTasks: Task[];
    OnTimeTasks: Task[];
    /**
     *
     */
    constructor() {
        this.OnTimeTasks = [];
        this.doneTasks = [];
        this.lateTasks = [];

    }
}
