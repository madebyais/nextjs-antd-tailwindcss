import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const LayoutComponentPreview: FC = ({ children }) => {
  return (
    <div className={`w-full h-screen bg-gray-100`}>
      <Head>
        <title>Component Preview</title>
      </Head>

      <main>
        <div className={`hidden md:block md:grid md:grid-cols-8`}>
          <div className={`bg-white h-screen col-span-1 p-5 border-r`}>
            <div className={`font-bold uppercase mb-10`}>Component Preview</div>
            <Menu title={`Top Navigation Bar`} href={`/components/top-navbar`} />
            <Menu title={`Header`} href={`/components/header`} />
            <Menu title={`Footer`} href={`/components/footer`} />
            <br/>
            <Menu title={`E-commerce`} href={`/components/e-commerce`} />
            <Menu title={`Features`} href={`/components/feature`} />
          </div>
          <div className={`h-screen col-span-7 p-5 overflow-y-scroll`}>
            {children}
          </div>
        </div>

        <div className={`w-full block p-5 md:hidden`}>
          {children}
        </div>
      </main>
    </div>
  )
}

const Menu = ({ title, href }: any) => (
  <Link href={href} passHref>
    <div className={`cursor-pointer block mb-2`}>{title}</div>
  </Link>
)

export default LayoutComponentPreview