import type {Customer, Role, Responsibility, Technology} from "@/stores/projects/enums";
import type CountRole from "@/stores/projects/types/count-role";

interface Project {
    title: string,
    customer: Customer,
    goal: String,
    role: Role,
    responsibilities: Responsibility[],
    team: CountRole[],
    estimatedDays: number,
    technologies: Technology[],
    description: string,
    solutions: string[]
}

export default Project;
