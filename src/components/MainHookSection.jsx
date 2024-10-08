import { Translate } from './Translate'
import { CalendarCheck } from './icons'

export const MainHookSection = () => {
  return (
    <div id="mainHookContainer" className="h-screen">
      <div className="margins flex justify-center h-full flex-col gap-7">
        <span className="badge-pink">
          <Translate>mainHookAgency</Translate>
        </span>
        <h1 className="text-6xl font-bold text-left sm:text-pretty max-w-[700px] text-background-gradient max-sm:text-4xl max-[320px]:text-xl">
          <Translate>mainHookTitle</Translate>
        </h1>
        <p className="opacity-80 text-lg text-pretty max-w-xl max-sm:text-sm max-[320px]:text-xs">
          <Translate>mainHookParagraph</Translate>
        </p>
        <a target="_blank" href="https://calendly.com/corporate-ufodevelopment/30min" className="w-fit bg-ufopink px-4 py-2 rounded text-black font-medium hover:opacity-90 transition-opacity flex items-center gap-4">
          <Translate>mainHookButton</Translate>
          <CalendarCheck />
        </a>
      </div>
    </div>
  )
}