/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from "@/helpers/api"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })



export default async function Home() {
  const data = await fetchAPI('/banners', {
    populate: '*'
  }, {
    cache: 'no-store'
  })
  const banners = data.data


  return (
    <main>
      <h1>Home</h1>

      {banners.map((banner) => {
        const { attributes } = banner
        const image = attributes.image.data

        return (
          <div key={attributes.createdAt}>
            <p>{attributes.title}</p>
            <a href={attributes.url}>{attributes.url}</a>
            {image ? <img src={`http://127.0.0.1:1337${image.attributes.url}`} alt="" /> : <p>No image</p> }
          </div>
        )
      })}
    </main>
  )
}
