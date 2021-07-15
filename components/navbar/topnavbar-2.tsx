import { Button, Drawer, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

const Menu = ({ label, href }: any) => (
  <div className={`mb-5 md:mb-0 md:ml-10`}><Link href={href}>{label}</Link></div>
)

const TopNavBar2 = () => {
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)

  return (
    <div className={`w-full border-b`}>
      <div className={`container mx-auto flex justify-between items-center p-5 md:px-0 py-5`}>
        <div>Logo</div>
        <div className={`hidden md:block md:flex md:items-center`}>
          <Menu label={`Home`} href={`/`} />
          <Menu label={`About`} href={`/`} />
          <Menu label={`Pricing`} href={`/`} />
          <Menu label={`Dummy Menu`} href={`/`} />
        </div>
        <div className={`hidden md:block md:flex md:justify-end md:items-center`}>
          <div className={`mr-3`}><Input placeholder={`Search ...`} /></div>
          <div className={`mr-3`}><Button type={`primary`}>Sign In</Button></div>
          <div><Button>Register</Button></div>
        </div>
        <div className={`block md:hidden`}>
          <i className={`fa fa-bars cursor-pointer`} onClick={e => setIsShowDrawer(true)} />
        </div>
      </div>

      <Drawer visible={isShowDrawer} onClose={e => setIsShowDrawer(false)}>
        <div className={`flex flex-col`}>
          <Menu label={`Home`} href={`/`} />
          <Menu label={`About`} href={`/`} />
          <Menu label={`Pricing`} href={`/`} />
          <Menu label={`Dummy Menu`} href={`/`} />
        </div>
      </Drawer>
    </div>
  )
}

export default TopNavBar2