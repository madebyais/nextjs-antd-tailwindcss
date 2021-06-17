import SvgImage from "../components/svg";
import SideNavLayout from "../components/layout/sidenav";

export default function Dashboard() {
  return (
    <SideNavLayout title={`Home`} isLoading={false}>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div><div className={`pt-20 text-center text-4xl`}>
      Hello world!
      <br/><br/>
      <SvgImage src={`hello`} />
    </div>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div><div className={`pt-20 text-center text-4xl`}>
      Hello world!
      <br/><br/>
      <SvgImage src={`hello`} />
    </div><div className={`pt-20 text-center text-4xl`}>
      Hello world!
      <br/><br/>
      <SvgImage src={`hello`} />
    </div>
      <div className={`pt-20 text-center text-4xl`}>
        Hello world!
        <br/><br/>
        <SvgImage src={`hello`} />
      </div>
    </SideNavLayout>
  )
}
