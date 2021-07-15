import { Drawer, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

const MenuPrimary = ({ label, href }: any) => (
  <div className={`mb-5 md:mb-0 md:ml-10`}><Link href={href}>{label}</Link></div>
)

const MenuSecondary = ({ label, href }: any) => (
  <div className={`mb-5 md:mb-0 md:mr-10`}><Link href={href}>{label}</Link></div>
)

const TopNavBar3 = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)

  return (
    <div className={`w-full border-b`}>
      <div className={`container mx-auto flex justify-between items-center p-5 md:px-0 md:pt-5 md:pb-2`}>
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
      <div className={`hidden md:block md:container md:mx-auto md:flex md:justify-start md:pb-5`}>
        <MenuSecondary label={`Dashboard`} href={`/`} />
        <MenuSecondary label={`Form`} href={`/`} />
        <MenuSecondary label={`Settings`} href={`/`} />
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

export default TopNavBar3