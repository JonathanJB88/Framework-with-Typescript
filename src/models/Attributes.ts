export class Attributes<T extends {}> {
  constructor(private data: T) {}
  // Get the value of a given prop
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  // Update the data object with the new values
  set = (update: T): void => {
    Object.assign(this.data, update);
  };
  // Get all the data
  getAll = (): T => {
    return this.data;
  };
}
