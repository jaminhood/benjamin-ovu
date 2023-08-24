import { StaticImageData } from "next/image"

export type ProjectProps = {
 project: {
  id: number
  title: string
  role: string
  img: StaticImageData
  path: string
 }
}
