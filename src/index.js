module.exports = function getZerosCount(number) {
    let i = 1;
    let Zerozcount = 1;
    let AllZeroz = 0;

    while (Zerozcount >= 1){
        Zerozcount = number / Math.pow(5,i);
        AllZeroz = Math.floor(Zerozcount + AllZeroz);
    }

   return Math.floor(AllZeroz);
};
