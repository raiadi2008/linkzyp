import { IGoal } from "@/utils/types"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

export default function GoalCard({
  id,
  goal_type,
  description,
  is_completed,
  project_id,
  completed_on,
  target_date,
  customer_acquisition_goals,
  title,
  revenue_goals,
}: IGoal) {
  return (
    <div key={id} className='p-4 border rounded border-border flex'>
      <div className='flex-grow'>
        <div className='flex items-center justify-between '>
          <h4 className=''>{title}</h4>
          <p className='leading-none text-sm text-foreground-extra-light font-semibold'>
            Due On: {target_date.toDateString()}
          </p>
        </div>

        <p className='mt-2 text-sm text-foreground-extra-light '>
          {description}
        </p>
        <p className='mt-4 text-xs text-background px-3 py-1 rounded-full bg-foreground-extra-light inline-block'>
          {goal_type}
        </p>
      </div>
      <div className='ml-24  w-8 my-auto'>
        {is_completed ? (
          <div>
            <CheckCircleIcon color='green' />
          </div>
        ) : (
          <div className='w-7 h-7 rounded-full border border-border'></div>
        )}
      </div>
    </div>
  )
}
