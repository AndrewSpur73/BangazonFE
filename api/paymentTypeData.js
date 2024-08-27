const getAllPaymentTypes = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7201/api/paymenttypes')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch(reject);
});

const getPaymentTypeById = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/paymenttypes/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPaymentTypes,
  getPaymentTypeById,
};
