/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })


async function fetchBanners() {
  let response = await fetch('http://127.0.0.1:1337/api/banners?populate=*').then((res) => res.json())
  
  return response.data
}

export default async function Home() {

  let data = await fetchBanners()

  return (
    <main>
      <h1>Home</h1>
      {data.map((banner: any, i: any) => {
        console.log(banner.attributes.imagem);
        
        return (
          <div key={banner.attributes.createdAt}>
            <p>{banner.attributes.titulo}</p>
            <a href={banner.attributes.url}>{banner.attributes.url}</a>
            <img src={`http://127.0.0.1:1337${banner.attributes.imagem.data.attributes.url}`} alt="" />
          </div>
        )
      })}
    </main>
  )
}
