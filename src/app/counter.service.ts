export class CounterService {
  toInactiveCounter = 0;
  toActiveCounter = 0;

  userStatusChanged(changedToInactive: boolean) {
    changedToInactive ? this.toInactiveCounter++ : this.toActiveCounter++;
    console.log('To Inactive Counter: ' + this.toInactiveCounter);
  }
}