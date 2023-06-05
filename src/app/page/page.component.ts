import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input() content= '' ;

  @Output() pageContent = new EventEmitter()

  onContentChanges(e:any){
    this.pageContent.emit(this.content);
  }




}
