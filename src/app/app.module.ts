import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerPlanComponent } from './scheduler-plan/scheduler-plan.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, AgendaService, MonthAgendaService, MonthService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    SchedulerPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
