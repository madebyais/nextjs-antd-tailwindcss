import { Footer1 } from "components/footer";
import LayoutComponentPreview from "./_layout";

export default function HeaderPreviewPage() {
  return (
    <LayoutComponentPreview>
      <div className={`mb-10 text-lg font-bold uppercase`}>Footer</div>
      <div className={`bg-white mb-10 pb-5`}><Footer1 /></div>
    </LayoutComponentPreview>
  )
}