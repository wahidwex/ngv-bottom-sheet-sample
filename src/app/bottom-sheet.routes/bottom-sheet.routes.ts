import { TargetComponent } from '../target/target.component';
import { NgvRoutesConfig } from 'ngv-bottom-sheet/lib/models';

export const BOTTOM_SHEET_ROUTES: NgvRoutesConfig = {
  options: {
    backDropStyle: 'gray',
    space: 5,
    backDropClose: true
  },
  list: [
    {
      component: TargetComponent,
      fragment: 'target'
    }
  ]
}
