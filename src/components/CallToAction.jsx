import { CalendarCheck } from "./icons";
import { Translate } from "./Translate";

export const CallToAction = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-ufopink/10 to-ufopink/5 my-24">
      <div className="margins items-end max-lg:items-start flex gap-8 justify-between max-lg:flex-col">
        <p className="text-background-gradient text-4xl font-bold max-w-2xl py-1">
          <Translate>callToActionText</Translate>
        </p>
        <a target="_blank" href="https://calendly.com/corporate-ufodevelopment/30min" className="w-fit bg-ufopink px-4 py-2 rounded text-black font-medium hover:opacity-90 transition-opacity flex items-center gap-4 h-fit">
          <Translate>mainHookButton</Translate>
          <CalendarCheck />
        </a>
      </div>
    </div>
  );
};
