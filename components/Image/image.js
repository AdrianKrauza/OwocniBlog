import { getStrapiMedia } from "../../lib/media"
import NextImage from "next/image"

const Image = ({ image, layout = "responsive" }) => {
  const { url, alternativeText } = image

  const loader = () => {
    return getStrapiMedia(image)
  }

  return (
    <NextImage
      loader={loader}
      layout={layout}
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

export default Image
