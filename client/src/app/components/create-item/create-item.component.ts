import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  public description: string = '';
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.description = '';
  }

  emailFormControl = new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(140),
  ]);

  createList(description: string) {

      this.description = description;

      // Length Validation
      if (this.lengthValidationError(this.description)){
        Swal.fire({
          title: 'Error!',
          text: 'Description must be of length from 3 to 140 characters!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        return;
      }

      // Url Validation
      if (this.urlValidationError(this.description)){
        Swal.fire({
          title: 'Error!',
          text: 'URL links are not allowed!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        return;
      }

      // HTML and XSS validation
      if (this.codeValidationError(this.description)){
        Swal.fire({
          title: 'Error!',
          text: 'HTML or other code is not allowed!',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        return;
      }

      this.itemService.createItem(description).subscribe(() => {
        this.router.navigate([ '/items']);
      });
    }

    lengthValidationError(description: string){
      return description.length < 3 || description.length > 139;
    }

    codeValidationError(description: string){
      const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g;
      const sanitizedDescription = description.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
      return description !== sanitizedDescription;
    }

    urlValidationError(description: string){
      const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      return !!description.match(regex);
    }

}
