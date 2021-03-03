import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectseatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btn1Click()  {
    this.router.navigateByUrl('/app-payment');
};

}
