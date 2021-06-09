import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('heading') heading=""
  @Input('price') price=""
  @Input('user') user=""
  @Input('storage') storage=""
  @Input('subdomain') subdomain=""
  @Input('color1') color1=""
  @Input('color2') color2=""
  @Input('color3') color3=""
  @Input('color4') color4=""
  @Input('fa1') fa1=""
  @Input('fa2') fa2=""
  @Input('fa3') fa3=""
  @Input('fa4') fa4=""
  @Input('fa5') fa5=""

  constructor() { }

  ngOnInit(): void {
  }

}
