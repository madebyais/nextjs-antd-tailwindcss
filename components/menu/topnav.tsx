import {FC, useState} from "react";
import {Drawer} from "antd";

interface ITopNavRightMenuProps {
  readonly logo: any
  readonly menuItemSpacing?: number
}

const TopNavRightMenu: FC<ITopNavRightMenuProps> = ({ logo, menuItemSpacing = 3, children }) => {
  const [showDrawer, setIsShowDrawer] = useState<boolean>(false)

  return (
    <div className={`grid grid-cols-2 py-5 container mx-auto`}>
      <div>{logo}</div>
      <div className={`hidden md:block md:flex md:justify-end md:space-x-${menuItemSpacing+2}`}>{children}</div>
      <div className={`block flex justify-end md:hidden cursor-pointer`}>
        <i className={`fa fa-bars`} onClick={e => setIsShowDrawer(true)} />
      </div>

      <Drawer visible={showDrawer} onClose={e => setIsShowDrawer(false)}>
        <div className={`grid grid-cols-1 mt-5 space-y-${menuItemSpacing}`}>
          {children}
        </div>
      </Drawer>
    </div>
  )
}

export {
  TopNavRightMenu
}