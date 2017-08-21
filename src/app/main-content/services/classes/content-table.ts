export class ContentTable {
  tableBody: Array<Row>;

  constructor(tableBody: Array<Row>) {
    this.tableBody = tableBody;
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
