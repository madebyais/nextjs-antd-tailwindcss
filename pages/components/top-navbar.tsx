import { TopNavBar1, TopNavBar2, TopNavBar3, TopNavBar4 } from "components/navbar";
import LayoutComponentPreview from "./_layout";

export default function TopNavbarPreviewPage() {
  return (
    <LayoutComponentPreview>
      <div className={`mb-10 text-lg font-bold uppercase`}>Top Navigation Bar</div>
      <div className={`bg-white mb-10`}><TopNavBar1 /></div>
      <div className={`bg-white mb-10`}><TopNavBar2 /></div>
      <div className={`bg-white mb-10`}><TopNavBar3 /></div>
      <div className={`bg-white pt-5 mb-10`}><TopNavBar4 /></div>
    </LayoutComponentPreview>
  )
}