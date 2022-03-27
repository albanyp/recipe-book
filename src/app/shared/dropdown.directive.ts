import { Directive, TemplateRef, Input, OnInit, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
  private hasView = false;
  @Input() set appDropdown(condition: boolean) {
    if(condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.elementReference)
      this.hasView = true
    } else if(!condition && this.hasView) {
      this.viewContainer.clear()
      this.hasView = false
    }
  }

  constructor(private elementReference: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
  }

}
