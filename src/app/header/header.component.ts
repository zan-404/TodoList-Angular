import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoImage:string="../assets/img.png";
  Title:string="Zan Todo App";

  constructor() { }

  ngOnInit(): void {
  }

}
