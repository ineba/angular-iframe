import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-modal-sample',
  templateUrl: './modal-sample.component.html',
  styleUrls: ['./modal-sample.component.css']
})
export class ModalSampleComponent implements OnInit {
  @Input() firstInput;

  @Output() emitOutput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  click() {
    this.emitOutput.emit({ inputData: this.firstInput });
  }
}