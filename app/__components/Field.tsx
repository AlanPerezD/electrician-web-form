import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { RxText } from "react-icons/rx";
import { CiTextAlignLeft } from "react-icons/ci";

type Props = {
  icon? : string,
  placeholder? : string,
  required? : boolean
}

const Field = (props: Props) => {
  return (
    <div className='bg-slate-200'>
      <form className='flex flex-row  border-slate-600 border-2 rounded-md'>
        {props.icon === 'emailIcon' && (<MdOutlineMailOutline/>)}
        {props.icon === 'phoneIcon' && (<FiPhone/>)}
        {props.icon === 'textIcon' && (<RxText />)}
        {props.icon === 'linesIcon' && (<CiTextAlignLeft/>)}
        <input type='text' className='bg-inherit rounded-md outline-none' placeholder={props.placeholder}/>
      </form>
    </div>
  )
}

export default Field