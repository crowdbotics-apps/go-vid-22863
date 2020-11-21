import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView177077Saga from '../features/CalendarView177077/redux/sagas';
import EmailAuth177075Saga from '../features/EmailAuth177075/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView177077Saga,
EmailAuth177075Saga,
    
  ]);
}