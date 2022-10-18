function tes (hurufLagi:string,angkaTes:number,numberTes:number ) {

    let huruf = hurufLagi
    let angka = angkaTes
    let angkaLagi = numberTes

    let typescript = huruf + " " + angka + " " + angkaLagi
    return typescript
}

const hasil = tes('Learning Typescript is different than Javascript',9,19)
console.log(hasil)

