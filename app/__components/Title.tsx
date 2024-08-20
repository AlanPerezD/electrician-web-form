import { title } from 'process'
import React from 'react'

type Props = {
  title : string,
  required? : boolean
}

const Title = (props: Props) => {
  return (
    <div className=''>
      {props.required ? (props.title + " *") : (props.title) }
    </div>
  )
}

export default Title