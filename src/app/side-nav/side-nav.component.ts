import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBadgeClick() {
    document.getElementById('badgePopup').classList.toggle('badgePopup-show');
  }
}
