import Title from "antd/lib/skeleton/Title";
import { Feature1 } from "components/feature";
import LayoutComponentPreview from "./_layout";

export default function FeaturePreviewPage() {
  return (
    <LayoutComponentPreview>
      <div className={`mb-20`}>
        <div className={`mb-10 text-lg font-bold uppercase`}>Feature 1</div>
        <Feature1
          imageUrl={`https://placeimg.com/400/600/tech/grayscale`}
          features={[
            {
              title: 'First Feature',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
              title: 'Second Feature',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          ]}
          />
      </div>
    </LayoutComponentPreview>
  )
}