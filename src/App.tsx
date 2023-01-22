import { ConnectWallet } from "@thirdweb-dev/react";
import NFTCollectionContract from "./components/CollectionContract";
import CollectionRenderNFTs from "./components/MediaRenderer";
import "./styles/Home.css";

export default function Home() {

  return (
    <div className="container">    
      <main className="main">
        <div className="grid">
          <a className="badge"
            href="https://thirdweb.com/ethereum/0xaFf593c5d6787C233a1EE0A81489eA804D1D2331?utm_source=contract_badge" target="_blank" rel="noreferrer">
            <img 
              src="https://badges.thirdweb.com/contract?address=0xaFf593c5d6787C233a1EE0A81489eA804D1D2331&chainId=1" alt="View Contract"
            />
          </a>
          <div className="contract">
            <NFTCollectionContract />
          </div>
          <h1 className="title">2022 Holiday Season</h1>
          <div className="connect">
            <ConnectWallet />
          </div>
        </div>
        <p className="description">
          Amazing AI artistry celebrating the 2022 Holidays in the Metaverse. These Non Fungible Tokens are already minted and being released to the public for collection. No royalty, no road maps, no memberships, just great holiday artistry for you to enjoy!
        </p>
        <div className="grid">
          <CollectionRenderNFTs />
        </div>
      </main>
    </div>
  );
}
