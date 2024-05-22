class Vehicle {
  make: string;
  private damages: string[];
  private _model: string;
  protected run: number;
  private price: number;

  set model(model: string) {
    this._model = model;
    this.price = 100;
  }

  get model() {
    return this._model;
  }

  addDamage(damage: string) {
    this.damages.push(damage);
  }
}

class EuroTruck extends Vehicle {
  setDamages(km: number) {
    this.run = km / 0.62;
  }
}

new Vehicle();
new EuroTruck();
