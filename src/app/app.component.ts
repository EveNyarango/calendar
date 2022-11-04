import { Component } from '@angular/core';
import {
  CalendarOptions,
  defineFullCalendarElement,
} from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';

defineFullCalendarElement();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    weekends: true,
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth, dayGridWeek, sayGridDay',
    },
  };

  events: any = [
    {title:'present', date: '2022-10-17', color: '#0000FF'}
  ]
}
