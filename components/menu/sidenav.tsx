import {FC, useState} from "react";
import {Drawer} from "antd";

interface ISideNavMenuProps {
  readonly logo: any
  readonly menuItemSpacing?: number
}

const SideNavMenu: FC<ISideNavMenuProps> = ({ logo, menuItemSpacing = 3, children }) => {
  const [showDrawer, setIsShowDrawer] = useState<boolean>(false)

  return (
    <>
      <aside className={`h-full bg-white p-5 hidden w-64 md:block`}>
        <div className={`mb-10`}>{logo}</div>
        <div className={`grid grid-cols-1 space-y-${menuItemSpacing}`}>
          {children}
        </div>
      </aside>

      <div className={`w-full bg-white block p-5 flex justify-between items-center md:hidden`}>
        <div>{logo}</div>
        <div className={`cursor-pointer`}>
          <i className={`fa fa-bars`} onClick={e => setIsShowDrawer(true)} />
        </div>
      </div>

      <Drawer visible={showDrawer} onClose={e => setIsShowDrawer(false)}>
        <div className={`grid grid-cols-1 mt-5 space-y-${menuItemSpacing}`}>
          {children}
        </div>
      </Drawer>
    </>
  )
}

export default SideNavMenu