function formatRupiah(price){
    let result = price.toLocaleString('id-ID')
    return `Rp ${result}.00`
}

module.exports = formatRupiah