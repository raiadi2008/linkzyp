import { ProjectPhase } from "./enums"

export interface IProject {
  id: string
  title: string
  description: string
  logo: string
  url: string
  phase: ProjectPhase
}
