import {useEffect, useState} from "react";
import { NextPage } from 'next'
import SvgImage from "../components/svg";
import {Button} from "antd";
import constant from "../common/constant";
import Loading from "../components/icon/loader";

interface ILoginProps {
  readonly GoogleClientId?: string
  readonly GoogleRedirectUri?: string
  readonly GoogleOauthScope?: string
  readonly FacebookClientId?: string
  readonly FacebookRedirectUri?: string
  readonly FacebookOauthScope?: string
}

const Login: NextPage<ILoginProps> = ({
  GoogleClientId, GoogleRedirectUri, GoogleOauthScope,
  FacebookClientId, FacebookRedirectUri, FacebookOauthScope
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onClick = (provider: string) => {
    setIsLoading(true)

    let oauthUrl = ''
    if (provider === 'google') {
      oauthUrl = `${constant.GoogleOAuthUrl}/auth?client_id=${GoogleClientId}&redirect_uri=${GoogleRedirectUri}&scope=${GoogleOauthScope}&access_type=offline&response_type=code`
    } else if (provider === 'facebook') {
      oauthUrl = `${constant.FacebookOauthUrl}?client_id=${FacebookClientId}&redirect_uri=${FacebookRedirectUri}&scope=${FacebookOauthScope}`
    }

    window.location.href = oauthUrl
  }

  useEffect(() => {
    // Change the color of main body
    document.body.className = "bg-gray-100"
  }, [])

  return (
    <div className={`h-screen grid grid-cols-1 md:grid-cols-2`}>
      <div className={`hidden flex md:flex justify-center items-center md:block`}>
        <SvgImage src={`secure_login`} width={500} height={500} />
      </div>
      <div className={`w-full bg-white flex justify-center items-center`}>
        <div className={`w-96 text-center px-5`}>
          <div className={`font-semibold text-2xl`}>Welcome to App</div>
          <div className={`text-sm my-5`}>Sign up or login to your account</div>
          <div className={`mt-10`}>
            {isLoading ? (
              <Loading />
            ):(
              <>
                <Button className={`w-full mb-2 cursor-pointer`} type={`primary`} onClick={e => onClick("google")}>Google</Button>
                <Button className={`w-full cursor-pointer`} onClick={e => onClick("facebook")}>Facebook</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      GoogleClientId: process.env.GOOGLE_CLIENT_ID || '',
      GoogleRedirectUri: process.env.GOOGLE_REDIRECT_URI || '',
      GoogleOauthScope: process.env.GOOGLE_OAUTH_SCOPE || '',

      FacebookClientId: process.env.FACEBOOK_CLIENT_ID || '',
      FacebookRedirectUri: process.env.FACEBOOK_REDIRECT_URI || '',
      FacebookOauthScope: process.env.FACEBOOK_OAUTH_SCOPE || '',
    }
  }
}

export default Login