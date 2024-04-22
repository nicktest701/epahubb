import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarEvent from "./CalendarEvent";

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
     
      }}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      initialDate="2024-05-01"

      events={[
        { title: "$-219.50 5 trades", date: "2024-05-16" },
        { title: "$-64.49 5 trades", date: "2024-05-17" },
        { title: "$-97.83 9 trades", date: "2024-05-18" },
        { title: "$-22.20 2 trades", date: "2024-05-19" },
        { title: "$11.82 2 trades", date: "2024-05-22" },
        { title: "$196.59 10 trades", date: "2024-05-23" },
        { title: "$10.10 8 trades", date: "2024-05-24" },
        { title: "$117.25 4 trades", date: "2024-05-26" },
        { title: "$10.00 1 trades", date: "2024-05-28" },
        { title: "$-215.55 5 trades", date: "2024-05-30" },
      ]}
      eventContent={CalendarEvent}
    />
  );
}

export default Calendar;
