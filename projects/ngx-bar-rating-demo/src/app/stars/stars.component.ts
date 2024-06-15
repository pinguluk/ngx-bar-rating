import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  standalone: true,
  selector: 'stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  imports: [
    FaIconComponent,
    BarRatingModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarsComponent {

  bootRate: number = 1;
  faRate: number = 1;
  cssRate: number = 1.6;
  faoRate: number = 5.6;
  faoRated: boolean = false;

  onFaoRate(e): void {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset(): void {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

  test(): void {
    console.log('test');
  }
}
