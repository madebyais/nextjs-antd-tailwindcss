import Image from "next/image";
import {FC} from "react";

interface ISvgImageProps {
  readonly src: string
  readonly width?: number
  readonly height?: number
}

const SvgImage: FC<ISvgImageProps> = ({ src, width= 300, height= 300 }) => (
  <>
    <Image
      src={`/assets/svg/undraw_${src}.svg`}
      width={width}
      height={height} />
    </>
)

export default SvgImage