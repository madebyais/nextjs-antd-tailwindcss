import type {NextApiRequest, NextApiResponse} from "next";
import constant from "../../../../common/constant";
import Fetch from "../../../../util/fetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, provider } = req.query
  let account = {}

  if (provider === "google") {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const redirectUri = process.env.GOOGLE_REDIRECT_URI

    let url = `${constant.GoogleTokenUrl}?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}&grant_type=authorization_code`
    let resp = await Fetch("POST", url)
    if (!resp.access_token) {
      return res.redirect("/error?code=login")
    }

    url = `${constant.GoogleApiUrl}/v3/userinfo?alt=json&access_token=${resp.access_token}`
    resp = await Fetch("POST", url)
    if (!resp.email) {
      return res.redirect("/error?code=login")
    }

    account = {
      googleId: resp.sub,
      email: resp.email,
      fullname: resp.name,
      picUrl: resp.picture,
      birthday: null
    }
  } else if (provider === "facebook") {
    const clientId = process.env.FACEBOOK_CLIENT_ID
    const clientSecret = process.env.FACEBOOK_CLIENT_SECRET
    const redirectUri = process.env.FACEBOOK_REDIRECT_URI
    const fields = process.env.FACEBOOK_OAUTH_FIELDS

    let url = `${constant.FacebookGraphUrl}/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}&grant_type=authorization_code`
    let resp = await Fetch("GET", url)
    if (!resp.access_token) {
      return res.redirect("/error?code=login")
    }

    url = `${constant.FacebookGraphUrl}/me?fields=${fields}&access_token=${resp.access_token}`
    resp = await Fetch("GET", url)
    if (!resp.email) {
      return res.redirect("/error?code=login")
    }

    account = {
      facebookId: resp.id,
      email: resp.email,
      fullname: `${resp.first_name} ${resp.last_name}`,
      picUrl: resp.picture.data.url || null,
      birthday: resp.birthday || null
    }
  }

  // You can do anything with the `account` object.
  // ....

  // Recommend to redirect to your dashboard page
  res.status(200).json(account)
}