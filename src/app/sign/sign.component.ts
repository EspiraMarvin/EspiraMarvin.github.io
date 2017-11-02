import{ Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private m: Router) { }

  ngOnInit() {                                                                                                                                                                                                                                                           
  }
  navigate(){                
    this.m.navigate(['/guest']);
  }
}
