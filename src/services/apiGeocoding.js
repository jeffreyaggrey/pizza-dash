export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  // The data from the API is an object with the following properties: city, countryName, locality, postcode, principalSubdivision
  const data = await res.json();
  return data;
}
