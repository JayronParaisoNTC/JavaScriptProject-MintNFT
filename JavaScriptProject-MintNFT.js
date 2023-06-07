// create a variable to hold your NFTs
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, description, imageUrl) {
  // Create an NFT object with metadata
  const nft = {
    name: name,
    description: description,
    imageUrl: imageUrl
  };

  // Store the NFT in the variable nftCollection
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image URL: " + nft.imageUrl);
    console.log("-----------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// call your functions below this line

// Minting three NFTs and adding them to the collection
mintNFT("NFT 1", "Description for NFT 1", "https://example.com/nft1.jpg");
mintNFT("NFT 2", "Description for NFT 2", "https://example.com/nft2.jpg");
mintNFT("NFT 3", "Description for NFT 3", "https://example.com/nft3.jpg");

// Listing the metadata of all NFTs in the collection
listNFTs();

// Displaying the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
