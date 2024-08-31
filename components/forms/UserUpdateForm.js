import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateUser } from '../../api/usersData';

function UserUpdateForm({ obj }) {
  const [formData, setFormData] = useState({
    uid: '',
    firstName: '',
    lastName: '',
    userName: '',
    address: '',
    email: '',
    Seller: false,
  });

  const router = useRouter();

  useEffect(() => {
    setFormData(obj);
  }, [obj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData.id, formData)
      .then((updatedUser) => {
        router.push('/users');
        console.log('User updated:', updatedUser);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      isSeller: checked,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" required placeholder="Enter your First Name" value={formData.firstName} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName" required placeholder="Enter your Last Name" value={formData.lastName} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="userName" required placeholder="Enter your Username" value={formData.userName} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" required placeholder="Enter your Address" value={formData.address} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" required placeholder="Enter your Email" value={formData.email} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicIsSeller">
        <Form.Check type="checkbox" label="Are you a seller?" checked={formData.seller} onChange={handleCheckboxChange} />
      </Form.Group>
      <Button variant="danger" className="user-card-button" type="submit">
        Submit
      </Button>
    </Form>
  );
}

UserUpdateForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    seller: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserUpdateForm;
