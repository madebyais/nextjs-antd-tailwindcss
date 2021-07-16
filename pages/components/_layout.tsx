import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const LayoutComponentPreview: FC = ({ children }) => {
  return (
    <div className={`w-full h-screen bg-gray-100`}>
      <Head>
        <title>Component Preview</title>
      </Head>

      <main className={`grid grid-cols-8`}>
        <div className={`bg-white h-screen col-span-1 p-5 border-r`}>
          <div className={`font-bold uppercase mb-10`}>Component Preview</div>
          <Menu title={`Top Navigation Bar`} href={`/components/top-navbar`} />
          <Menu title={`Footer`} href={`/components/footer`} />
        </div>
        <div className={`h-screen col-span-7 p-5 overflow-y-scroll`}>
          {children}
        </div>
      </main>
    </div>
  )
}

const Menu = ({ title, href }: any) => (
  <Link href={href}>
    <div className={`cursor-pointer block mb-2`}>{title}</div>
  </Link>
)

export default LayoutComponentPreview