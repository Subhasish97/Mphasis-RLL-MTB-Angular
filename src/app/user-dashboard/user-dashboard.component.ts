import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  btnClick()  {  
    this.router.navigateByUrl('/app-edit-user');
};
btn3Click()  {  
  this.router.navigateByUrl('/app-booking-history');
};

}
