import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data=[
    {
      heading:"FREE",
      price:"0$",
      user:"Single User",
      storage:"5GB",
      subdomain:"",
      color1:"text-muted",
      color2:"text-muted",
      color3:"text-muted",
      color4:"text-muted",
      fa1:"fas fa-check",
      fa2:"fas fa-times",
      fa3:"fas fa-times",
      fa4:"fas fa-times",
      fa5:"fas fa-times"

    },
    {
      heading:"PLUS",
      price:"9$",
      user:"5 Users",
      storage:"50GB",
      subdomain:"",
      color1:"",
      color2:"",
      color3:"",
      color4:"text-muted",
      fa1:"fas fa-check",
      fa2:"fas fa-check",
      fa3:"fas fa-check",
      fa4:"fas fa-check",
      fa5:"fas fa-times"

    },
    {
      heading:"PRO",
      price:"49$",
      user:"Unlimited Users",
      storage:"150GB",
      subdomain:"Unlimited",
      color1:"",
      color2:"",
      color3:"",
      color4:"",
      fa1:"fas fa-check",
      fa2:"fas fa-check",
      fa3:"fas fa-check",
      fa4:"fas fa-check",
      fa5:"fas fa-check"

    }
  ]
}
