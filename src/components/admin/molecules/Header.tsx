/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header className="bg-white fixed top-0 bottom-0 px-6 rounded-tr-2xl rounded-br-2xl flex flex-col">
      <div className="border-b-2 py-8 mb-8">
        <img src="admin/logo.svg" alt="" />
      </div>
      <aside className="flex flex-col items-center gap-y-8 flex-grow pb-4">
        <div>
          <img src="admin/icon-user.svg" alt="" />
        </div>

        <div className="opacity-25">
          <img src="admin/icon-banner.svg" alt="" />
        </div>

        <div className="opacity-25">
          <img src="admin/icon-pencil.svg" alt="" />
        </div>

        <div className="opacity-25">
          <img src="admin/icon-email.svg" alt="" />
        </div>

        <div className="opacity-25 mt-auto">
          <img src="admin/icon-settings.svg" alt="" />
        </div>
      </aside>
    </header>
  )
}
