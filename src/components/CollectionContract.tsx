import { useContract, useNFT, ThirdwebNftMedia } from "@thirdweb-dev/react";

export default function NFTCollectionContract() {
  // Get your NFT Collection using it's contract address
  const { contract } = useContract("0xaFf593c5d6787C233a1EE0A81489eA804D1D2331");

  // Load (and cache) the metadata for the NFT with token ID 0
  const { data: nft, isLoading } = useNFT(contract, 0);

  // Render the NFT metadata using the `ThirdwebNftMedia` component
  return (
    <div >
      {!isLoading && nft ? (
        <ThirdwebNftMedia
        className="contract"
        metadata={nft.metadata}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}