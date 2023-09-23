const getNama = (search) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const names = [
                "Abigail", "Alexandra", "Alison",
                "Amanda", "Angela", "Bella",
                "Carol", "Caroline", "Carolyn",
                "Deirdre", "Diana", "Elizabeth",
                "Ella", "Faith", "Olivia", "Penelope"
            ];
            const foundNames = names.filter((name) => {
                return name.toLowerCase() === search.toLowerCase();
            });

            if (foundNames.length > 0) {
                resolve(foundNames);
            } else {
                reject(new Error("Maaf, nama tidak ditemukan dalam daftar tamu"));
            }
        }, 2000);
    });
}

getNama("Budi")
    .then((foundNames) => {
        console.log(`Nama ${foundNames} ada di daftar tamu`);
    })
    .catch((error) => {
        console.log(error.message);
    });
