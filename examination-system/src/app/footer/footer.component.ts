import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  display:string ="block";
  constructor(private activeRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    if(window.location.href.toString().includes("exam")){
      this.display = "none";
    }
  }

}
