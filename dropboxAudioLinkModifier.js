function modifyDropboxLink(originalLink) {
  // Replace "&amp;" with "&"
  const correctedLink = originalLink.replace(/&amp;/g, "&");

  // Check if the link contains the "dl=0" parameter and hasn't been modified
  if (correctedLink.includes("dl=0") && !correctedLink.includes("dl=1")) {
    // Modify the link to set "dl=1"
    return correctedLink.replace("dl=0", "raw=1");
  }
  // If "dl=0" is not found or it has already been modified, return the corrected link
  return correctedLink;
}

// Replace the shared link with your Dropbox shared link
const dropboxSharedLink = "YOUR_DROPBOX_URL_HERE";
// Modify the Dropbox link
const modifiedLink = modifyDropboxLink(dropboxSharedLink);

// Set the modified link as the source for the audio element
const audioElement = document.getElementById("audioPlayer");
audioElement.src = modifiedLink;
