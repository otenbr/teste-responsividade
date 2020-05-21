import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Card from '../Card';
import Modal from '../Modal';

import { Container } from './styles';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

interface EmployeeApi {
  status: string;
  data: [
    {
      id: string;
      employee_name: string;
    },
  ];
}

interface Employee {
  id: string;
  name: string;
  target: number;
  total: number;
}

const CardList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalName, setModalName] = useState('');
  const [selectedId, setSelectedId] = useState('');

  const defaultTarget = 200;

  useEffect(() => {
    api.get('/employees').then(response => {
      const content = response.data as EmployeeApi;

      const list = content.data.map(employee => {
        return {
          id: employee.id,
          name: employee.employee_name,
          target: defaultTarget,
          total: 0,
        };
      });

      setEmployees(list);
    });
  }, []);

  function closeModal(): void {
    setModalVisible(false);
    setModalName('');
  }

  function addTotal(id: string, value: number): void {
    closeModal();

    const findEmployee = employees.find(employee => employee.id === id);

    if (findEmployee) {
      if (findEmployee.total + value > defaultTarget) {
        toast(`Valor não pode ser superior a ${formatValue(defaultTarget)}!`, {
          type: 'error',
          autoClose: 2000,
        });

        return;
      }

      findEmployee.total += value;
    }
  }

  function openModal(id: string, name: string): void {
    setSelectedId(id);
    setModalName(name);
    setModalVisible(true);
  }

  return (
    <Container>
      {employees.map(employee => (
        <Card
          key={employee.id}
          employee={employee}
          OpenModal={() => openModal(employee.id, employee.name)}
        >
          Card
        </Card>
      ))}

      <Modal
        visible={modalVisible}
        name={modalName}
        SelectAction={value => addTotal(selectedId, value)}
        CloseAction={() => closeModal()}
      />
    </Container>
  );
};

export default CardList;
