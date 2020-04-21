import { Component } from "@angular/core";

/** @title Datepicker with filter validation */
@Component({
  selector: "datepicker-filter-example",
  templateUrl: "datepicker-filter-example.html",
  styleUrls: ["datepicker-filter-example.css"]
})
export class DatepickerFilterExample {
  maxDate = new Date();
  minDate = new Date();
  constructor() {
    this.minDate.setDate(this.minDate.getDate() - 8);
    this.maxDate.setDate(this.maxDate.getDate() - 2);
  }
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
