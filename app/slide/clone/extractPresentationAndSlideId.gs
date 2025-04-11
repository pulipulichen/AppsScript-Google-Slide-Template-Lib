function extractPresentationAndSlideId(url) {
  const presentationIdMatch = url.match(/\/d\/([^/]+)/);
  const slideIdMatch = url.match(/[#&]slide=id\.([^&]+)/);

  const presentationID = presentationIdMatch ? presentationIdMatch[1] : null;
  const slideID = slideIdMatch ? slideIdMatch[1] : null;

  return { presentationID, slideID };
}