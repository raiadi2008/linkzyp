import { IProject } from "@/utils/types"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const projects: IProject[] = [
    {
      title: "Xing Codes",
      description:
        "A collection of code snippets to help you build your SaaS code faster and better",
      id: "xing-codes-xatweasdf-425ew",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Xing.png",
      url: "www.linkzyp.com",
    },
    {
      title: "Litmus",
      description:
        "Design your logo in seconds not minutes. Describe it in 3 sentences and let AI do it's job",
      id: "litmus-datet895234hf-rhirs5-23fa3",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Tinder.png",
      url: "www.linkzyp.com",
    },
    {
      title: "Tetra AI",
      description:
        "Write blogs and reviews at scale using Tetra AI. Autopilot content genration and promotion",
      id: "tetra-ai-datet895234hf-rhirs5-23fa3",
      logo: "https://ik.imagekit.io/linkzypapp/Social%20Media/Baidu.png",
      url: "www.linkzyp.com",
    },
  ]
  return NextResponse.json({ projects }, { status: 200 })
}
