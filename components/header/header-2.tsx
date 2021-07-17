import SvgImage from "components/svg";

const Header2 = () => (
  <div className={`w-full flex items-center px-5 border-b mt-20 md:mt-0`} style={{height: '60vh'}}>
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-5`}>
      <div className={`text-center md:text-left md:pl-20`}>
        <div className={`text-6xl font-bold mb-10`}>
          NextJS. Antd. Tailwindcss.
        </div>
        <div className={`text-lg mb-5`}>
          This is a project boilerplate that gonna help you 
          develop your product faster and launch sooner.
        </div>
        <div className={`text-lg`}>
          Trust me, you'll thank me later.<br/>
          =9
        </div>
      </div>
      <div className={`text-center`}>
        <SvgImage src={`hello`} />
      </div>
    </div>
  </div>
)

export default Header2