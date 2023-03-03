/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from "@/helpers/api"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })



export default async function Home() {
  let data = await fetchAPI('/banners', {
    populate: '*'
  }, {
    cache: 'no-store'
  })
  let banners = data.data


  return (
    <main>
      <h1>Home</h1>

      {banners.map((banner) => {
        let { attributes } = banner
        let imagem = attributes.imagem.data

        return (
          <div key={attributes.createdAt}>
            <p>{attributes.titulo}</p>
            <a href={attributes.url}>{attributes.url}</a>
            <img className="max-w-[400px]" src={`http://127.0.0.1:1337${imagem.attributes.url}`} alt="" />
          </div>
        )
      })}

    </main>
  )
}
