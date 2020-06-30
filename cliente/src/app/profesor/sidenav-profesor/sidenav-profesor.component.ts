import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-profesor',
  templateUrl: './sidenav-profesor.component.html',
  styleUrls: ['./sidenav-profesor.component.css']
})
export class SidenavProfesorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shouldRun = [ /(^|\.)plnkr\.co$/ , /(^|\.)stackblitz\.io$/ ] .some ( h => h.test ( window .location.host));

}
