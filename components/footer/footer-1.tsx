import Link from "next/link"

const SocialMediaLink = ({ icon, href }: any) => (
  <Link href={href}>
    <i className={`fa fa-${icon} mr-5`} />
  </Link>
)

const MenuTitle = ({ title }: any) => (
  <div className={`font-bold text-gray-500 uppercase text-xs mb-7`}>{title}</div>
)

const Menu = ({ title, href }: any) => (
  <Link href={href}>
    <div className={`block mb-2`}>{title}</div>
  </Link>
)

const Footer1 = () => (
  <div className={`border-t p-5 md:p-0`}>
    <div className={`container mx-auto md:mt-5`}>
      <div className={`grid grid-cols-1 md:grid-cols-6 gap-x-10`}>
        <div className={`mb-10 md:col-span-2 md:mb-0`}>
          <div className={`mb-10`}>Logo</div>
          <div className={`mb-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </div>
          <div>
            <SocialMediaLink icon={`facebook`} href={`https://facebook.com`} />
            <SocialMediaLink icon={`twitter`} href={`https://twitter.com`} />
            <SocialMediaLink icon={`instagram`} href={`https://instagram.com`} />
            <SocialMediaLink icon={`youtube`} href={`https://youtube.com`} />
          </div>
        </div>

        <div className={`my-5`}>
          <MenuTitle title={`Company`} />
          <Menu title={`About`} href={`/`} />
          <Menu title={`Privacy Policy`} href={`/`} />
          <Menu title={`Terms & Conditions`} href={`/`} />
        </div>

        <div className={`my-5`}>
          <MenuTitle title={`Resources`} />
          <Menu title={`API`} href={`/`} />
          <Menu title={`Documentation`} href={`/`} />
          <Menu title={`Tutorial`} href={`/`} />
          <Menu title={`Issues`} href={`/`} />
        </div>

        <div className={`my-5`}>
          <MenuTitle title={`Community`} />
          <Menu title={`Slack`} href={`/`} />
          <Menu title={`Twitter`} href={`/`} />
          <Menu title={`Discord`} href={`/`} />
        </div>

        <div className={`my-5`}>
          <MenuTitle title={`Community`} />
          <Menu title={`Slack`} href={`/`} />
          <Menu title={`Twitter`} href={`/`} />
          <Menu title={`Discord`} href={`/`} />
        </div>
      </div>

      <div className={`md:mt-20`}>
        &copy; 2021. madebyais.
      </div>
    </div>
  </div>
)
export default Footer1