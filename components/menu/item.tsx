import {FC} from "react";
import Link from "next/link";

interface IMenuItemProps {
  readonly label: string
  readonly href: string
  readonly className?: string
}

const MenuItem: FC<IMenuItemProps> = ({ label, href, className = '' }) => (
  <div className={className}>
    <Link href={href}>{label}</Link>
  </div>
)

export default MenuItem