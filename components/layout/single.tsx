import {FC} from "react";
import Head from "next/head";
import Loading from "../icon/loader";
import {TopNavRightMenu} from "../menu/topnav";
import MenuItem from "../menu/item";

interface ISingleLayoutProps {
  readonly title: string
  readonly isLoading: boolean
}

const SingleLayout: FC<ISingleLayoutProps> = ({ title, isLoading = false, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        { isLoading ? (
          <div className={`w-full h-screen flex justify-center items-center`}>
            <Loading />
          </div>
        ): (
          <>
            <TopNavRightMenu logo={`Logo`}>
              <MenuItem label={`Home`} href={`/`} />
              <MenuItem label={`Dashboard`} href={`/dashboard`} />
              <MenuItem label={`Login/Sign Up`} href={`/login`} />
            </TopNavRightMenu>

            {children}
          </>
        )}
      </main>
    </div>
  )
}

export default SingleLayout