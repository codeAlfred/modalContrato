import { Component, OnInit } from '@angular/core';

import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';


@Component({
  selector: 'app-dialog-nebular',
  templateUrl: './dialog-nebular.component.html',
  styleUrls: ['./dialog-nebular.component.scss']
})


export class DialogNebularComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
  }

  open() {
    this.dialogService.open(ShowcaseDialogComponent);
  }

  

}
