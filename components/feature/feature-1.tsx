import { FC } from "react";
import Image from "next/image"

interface featureDescription {
  readonly title?: string
  readonly description?: string
}

interface IFeatureProps {
  readonly imageUrl: string
  readonly features: Array<featureDescription>
}

const Feature1: FC<IFeatureProps> = ({ imageUrl, features }) => (
  <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5`}>
    <div className={`flex justify-center`}>
      <Image src={imageUrl} width={400} height={600} />
    </div>
    <div className={`flex flex-col justify-center space-y-10`}>
      {features.map((item, i) => (
        <div key={i}>
          <div className={`text-xl mb-5 font-bold`}>{item.title}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Feature1