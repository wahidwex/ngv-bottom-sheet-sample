import { Component, inject } from '@angular/core';
import { TargetComponent } from './target/target.component';
import { Router } from '@angular/router';
import { NgvBottomSheet } from 'ngv-bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngv-bottom-sheet-sample';
  bottomSheet = inject(NgvBottomSheet);
  router = inject(Router);

  OpenRouteBottomSheet(): void {
    this.router.navigate([], {fragment: 'target'}).then();
  }

  OpenServiceBottomSheet(): void {
    const ref = this.bottomSheet.open(TargetComponent, {
      data: 'this is my custom data'
    })
    ref.afterClose().then(res => {
      if(res?.open) {
        alert(res.message);
      }
    });
  }
}
