// Importamos las librerías y hooks necesarios
import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

// Definimos la interfaz de las propiedades del componente
interface ExpenseFormProps {
  onAddExpense: (description: string, amount: number, isIncome: boolean) => void;
}

// Definimos el componente ExpenseForm
const ExpenseForm: React.FC<ExpenseFormProps> = ({onAddExpense}) => {

  // Definimos los estados de los campos del formulario
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);

  // Definimos la función que se ejecuta al enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense(description, amount, isIncome);
    setDescription('');
    setAmount(0);
  };

  // Renderizamos el formulario
  return (
    <Form onSubmit={handleSubmit} style={{marginBottom: '1rem'}}>
      <Form.Group>
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Monto</Form.Label>
        <Form.Control type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Check type="checkbox" label="Ingreso" checked={isIncome} onChange={(e) => setIsIncome(e.target.checked)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Agregar
      </Button>
    </Form>
  );

};

// Exportamos el componente ExpenseForm para poder utilizarlo en otros componentes
export default ExpenseForm;
