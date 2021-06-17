import {FC, useEffect} from "react";
import ILayoutProps from "./interface";
import Head from "next/head";
import Loading from "../icon/loader";
import SideNavMenu from "../menu/sidenav";
import MenuItem from "../menu/item";

const SideNavLayout: FC<ILayoutProps> = ({ title, isLoading = false, children }) => {
  useEffect(() => {
    // Change the color of main body
    document.body.className = "bg-gray-100"
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={`bg-gray-100`}>
        { isLoading ? (
          <div className={`w-full h-screen flex justify-center items-center`}>
            <Loading />
          </div>
        ): (
          <div className={`h-screen md:flex`}>
            <SideNavMenu logo={`Logo`}>
              <MenuItem label={`Home`} href={`/`} />
              <MenuItem label={`Dashboard`} href={`/dashboard`} />
              <MenuItem label={`Login/Sign Up`} href={`/login`} />
            </SideNavMenu>

            <div className={`md:w-full md:h-screen md:overflow-y-auto`}>
              {children}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default SideNavLayout