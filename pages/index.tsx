import SingleLayout from "../components/layout/single";
import SvgImage from "../components/svg";

export default function Home() {
  return (
    <SingleLayout title={`Home`} isLoading={false}>
      <div className={`container mx-auto flex justify-center`}>
        <div className={`pt-20 text-center text-4xl`}>
          Hello world!
          <br/><br/>
          <SvgImage src={`hello`} />
        </div>
      </div>
    </SingleLayout>
  )
}
