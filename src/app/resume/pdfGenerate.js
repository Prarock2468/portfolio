'use client'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import AllComponent from "./allComponent";
import { useRef } from "react"
const PDFGenerator = () => {
  const contentRef = useRef();

  const handleDownloadPDF = async () => {
    const content = contentRef.current;

    // Capture the content as an image using html2canvas
    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    // Set up the PDF with landscape orientation and A4 size
    const pdf = new jsPDF("landscape", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate dimensions for the image
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const aspectRatio = imgHeight / imgWidth;
    const width = pageWidth;
    const height = pageWidth * aspectRatio;

    // Add the image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    // Save the PDF as "resume.pdf"
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <button onClick={handleDownloadPDF} className="download-btn">
        Download PDF
      </button>
      <AllComponent ref={contentRef} />
    </div>
  );
};

export default PDFGenerator;
