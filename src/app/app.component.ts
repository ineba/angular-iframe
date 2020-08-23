
import { Component, ElementRef, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalSampleComponent } from './modal-sample/modal-sample.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('iframe', {static: false}) iframe: ElementRef;

  firstInput = 5;
  doc;
  compRef: ComponentRef<ModalSampleComponent>;

  constructor(private vcRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  onLoad(iframe){
    this.doc = iframe.contentDocument || iframe.contentWindow;
    this.createComponent();
  }

  createComponent() {
    const compFactory = this.resolver.resolveComponentFactory(ModalSampleComponent);
    this.compRef = this.vcRef.createComponent(compFactory);
    this.compRef.location.nativeElement.id = 'innerComp';

    (<ModalSampleComponent>this.compRef.instance).firstInput = this.firstInput;

    (<ModalSampleComponent>this.compRef.instance).emitOutput.subscribe(response => {
      console.log("jhere ",response);
    });

    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
}