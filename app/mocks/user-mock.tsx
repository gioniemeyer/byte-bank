interface UserAccount {
  id: number;
  first_name: string;
  last_name: string;
}

interface UserBalance {
  id: number;
  name: string;
  balance: number;
}

export const userMock: UserAccount[] = [
  {
    id: 1,
    first_name: "Joana",
    last_name: "da Silva Oliveira",
  }
]

export const balanceMock: UserBalance[] = [
  {
    id: 1,
    name: "Joana da Silva Oliveira",
    balance: 2700,
  },
  {
    id: 2,
    name: "Joana da Silva Oliveira",
    balance: 2850,
  },
  {
    id: 3,
    name: "Joana da Silva Oliveira",
    balance: 2950,
  },
  {
    id: 4,
    name: "Joana da Silva Oliveira",
    balance: 3000,
  },
  {
    id: 5,
    name: "Joana da Silva Oliveira",
    balance: 2500,
  },
];