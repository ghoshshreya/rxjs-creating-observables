import { from, of, interval, take, fromEvent, takeUntil } from 'rxjs';

/*----------1. Using of----------*/
let source1 = of([1, 2, 3]);
source1.subscribe((x) => console.log(x));

let source2 = of('Hello World');
source2.subscribe((x) => console.log(x));

/*----------2. Using from----------*/
let source3 = from([1, 2, 3]);
source3.subscribe((x) => console.log(x));

let source4 = from('Hello World');
source4.subscribe((x) => console.log(x));

/*----------3. Using interval operator----------*/
let source5 = interval(1000).pipe(take(5));
source5.subscribe((x) => console.log(x));

/*----------4. Using fromEvent operator----------*/
let btn = document.querySelector('#my-btn');
let source6 = fromEvent(btn, 'click');
source6.subscribe((x) => console.log('clicked'));
