import { Component, OnInit } from '@angular/core';
import { Item } from "../../models/item.model";
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss']
})
export class ItemsPageComponent implements OnInit {

  public items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      console.log("items: ", this.items);
    })
  }

}
