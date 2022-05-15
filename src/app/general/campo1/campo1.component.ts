import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-campo1',
  templateUrl: './campo1.component.html',
  styleUrls: ['./campo1.component.css']
})
export class Campo1Component implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  send(){
     console.log("OK")
     this.messageService.sendMsg("HOLA");//asincrono, mandó Hola a sus suscriptores
  }

}
