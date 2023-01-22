import { MediaRenderer, useContract, useNFTs } from "@thirdweb-dev/react";

export default function CollectionRenderNFTs() {
  // First, connect to your smart contract like this:
  const { contract } = useContract("0xaFf593c5d6787C233a1EE0A81489eA804D1D2331");

  const { data: nfts } = useNFTs(contract, {
    start: 0,
    count: 100,
  });

  // Then, map through the nfts and render them like this:
  return (
    <div className="grid">
      {nfts?.map((nft) => (
        <MediaRenderer
          className="card"
          key={nft.metadata.id}
          src={nft.metadata.image}
          alt={String(nft.metadata.name)}
        />
      ))}
    </div>
  );
}