import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-for-sections',
  templateUrl: './header-for-sections.component.html',
  styleUrls: ['./header-for-sections.component.scss']
})
export class HeaderForSectionsComponent implements OnInit {

  @Input() butterImg?: string = 'https://buttercms.com/static/v2/images/logo.fb7c1035e94d.svg';

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      document.querySelector('.header')?.classList.add('sticky');
    }else {
      document.querySelector('.header')?.classList.remove('sticky');
    }
  }

  ngOnInit(): void {}

}
