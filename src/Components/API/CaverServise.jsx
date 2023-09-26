import Papa from "papaparse";
export default class SheetServce {
 static fetchData = () => {
    
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSVcRqJ3CKO6PlMDufdKs1ufCX8URr1Pkse4Jvg0qkGnaWrr6CX4Gge1uYh2NI2g42AE8-Iy35rQXNg/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        error: (error) => {
          console.error(error);
          this.setState(error)
        }
      }
    );
  }
}  