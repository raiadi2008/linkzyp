import PrimaryButton from "@/components/buttons/primary"
import GoalCard from "@/components/goal/card"
import { GoalType, PriorityType } from "@/utils/enums"
import { IGoal } from "@/utils/types"

export default function Page() {
  const goals: IGoal[] = [
    {
      id: "1",
      title: "Connect with 5 Potential customers",
      project_id: "1111",
      description:
        "Pitch my product to two customers and expalin them how this product can help their sales effort using AI.",
      goal_type: GoalType.CUSTOMER_ACQUISITION,
      is_completed: false,
      target_date: new Date("2023-04-12"),
      customer_acquisition_goals: {
        current_customers_count: 329,
        target_customers_count: 900,
      },
    },
    {
      id: "2",
      title: "Increase my revenue to 1000 USD by end of October",
      project_id: "1111",
      description:
        "Increase my products revenue to 1000 before october end. 1K MRR is going to be a good target number soon",
      goal_type: GoalType.REVENUE_GENERATION,
      is_completed: true,
      target_date: new Date(),
    },
    {
      id: "3",
      title: "Create 1 new product features this month",
      project_id: "1111",
      description:
        "Based on the feedback I am adding 1 new featuer to the product this month. It will help me get more customers",
      goal_type: GoalType.PRODUCT_DEVELOPMENT,
      is_completed: false,
      target_date: new Date(),
    },
    {
      id: "4",
      title: "Start google adsense to accquire more customers.",
      project_id: "1111",
      description:
        "So far the organic marketing has worked but to react to more customers I will be starting a goodle adsense campaign.",
      goal_type: GoalType.MARKETING_AND_PROMOTION,
      is_completed: false,
      target_date: new Date(),
    },
  ]

  return (
    <main className='dashboard-page'>
      <section className='mx-auto max-w-website py-8'>
        <div className='flex justify-between'>
          <h3>Goals</h3>
          <PrimaryButton name='+ Create Goal' />
        </div>
        <div className='mt-12 grid grid-cols-1 gap-8'>
          {goals.map((goal) => GoalCard(goal))}
        </div>
      </section>
    </main>
  )
}
