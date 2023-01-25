import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value,
  handleChange, isSupriseMe, handleSuprimeMe }) => {
  
  console.log(name)
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {
          isSupriseMe && (
            <button
              type='button'
              className='font-semibold text-xs bg-[#ECECF1] py-1
              px-2 rounded-5[5px] text-black'
              onClick={handleSuprimeMe}
            >
              Surprise Me
            </button> 
          )
        }
      </div>
    </div>
  )
}

export default FormField