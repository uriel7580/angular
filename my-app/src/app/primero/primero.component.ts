import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  Objeto={
    "0": {
        "id": "2287947",
        "chattime": "1544102153",
        "chat": "Finalizado",
        "chattype": "text",
        "media": "",
        "outgoing": "0",
        "bot": "0",
        "unread": "1",
        "email_created": ""
    },
    "1": {
      "id": "2287947",
      "chattime": "1544102153",
      "chat": "Finalizado",
      "chattype": "text",
      "media": "",
      "outgoing": "0",
      "bot": "0",
      "unread": "1",
      "email_created": ""
  },
    "2": {
        "id": "2287931",
        "chattime": "1544102141",
        "chat": "asdasdasd",
        "chattype": "text",
        "media": "",
        "outgoing": "1",
        "bot": "0",
        "unread": "0",
        "email_created": "api"
    }
}
  result = Object.keys(this.Objeto).map(e=>this.Objeto[e]);
  ok=false;
  constructor() { }

  ngOnInit() {
  }

}
