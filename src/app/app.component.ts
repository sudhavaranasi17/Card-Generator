import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  cardObj = {
    color: '#' + Math.floor(Math.random()*16777215).toString(16)
  };
  cards = [];

  ngOnInit() {
    this.cards.push(this.cardObj);
  }

  onAdd(e) {
    const newCard = {
      color: '#' + Math.random().toString(16).substr(-6)
    };
    this.cards.splice(e + 1, 0, newCard);
  }

  onDelete(e) {
    this.cards.splice(e, 1);
  }
}
