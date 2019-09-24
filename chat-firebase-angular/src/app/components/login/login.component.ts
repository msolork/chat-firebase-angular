import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( public _chat: ChatService) { }

  ngOnInit() {
  }

  ingresar( proveedor:string ){
  	console.log(proveedor);
  	this._chat.login(proveedor);
  }

}
