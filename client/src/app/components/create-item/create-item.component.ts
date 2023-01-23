import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { Router } from "@angular/router";
import { Item } from "../../models/item.model";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  constructor(private itemService: ItemService, private router: Router) { }

  emailFormControl = new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(140),
  ]);

  createList(description: string) {
      this.itemService.createItem(description).subscribe((item: Item) => {
        console.log(item);
        // Now we navigate to /items
        this.router.navigate([ '/items']);
      });
    }
}
