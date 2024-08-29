const getAllOrders = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7201/api/orders/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      return response.json();
    })
    .then((data) => {
      const ordersWithPaymentType = data.map((order) => ({
        ...order,
        paymentType: order.paymentType ? order.paymentType.category : null,
      }));
      resolve(ordersWithPaymentType);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7201/api/orders/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/orders/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const addProductToOrder = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7201/api/orders/addProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch(reject);
});

const removeProductFromOrder = (orderId, productId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/orders/${orderId}/products/${productId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      resolve(response.json());
    })
    .catch(reject);
});

const getOrderProducts = (orderId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/orders/${orderId}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export {
  getSingleOrder,
  getAllOrders,
  createOrder,
  updateOrder,
  addProductToOrder,
  getOrderProducts,
  removeProductFromOrder,
};
