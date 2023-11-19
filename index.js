// BT1
// let daySoChan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let soLuong = demSoChan(daySoChan);
// function demSoChan(daySoChan) {
//     let soLuong = 0;
//     for (let i = 0; i < daySoChan.length; i++) {
//         if (daySoChan[i] % 2 === 0) {
//             soLuong++;
//         }
//     }
//     return soLuong;
// }
// console.log("Tổng số lượng số chẵn là: " + soLuong);

//BT2
// function demSoLuongPhanTu(mang, giaTriCanDem) {
//     let soLuong = 0;
//     for (let i = 0; i < mang.length; i++) {
//         if (mang[i] === giaTriCanDem) {
//             soLuong++;
//         }
//     }
//     return soLuong;
// }
// let mang = [1, 2, 3, 4, 2, 5, 2, 6, 7, 8, 9, 12, -1, 4, 8, 1, 10];
// let giaTriCanDem = +prompt("Nhập giá trị a: ");
// let soLuong = demSoLuongPhanTu(mang, giaTriCanDem);
// console.log(`Số lượng phần tử có giá trị bằng ${giaTriCanDem} trong mảng là: ${soLuong}`);

// BT3
// let mang = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// const primeNumbers = [];
// let totalPrimeSum = 0;
// mang.forEach(num => {
//     if (isPrime(num)) {
//         primeNumbers.push(num);
//         totalPrimeSum += num;
//     }
// });
// console.log("Các số nguyên tố trong mảng:", primeNumbers);
// console.log("Tổng các số nguyên tố trong mảng:", totalPrimeSum);

// BT4
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let totalPrimeSum = 0;

for (let i = 2; i < 500; i++) {
    if (isPrime(i)) {
        totalPrimeSum += i;
    }
}

console.log("Tổng các số nguyên tố nhỏ hơn 500:", totalPrimeSum);

