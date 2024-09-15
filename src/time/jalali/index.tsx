import moment from 'jalali-moment'
import { JalaliCalendar } from './jalaliCalendar'

interface Prop {
  currentDate: moment.Moment
}

export function JalaliComponent(prop: Prop) {
  const { currentDate: currentTime } = prop

  return (
    <div className="flex h-screen items-center justify-center flex-row-reverse overflow-hidden">
      <div className="flex flex-col items-center justify-center lg:gap-4 gap-2 moveable w-[40%]">
        <div className="select-none text-gray-600 text-gray-trasnparent dark:text-[#eee]">
          {currentTime.locale('fa').format('dddd')}
        </div>
        <div className="text-6xl select-none text-gray-600 text-gray-trasnparent dark:text-[#eee]  ">
          {currentTime.locale('fa').jDate()}
        </div>
        <div className="flex flex-row gap-1 text-gray-600 text-gray-trasnparent dark:text-[#eee] font-light">
          <div>{currentTime.locale('fa').jYear()}</div>
          <div>{currentTime.locale('fa').format('jMMMM')}</div>
        </div>
      </div>
      <div className="hidden md:flex lg:flex  flex-col items-center justify-center not-moveable h-xs:hidden">
        <JalaliCalendar currentDate={currentTime} />
      </div>
    </div>
  )
}