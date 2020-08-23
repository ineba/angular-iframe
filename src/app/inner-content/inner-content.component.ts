import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-inner-content",
  templateUrl: "./inner-content.component.html",
  styleUrls: ["./inner-content.component.css"]
})
export class InnerContentComponent implements OnInit {
  @Input() firstInput;

  @Output() emitOutput: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  click() {
    this.emitOutput.emit({ inputData: this.firstInput });
  }
}
