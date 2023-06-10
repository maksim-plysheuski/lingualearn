import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useMemo } from 'react'

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators<T, RemapActionCreators<T>>(actions, dispatch), [actions, dispatch])
}

// Types
type IsValidArg<T> = T extends object ? (keyof T extends never ? false : true) : true;
type ActionCreatorResponse<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>;
type ReplaceReturnType<T, TNewReturn> = T extends (a: infer A) => infer R
  ? IsValidArg<A> extends true
    ? (a: A) => TNewReturn
    : () => TNewReturn
  : never;
type RemapActionCreators<T extends ActionCreatorsMapObject> = {
  [K in keyof T]: ReplaceReturnType<T[K], ActionCreatorResponse<T[K]>>;
};