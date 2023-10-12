import { ProjectPhase } from "@/utils/enums"

export default function ProjectPhaseBadge({ phase }: { phase: ProjectPhase }) {
  let textColor: string = "text-neutral-gray-light"
  let backgroundColor: string = "bg-neutral-gray-dark"

  if (phase === ProjectPhase.DEVELOPMENT) {
    textColor = "text-neutral-gray-light"
    backgroundColor = "bg-neutral-gray-dark"
  }
  if (phase === ProjectPhase.LIVE) {
    textColor = "text-neutral-green-dark"
    backgroundColor = "bg-neutral-green-light"
  }
  if (phase === ProjectPhase.IDEA) {
    textColor = "text-background"
    backgroundColor = "bg-foreground"
  }
  if (phase === ProjectPhase.VALIDATION) {
    textColor = "text-activity-none"
    backgroundColor = "bg-activity-high"
  }
  if (phase === ProjectPhase.SHUTDOWN) {
    textColor = "text-neutral-red-light"
    backgroundColor = "bg-neutral-red-dark"
  }

  return (
    <div
      className={`rounded-full px-3 py-1 ${textColor} ${backgroundColor} inline text-xs font-bold`}
    >
      {phase}
    </div>
  )
}
