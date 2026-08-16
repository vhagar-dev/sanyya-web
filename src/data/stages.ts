export type Stage = {
  id: string;
  num: string;
  title: string;
  dropdownTitle: string;
  line: string;
};

export const stages: Stage[] = [
  {
    id: "buy",
    num: "01",
    title: "Someone needs to buy something",
    dropdownTitle: "Someone needs to buy something",
    line: "Requests route to the right approver.",
  },
  {
    id: "order",
    num: "02",
    title: "The vendor needs a PO",
    dropdownTitle: "The vendor needs a PO",
    line: "Approved requests become real purchase orders.",
  },
  {
    id: "receive",
    num: "03",
    title: "Did we actually get it?",
    dropdownTitle: "Did we actually get it?",
    line: "Packing slips captured and matched.",
  },
  {
    id: "pay",
    num: "04",
    title: "Can we pay this?",
    dropdownTitle: "Can we pay this?",
    line: "Invoices read, matched, and flagged.",
  },
  {
    id: "spend",
    num: "05",
    title: "What did we spend?",
    dropdownTitle: "What did we spend?",
    line: "Live spend, contract balances, and answers.",
  },
];
