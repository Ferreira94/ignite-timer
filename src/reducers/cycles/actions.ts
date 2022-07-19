import { ICycle } from "./reducer";

export enum IActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: ICycle) {
  return { type: IActionTypes.ADD_NEW_CYCLE, payload: newCycle };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: IActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAsFinishedAction() {
  return {
    type: IActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
