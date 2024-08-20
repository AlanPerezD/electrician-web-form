import React from 'react'
import Field from './Field'
import Title from './Title'

type Props = {
  title : string,
  required? : boolean,
  firstField : boolean,
  firstFieldIcon? : string,
  firstFieldPlaceholder? : string,
  secondField? : boolean,
  secondFieldIcon? : string,
  secondFieldPlaceholder? : string,
}

const CardForm = (props: Props) => {
  return (
    <div className='flex flex-col items-center'>
      {props.title ?
        <Title 
          title = {props.title} 
          required = {props.required}
        />  : null}
      <div className='flex flex-row gap-x-4'>
        {props.firstField ? 
          <Field
            placeholder = {props.firstFieldPlaceholder}
            icon = {props.firstFieldIcon}
            required = {props.required}
          />  : null}
        {props.secondField ? 
          <Field 
            placeholder = {props.secondFieldPlaceholder}
            icon = {props.secondFieldIcon}
            required = {props.required}
          />  : null}
      </div>
    </div>
  )
}

export default CardForm