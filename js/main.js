window.onload = () => {
    console.log("load main");

    function genPDF() {
        const doc = new jspdf.jsPDF({
            orientation: "landscape",
            unit: "in",
            format: [4, 2]
        });

        doc.text("Hello world!", 1, 1);
        doc.save("test.pdf");

    }




    let btPDF = document.querySelector("#pdf");

    btPDF.addEventListener("click", () => {
        console.log("pressed");
        genPDF();
    });
}