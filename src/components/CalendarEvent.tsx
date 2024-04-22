import { EventContentArg } from "@fullcalendar/core/index.js";
import { cn } from "../utils/cn";

function CalendarEvent({ timeText, event }: EventContentArg) {
  return (
    <div
      className={cn(
        "bg-primary500 border border-white rounded-md p-[2px] py-1 flex items-center gap-1 outline-none",
        event.title?.includes("-") && "bg-red-500"
      )}
    >
      <div className="size-2 rounded-full bg-white"></div>
      <p className="text-blue-500 ">{timeText}</p>
      <p className="text-xs truncate text-ellipsis">{event.title}</p>
    </div>
  );
}

export default CalendarEvent;
