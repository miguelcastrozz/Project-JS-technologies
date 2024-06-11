import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import TransactionHistory from './components/TransactionHistory';
import ExpenseChart from './components/ExpenseChart';
import styled from 'styled-components';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  isIncome: boolean;
  date: Date;
}

const AppContainer = styled.div`
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh; /* Asegura que el contenedor ocupe el alto completo de la ventana */
    display: flex; /* Establece un contenedor flex */
    flex-direction: column; /* Alinea los elementos hijos en una columna */
`;

const Title = styled.h1`
    margin-bottom: 2rem;
    color: #e7eaf0;
    text-align: center;
`;

const ContentContainer = styled.div`
    margin: 1rem auto;
    max-width: 800px;
    flex-grow: 1; /* Hace que el contenedor de contenido se expanda para ocupar todo el espacio disponible */
`;

const App: React.FC = () => {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddExpense = (description: string, amount: number, isIncome: boolean) => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      description,
      amount,
      isIncome,
      date: new Date(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <AppContainer>
      <ContentContainer>
        <Title>Control de gastos e ingresos</Title>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <TransactionHistory transactions={transactions} />
        <ExpenseChart transactions={transactions} />
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
