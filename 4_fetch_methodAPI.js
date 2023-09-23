// URL REST API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Menggunakan fetch untuk mengambil data dari API
fetch(apiUrl)
  .then((response) => {
    // Memeriksa apakah responsenya berhasil (kode status 200 OK)
    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }
    // Mengubah responsenya menjadi JSON
    return response.json();
  })
  .then((data) => {
    // Mendapatkan semua nama dari data
    const names = data.map((user) => user.name);
    // Menampilkan nama-nama ke console
    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  })
  .catch((error) => {
    console.error('Terjadi kesalahan:', error);
  });
