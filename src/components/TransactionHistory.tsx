import React from 'react';
import styled from 'styled-components';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  isIncome: boolean;
  date: Date;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const StyledTable = styled.table`
    background-color: #161b22;
    border-color: #30363d;
    color: #c9d1d9;
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: #21262d;
    color: #c9d1d9;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #0d1117;
    }

    &:hover {
        background-color: #21262d;
    }
`;

// Estilos para las celdas de la tabla
const TableData = styled.td`
    padding: 0.5rem;
    border: 1px solid #30363d;
`;

const TransactionHistory: React.FC<TransactionHistoryProps> = ({transactions}) => {
  return (
    <div className="mb-4">
      <StyledTable>
        <TableHead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </TableHead>
        <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.description}</TableData>
            <TableData style={{color: transaction.isIncome ? '#3fb950' : '#f85149'}}>
              {transaction.isIncome ? '+' : '-'} ${Math.abs(transaction.amount)}
            </TableData>
            <TableData>{transaction.date.toLocaleDateString()}</TableData>
          </TableRow>
        ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default TransactionHistory;
