export interface StatementItemInterface {
  id?: number;
  date: string;
  type: string;
  value: number;
}

export const statementMock: StatementItemInterface[] = [
  {
    id: 1,
    date: "2022-11-18T12:00:00",
    type: "Depósito",
    value: 150,
  },
  {
    id: 2,
    date: "2022-11-21T12:00:00",
    type: "Depósito",
    value: 100,
  },
  {
    id: 3,
    date: "2022-11-21T12:00:00",
    type: "Depósito",
    value: 50,
  },
  {
    id: 4,
    date: "2022-11-21T12:00:00",
    type: "Transferência",
    value: 500,
  },
];