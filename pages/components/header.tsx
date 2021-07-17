import { Header1, Header2 } from "components/header";
import LayoutComponentPreview from "./_layout";

export default function HeaderPreviewPage() {
  return (
    <LayoutComponentPreview>
      <div className={`mb-10 text-lg font-bold uppercase`}>Header</div>
      <div className={`bg-white mb-10 pb-5`}><Header1 /></div>
      <div className={`bg-white mb-10 pb-5`}><Header2 /></div>
    </LayoutComponentPreview>
  )
}