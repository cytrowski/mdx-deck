import { useContext, useEffect } from 'react'
import { Context } from './context'

export default length => {
  const context = useContext(Context)
  const { register, index, step } = context
  useEffect(() => {
    if (typeof register !== 'function') return
    register(index, { steps: length })
  }, [length])

  return step
}
