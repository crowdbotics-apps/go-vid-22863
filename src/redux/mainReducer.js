import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView177077Reducer from '../features/CalendarView177077/redux/reducers';
import EmailAuth177075Reducer from '../features/EmailAuth177075/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView177077: CalendarView177077Reducer,
EmailAuth177075: EmailAuth177075Reducer,

});