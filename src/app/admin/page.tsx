import Header from "@/components/admin/molecules/Header"

export default function AdminPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f8f8] ml-[84px] lg:pt-[100px] pl-12 pr-12">
        <section className="grid grid-cols-3 gap-10">
          <div className=" h-[260px] bg-[#4339f2] rounded-2xl"></div>
          <div className=" h-[260px] bg-[#ff3a29] rounded-2xl"></div>
          <div className=" h-[260px] bg-[#34b53a] rounded-2xl"></div>
        </section>
        <section>
          <h1>Hello</h1>
        </section>
      </main>
    </>
  )
}
