import { Component, inject, OnInit } from '@angular/core';
import { NgvBottomSheet } from 'ngv-bottom-sheet';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {
  data = '';
  bottomSheet = inject(NgvBottomSheet)

  ngOnInit(): void {
    this.data = this.bottomSheet.getData();
  }

  close(): void {
    this.bottomSheet.close({
      open: true,
      message: 'this is my custom message'
    });
  }
}
