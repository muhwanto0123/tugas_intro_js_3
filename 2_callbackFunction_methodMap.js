const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [
            "january", "february", "Maret", 
            "April", "Mei", "Juni", "Juli", 
            "Agustus", "September", "Oktober", 
            "November", "Desember"
        ]
        if (!error){
            callback(null, month)
        }else{
            callback(new Error("Sorry Data Not Found"))
        }
    }, 4000)
}
const show_month = (error, showMonth) => {
    const show = showMonth.map(a => a)
    if(error){
        console.log(`Mohon maaf telah terjadi Error : (${error})`)
    }else{
        console.log("nama nama bulan : ",show)
    }
}
getMonth(show_month)