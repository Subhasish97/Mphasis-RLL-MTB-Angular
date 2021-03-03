import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-theater',
  templateUrl: './choose-theater.component.html',
  styleUrls: ['./choose-theater.component.css']
})
export class ChooseTheaterComponent implements OnInit {

  public model:any;

  constructor(private router: Router) { }

  ngOnInit(): void { 
  }
  btn1Click()  {
    this.router.navigateByUrl('/app-selectseat');
};

}
