import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import getStreakConsistencyDetails from '../../fixtures/getStreakConsistencyDetails.json'
import getMonthConsistencyDetails from '../../fixtures/getMonthConsistencyDetails.json'
import {
   ConsistencyStreakDetailsResponseType,
   MonthConsistencyDetailsRequestType,
   MonthConsistencyDetailsResponse
} from '../../stores/types'

import ConsistencyTrackerService from '.'
//TODO: add fixtures, request object and response types

class ConsistencyTrackerServiceFixture implements ConsistencyTrackerService {
   constructor(networkCallWithApisauce) {} //NOTE: To maintain same structure for fixture and api
   getStreakConsistencyDetails(): Promise<
      ConsistencyStreakDetailsResponseType
   > {
      return resolveWithTimeout(
         getStreakConsistencyDetails as ConsistencyStreakDetailsResponseType
      )
   }

   getMonthConsistencyDetails(
      requestObject: MonthConsistencyDetailsRequestType
   ): Promise<MonthConsistencyDetailsResponse> {
      return resolveWithTimeout(
         getMonthConsistencyDetails as MonthConsistencyDetailsResponse
      )
   }
}

export default ConsistencyTrackerServiceFixture
