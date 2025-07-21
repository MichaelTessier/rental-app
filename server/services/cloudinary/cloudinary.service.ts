import { v2 as cloudinary } from 'cloudinary'
import cloudinaryConfig from './cloudinary.config'
import { Image } from '@/api/__generated__/graphql'

cloudinary.config({
  cloud_name: cloudinaryConfig.cloudinaryName,
  api_key: cloudinaryConfig.cloudinaryApiKey,
  api_secret: cloudinaryConfig.cloudinaryApiSecret,
})

export const uploadImage = async (image: string, folder: string): Promise<Image> => {
  const response = await cloudinary.uploader.upload(image, {
    folder,
  })

  return {
    url: response.url,
    publicId: response.public_id
  }
}

export const uploadImages = async (images: string[], folder: string): Promise<Image[]> => {
  const promises = images
    .filter(Boolean)
    .map((image) => uploadImage(image, folder))

  return Promise.all(promises)
}

export const deleteImage = async (publicId: string): Promise<boolean> => {
  const response = await cloudinary.uploader.destroy(publicId) 

  return response.result === "ok"

}