export class Task {
    id: string;
    title: string;
    priority: number;
    description: string;
    category: string;
    due_date: string;
    comments: string;
    progress: string;
    goal: Goal;
}

export class Goal {
    id: string;
    title: string;
    description: string;
    tasks: Task;
}