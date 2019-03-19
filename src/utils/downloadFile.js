export default function(downloadedFile) {
  // create a download anchor tag
  var downloadLink = document.createElement("a");
  downloadLink.target = "_blank";
  downloadLink.download = "";

  // convert downloaded data to a Blob
  var blob = new Blob([downloadedFile.data], { type: "application/pdf" });

  // create an object URL from the Blob
  var URL = window.URL || window.webkitURL;
  var downloadUrl = URL.createObjectURL(blob);

  // set object URL as the anchor's href
  downloadLink.href = downloadUrl;

  // append the anchor to document body
  document.body.appendChild(downloadLink);

  // fire a click event on the anchor
  downloadLink.click();

  // cleanup: remove element and revoke object URL
  setTimeout(() => {
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(downloadUrl);
  }, 500);
}
