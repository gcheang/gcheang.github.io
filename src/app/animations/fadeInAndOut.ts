import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInAndOut = trigger('fadeInAndOut', [
  transition(
    ':enter',
    [
      style({
        opacity: 0,
        transform: 'translateY(-10px)',
      }),
      animate(
        '600ms {{ delay }} ease-in-out',
        style({ opacity: 1, transform: 'translateY(0)' }),
      ),
    ],
    { params: { delay: '0s' } },
  ),
  transition(
    ':leave',
    [
      animate(
        '600ms {{ delay }} ease-in-out',
        style({ opacity: 0, transform: 'translateY(5px)' }),
      ),
    ],
    { params: { delay: '0s' } },
  ),
]);
