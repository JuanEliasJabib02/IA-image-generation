import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from "../assets"
import { getRandomPrompt } from "../utils"
import { FormField,Loader } from '../components'

const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
    
  })

  const handleChange = () => {

  }

  
  const handleSubmit = (e) => {
    
  }

  const handleSuprimeMe = () => {
     
  }

  

  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
          Create imaginative and visually stunning images generated
          by DALLE-E AI and share them with the community
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
            <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="a sunlit indoor lounge 
            area with a pool with clear water and
             another pool with translucent pastel pink water, 
             next to a big window, digital art"
            value={form.name}
            onChange={handleChange}
            isSupriseMe
            handleSuprimeMe={handleSuprimeMe}
          />

        </div>

      </form>

    </section>
  )
}

export default CreatePost