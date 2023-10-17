"use client"

import AddProductPopup from "@/components/popups/add-product-popup"
import ProjectCard from "@/components/projects/card"
import { ProjectPhase } from "@/utils/enums"
import { IProject } from "@/utils/types"

export default function Page() {
  const projects: IProject[] = [
    {
      title: "Xing Codes",
      description:
        "A collection of code snippets to help you build your SaaS code faster and better",
      id: "xing-codes-xatweasdf-425ew",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Xing.png",
      url: "www.linkzyp.com",
      phase: ProjectPhase.IDEA,
    },
    {
      title: "Litmus",
      description:
        "Design your logo in seconds not minutes. Describe it in 3 sentences and let AI do it's job",
      id: "litmus-datet895234hf-rhirs5-23fa3",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Tinder.png",
      url: "www.linkzyp.com",
      phase: ProjectPhase.DEVELOPMENT,
    },
    {
      title: "Tetra AI",
      description:
        "Write blogs and reviews at scale using Tetra AI. Autopilot content genration and promotion",
      id: "tetra-ai-datet895234hf-rhirs5-23fa3",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Baidu.png",
      url: "www.linkzyp.com",
      phase: ProjectPhase.LIVE,
    },
    {
      title: "Founders Voice",
      description:
        "Blog on developing micro saas applications and podcasts with succesful indie hackers",
      id: "founder-voice-datet895234hf-rhirs5-23fa3",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/QQ.png",
      url: "www.linkzyp.com",
      phase: ProjectPhase.LIVE,
    },
  ]

  return (
    <main id='projects-page' className='relative'>
      <AddProductPopup />
      <section className='mx-auto max-w-website py-8'>
        <h3 className=''>Projects</h3>
        <div className='mt-12 grid grid-cols-3 gap-8'>
          {projects.map((project) => ProjectCard(project))}
          <div className='relative border border-dashed rounded border-border p-4 flex justify-center items-center hover:cursor-pointer'>
            <p className='text-foreground-extra-light'>+ Create Project</p>
          </div>
        </div>
      </section>
    </main>
  )
}
