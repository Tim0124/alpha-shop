import { createContext } from "react";

export const FormContext = createContext([
  {
    name: 'cardName',
    label:'持卡人姓名',
    default: 'John Doe',
    value:''
  },
  {
    name:'cardNumber',
    label:'卡號',
    default:'1111 2222 3333 4444',
    value:''
  },
  {
    name:'cardDate',
    label:'有效期限',
    default:'MM/YY',
    value:''
  },
  {
    name:'cardCode',
    label:'CVC/ CCV',
    default:'123',
    value:''
  }
])