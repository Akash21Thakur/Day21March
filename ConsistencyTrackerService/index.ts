import {
   ConsistencyStreakDetailsResponseType,
   MonthConsistencyDetailsRequestType,
   MonthConsistencyDetailsResponse
} from '../../stores/types'

interface ConsistencyTrackerService {
   getStreakConsistencyDetails(): Promise<ConsistencyStreakDetailsResponseType>
   getMonthConsistencyDetails(
      requestObject: MonthConsistencyDetailsRequestType
   ): Promise<MonthConsistencyDetailsResponse>
}

export default ConsistencyTrackerService
