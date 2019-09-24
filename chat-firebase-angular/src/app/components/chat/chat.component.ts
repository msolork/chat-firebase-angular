import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  public mensaje:string = "";
  elemento: any;
  constructor( public _chat: ChatService) {

    this._chat.cargarMensajes().subscribe( () => {

      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;

      }, 100);

    });

  }

  ngOnInit() {

    this.elemento = document.getElementById('app-mensajes');


  }

  enviarMensaje(){
    console.log(this.mensaje);
    
    if(this.mensaje.length === 0){
      return ;
    }

    this._chat.agregarMensaje( this.mensaje )
              .then( () => this.mensaje = "")
              .catch( (err) => console.error("Error al enviar", err) );


              

  
  }


}
