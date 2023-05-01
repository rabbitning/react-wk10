import { useQuery } from '@tanstack/react-query'
import { getImages } from "../api"

export const useImages = () => {
    const { data, isLoading } = useQuery([], getImages)
    return { data, isLoading }
}

// export const useImagesByCategory = (category) => {
//     const { data, isLoading } = useQuery([category], getImagesByCategory)
//     return { data, isLoading }
// }

// export const useImageById = (imageId) => {
//     const { data, isLoading } = useQuery([imageId], getImageById)
//     return { data, isLoading }
// }