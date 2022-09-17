import { FC , memo} from 'react'
import { PieChart } from './PieChart'
import type { Predictions } from '../../types/type'

export const PieChartSection: FC<{results: Predictions}> = memo(({results}) => {
  return (
    <div>
      {results.map((result) => (
        <div className="pie-chart-section" key={result.label}>
          <PieChart result={result} />
        </div>
      ))}
    </div>
  )
})
