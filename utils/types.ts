import { GoalType, PriorityType, ProjectPhase } from "./enums"

export interface IProject {
  id: string
  title: string
  description: string
  logo: string
  url: string
  phase: ProjectPhase
}

export interface IGoal {
  project_id: string
  id: string
  title: string
  description: string
  is_completed: boolean
  target_date: Date
  completed_on?: Date
  goal_type: GoalType
  revenue_goals?: {
    current_revenue: number
    target_revenue: number
  }
  customer_acquisition_goals?: {
    current_customers_count: number
    target_customers_count: number
  }
}
