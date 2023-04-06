import { create } from 'apisauce'

import Config from '../../../Common/constants/EnvironmentConstants'
import { apiMethods } from '../../../Common/constants/APIConstants'

import endpoints from '../endpoints'

import {
   ConsistencyStreakDetailsResponseType,
   MonthConsistencyDetailsRequestType,
   MonthConsistencyDetailsResponse
} from '../../stores/types'
import ConsistencyTrackerService from '.'

const CONSISTENCY_TRACKER_BASE_URL = `${Config.NKB_BASE_URL}nkb_gamification_wrapper`

//TODO: Update end points, request object and response types
class ConsistencyTrackerServiceAPI implements ConsistencyTrackerService {
   api: Record<string, any>
   networkCallWithApisauce

   constructor(networkCallWithApisauce) {
      this.api = create({ baseURL: CONSISTENCY_TRACKER_BASE_URL })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getStreakConsistencyDetails = (): Promise<
      ConsistencyStreakDetailsResponseType
   > => {
      return this.networkCallWithApisauce(
         this.api,
         endpoints.getStreakOverallDetails,
         {},
         apiMethods.get
      )
   }

   getMonthConsistencyDetails = (
      requestObject: MonthConsistencyDetailsRequestType
   ): Promise<MonthConsistencyDetailsResponse> => {
      return this.networkCallWithApisauce(
         this.api,
         endpoints.getMonthStreakDetails,
         requestObject,
         apiMethods.post
      )
   }
}

export default ConsistencyTrackerServiceAPI
