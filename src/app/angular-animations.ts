import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition('* => *', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }),
      { optional: true },
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
  // transition('* => *', [
  //   query(':enter, :leave', style({
  //     position: 'absolute',
  //     width:'100%',
  //     top: 0,
  //     left: 0,
  //     bottom: 0,
  //     right: 0,
  //   }), { optional: true }),
  //   group([
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':enter', animateChild()),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-out', style({ transform: 'translateX(100%)' })),
  //     ], { optional: true }),
  //     query(':leave', animateChild()),
  //   ])
  // ])
]);
