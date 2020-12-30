import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class T1Component {
  title1 = '1234';

}
