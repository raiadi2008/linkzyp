import { useState } from "react"
import Image from "next/image"
import Popup from "./popup"
import { CloudArrowUpIcon } from "@heroicons/react/24/solid"
import PrimaryButton from "../buttons/primary"

export default function AddProductPopup() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  const removeSelectedImage = () => {
    setSelectedImage(null)
  }

  return (
    <Popup>
      <form className='w-96 flex flex-col  gap-y-4  overflow-scroll'>
        <h3 className='mb-4'>Add your project</h3>
        <input
          id='project_title'
          type='text'
          placeholder='Project Title'
          className='rounded focus:border-primary focus:ring-primary w-full bg-transparent'
        />
        <textarea
          id='description'
          rows={4}
          placeholder='Project Description'
          className='rounded resize-none focus:border-primary focus:ring-primary w-full bg-transparent'
        />
        <input
          id='project_url'
          type='url'
          placeholder='Project URL'
          className='rounded  focus:border-primary focus:ring-primary w-full bg-transparent'
        />
        <input
          className='hidden'
          type='file'
          id='image-file'
          accept='image/png, image/gif, image/jpeg'
          onChange={imageChange}
        />
        <label htmlFor='image-file'>
          <div className='relative h-80 border border-border border-dashed rounded mx-auto overflow-hidden flex flex-col justify-center items-center'>
            {selectedImage ? (
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt=''
                width={"250"}
                height={"250"}
                style={{ objectFit: "contain" }}
              />
            ) : (
              <div className='flex justify-center items-center flex-col bg-transparent'>
                <CloudArrowUpIcon className='h-12 w-12 text-primary mx-auto' />
                <p>Upload project logo</p>
              </div>
            )}
          </div>
        </label>
        <PrimaryButton name='Create Project' />
      </form>
    </Popup>
  )
}
