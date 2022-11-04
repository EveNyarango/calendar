import { Component, OnInit } from '@angular/core';
import { AgendaService, DayService, MonthService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-scheduler-plan',
  template: `<ejs-schedule> </ejs-schedule>`,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './scheduler-plan.component.html',
  // styleUrls: ['./scheduler-plan.component.css']
})
export class SchedulerPlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
