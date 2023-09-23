const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
    // .then((pesan) => {
    //     console.log("sekarang hari", pesan)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })
}
try{
    cekHariKerja("senin")
        .then((pesan) => {
            console.log(`hari ${pesan} saatnya kerja`)
        }).catch((error) => {
            console.log(error.message)
        })
} catch (error){
    console.log("Error bro : ", error)
}


