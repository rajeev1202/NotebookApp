import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'notebook-app';
  pagesData = [{
    pageNo: 1,
    content: ''
  }];
  MAX_ALLOWED_PAGES = 5
  selectedPageObj = this.pagesData[0];
  selectedPage = 1;

  ngOnInit() {
    if (sessionStorage.getItem('pagesData')) {

      this.pagesData = JSON.parse(sessionStorage.getItem('pagesData')!)
      this.selectedPageObj = this.pagesData[0];
      this.selectedPage = this.selectedPageObj.pageNo;
    }
  }

  addPage() {
    if (this.pagesData.length < this.MAX_ALLOWED_PAGES) {
      this.pagesData.push({ pageNo: this.pagesData.length + 1, content: '' });
      this.selectedPageObj = this.pagesData[this.pagesData.length - 1];
      this.selectedPage = this.selectedPageObj.pageNo;
    } else {
      alert("Max five pages allowed");
    }


  }

  onPageChange(e: any) {
    this.selectedPageObj = this.pagesData.find((page) => page.pageNo == this.selectedPage) !;
    
  }

  updatePageContent(content: string) {
    this.selectedPageObj.content = content;
    sessionStorage.setItem("pagesData",JSON.stringify(this.pagesData));
  }
}
