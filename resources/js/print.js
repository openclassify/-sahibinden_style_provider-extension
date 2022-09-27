
function printAd(){
    var divContents = document.getElementById("print").innerHTML;
    var printWindow = window.open('', '', 'height=550, width=800');

    printWindow.document.write(divContents);

    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    },500)
    printWindow.focus();
}
