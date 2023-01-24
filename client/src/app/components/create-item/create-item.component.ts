import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { Router } from "@angular/router";
import { Item } from "../../models/item.model";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  public htmlError: boolean = false;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.htmlError = false;
  }

  emailFormControl = new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(140),
  ]);

  createList(description: string) {

      // URL validation
      const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      if (description.match(regex)) {
        Swal.fire({
          title: 'Error!',
          text: 'URL links are not allowed!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        return;
      }

      // HTML and XSS validation
      const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
      let xssDescription = description.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");

      if (description !== xssDescription) {
        Swal.fire({
          title: 'Error!',
          text: 'HTML or other code is not allowed!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        return;
      }

      this.itemService.createItem(description).subscribe((item: Item) => {
        this.router.navigate([ '/items']);
      });
    }

    private sanitizeItem(description: string){
      let lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
      return description.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    }
}
