const getAllProductTypes = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7201/api/producttypes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getProductTypeById = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7201/api/producttypes/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch product type. Please try again later.');
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error.message || 'An error occurred while fetching product type.');
    });
});

export {
  getAllProductTypes,
  getProductTypeById,
};
