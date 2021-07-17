import { Drawer, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

const MenuPrimary = ({ label, href }: any) => (
  <div className={`mb-5 md:mb-0 md:ml-10`}><Link href={href} passHref>{label}</Link></div>
)

const MenuSecondary = ({ label, href }: any) => (
  <div className={`mb-5 md:mb-0 md:mr-5 text-xs`}><Link href={href} passHref>{label}</Link></div>
)

const TopNavBar4 = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)

  return (
    <div className={`w-full border-b`}>
      <div className={`hidden md:block md:container md:mx-auto md:flex md:justify-between md:items-center md:pb-4 md:border-b`}>
        <div className={`md:flex md:justify-start md:items-center`}>
          <MenuSecondary label={`How to use`} href={`/`} />
          <MenuSecondary label={`Careers`} href={`/`} />
          <MenuSecondary label={`Blog`} href={`/`} />
          <MenuSecondary label={`Pricing`} href={`/`} />
        </div>
        <div className={`md:flex md:justify-end md:items-center`}>
          <Link href={`/`} passHref><i className={`cursor-pointer fa fa-facebook mr-5`} /></Link>
          <Link href={`/`} passHref><i className={`cursor-pointer fa fa-twitter mr-5`} /></Link>
          <Link href={`/`} passHref><i className={`cursor-pointer fa fa-instagram`} /></Link>
        </div>
      </div>
      <div className={`container mx-auto flex justify-between items-center p-5 md:px-0`}>
        <div>Logo</div>
        <div className={`hidden md:block md:flex md:justify-end md:items-center`}>
          <div><Input placeholder={`Search ...`} /></div>
          <MenuPrimary label={`Sign In`} href={`/`} />
          <MenuPrimary label={`Register`} href={`/`} />
        </div>
        <div className={`block md:hidden`}>
          <i className={`fa fa-bars cursor-pointer`} onClick={e => setIsShowDrawer(true)} />
        </div>
      </div>

      <Drawer visible={isShowDrawer} onClose={e => setIsShowDrawer(false)}>
        <div className={`flex flex-col`}>
          <MenuPrimary label={`Home`} href={`/`} />
          <MenuPrimary label={`About`} href={`/`} />
          <MenuPrimary label={`Pricing`} href={`/`} />
          <MenuPrimary label={`Dummy Menu`} href={`/`} />
        </div>
      </Drawer>
    </div>
  )
}

export default TopNavBar4