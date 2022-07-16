import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalId);
    console.log("intervalo destruido");
  };
});

/**
 * 1- Caseteo multiple
 * 2-  tamb es un observer
 * 3- Next, error, complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);
// const subs1 = intervalo$.subscribe((random) => console.log("sub1", random));
// const subs2 = intervalo$.subscribe((random) => console.log("sub2", random));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3500);
