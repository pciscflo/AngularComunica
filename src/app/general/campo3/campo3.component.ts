import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-campo3',
  templateUrl: './campo3.component.html',
  styleUrls: ['./campo3.component.css']
})
export class Campo3Component implements OnInit {

  
  constructor(private messageService: MessageService) { }
  data :String;
  
  ngOnInit(): void {
     this.data = "";
     this.messageService.getMsg().subscribe((message: String) => {
       this.data = message;
       console.log(message);
    });
  }

}
