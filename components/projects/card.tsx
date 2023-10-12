import Image from "next/image"
import { IProject } from "@/utils/types"
import ProjectPhaseBadge from "../badge/project-phase-badge"

export default function ProjectCard({
  id,
  title,
  logo,
  description,
  url,
  phase,
}: IProject) {
  return (
    <div key={id} className='relative border rounded border-border p-4 '>
      <div className='relative flex gap-x-8 items-center'>
        <div className='relative border rounded border-border'>
          <Image src={logo} width={64} height={64} alt='' />
        </div>
        <h4>{title}</h4>
      </div>
      <p className='mt-4 text-foreground-extra-light text-sm'>{description}</p>
      <div className='mt-8 flex justify-between items-center'>
        <ProjectPhaseBadge phase={phase} />
        <p className='text-xs'>{Math.ceil(Math.random() * 3)} Goals</p>
        <p className='text-xs'>website &rarr;</p>
      </div>
    </div>
  )
}
