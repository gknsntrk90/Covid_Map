import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Form = () => {
  return (
    <form className='flex items-center border rounded'>
        <input
        className='bg-transparent p-1 md:px-5 outline-none'
        type="text"
        placeholder='Ülke ara...'
        />

        <button className='bg-green-500 p-[6px] text-xl w-full
        h-full rounded transition hover:bg-green-600'>
            <CiSearch />
        </button>
    </form>
  )
}

export default Form