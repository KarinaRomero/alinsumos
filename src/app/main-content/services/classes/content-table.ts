export class ContentTable {
  body: Array<Row>;

  constructor(tableBody: Array<Row>) {
    this.body = tableBody;
  }
}

export class Row {
  cellOne: any;
  cellTwo: any;

  constructor(one: any, two: any) {
    this.cellOne = one;
    this.cellTwo = two;
  }
}
