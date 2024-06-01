/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Create a variable to hold your NFTs
let nftCollections = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, phone_number, address,  mother_name, father_name, brother_name) {
    let NFT = {
        name: name,
        phone_number: phone_number,
        address: address,
        mother_name: mother_name,
        father_name: father_name,
        brother_name: brother_name,
       
    };
    nftCollections.push(NFT);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollections.length; i++) {
        console.log("\n\n==================== NFT DETAILS ====================\n\n");
        console.log("Name: " + nftCollections[i].name);
        console.log("phone_number: " + nftCollections[i].phone_number);
        console.log("address: " + nftCollections[i].address);
        console.log("mother_name: " + nftCollections[i].mother_name);
        console.log("father_name: " + nftCollections[i].father_name);
        console.log("brother_name: " + nftCollections[i].brother_name);
        console.log("\n\n====================================================\n");
    }
}

// Print the total number of NFTs we have created to the console
function getTotalSupply() {
    console.log("Total NFTs have Created: " + nftCollections.length);
}

// Call your functions below this line
mintNFT("Mo.Asim", "8875585619", "v.p.o. nua", "amina", "julfikar", "Mo.Nadir");
mintNFT("Bhaviya Saini", "8699932519", "amritsar", "jyoti", "karnail singh", "shivam");
mintNFT("Piyush Goyal", "7742639394", "bhatinda", "Anil", "shanti", "plak");
mintNFT("Mo.Nadir", "7357795161", "v.p.o.nua", "amina", "julfikar", "Asim");

listNFTs();
getTotalSupply();
