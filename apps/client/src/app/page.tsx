'use client';

import { useState } from 'react';
import './page.css';

const data = [
  { id: 1, title: 'Yoon arrested by January 31?', volume: '21,000,000' },
  { id: 2, title: 'TikTok banned in the US before May 2025?', volume: '1,750,000' },
  { id: 3, title: 'Israel x Hamas ceasefire by January 31?', volume: '495,000,000' },
  { id: 4, title: 'What price will Bitcoin hit in January?', volume: '9,000,000' },
  { id: 5, title: 'Elon Musk # of tweets January 10-17?', volume: '12,000' },
  { id: 6, title: 'Next President of Greece?', volume: '1,500,000' },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="main-menu-page">
      <div className="main-menu-section">
        <div className="main-menu-container">
          <div
            className={`main-menu-item ${selectedItem === 'All' ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick('All')}
          >
            <p>All</p>
          </div>
          <div
            className={`main-menu-item ${selectedItem === 'Top' ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick('Top')}
          >
            <p>Top</p>
          </div>
          <div
            className={`main-menu-item ${selectedItem === 'Trending' ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick('Trending')}
          >
            <p>Trending</p>
          </div>
          <div
            className={`main-menu-item ${selectedItem === 'New' ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick('New')}
          >
            <p>New</p>
          </div>
          <div
            className={`main-menu-item ${selectedItem === 'Other' ? 'selected' : ''}`}
            onClick={() => handleMenuItemClick('Other')}
          >
            <p>Other</p>
          </div>
        </div>

        <div className="main-wallet-container">
          <p>Please Connect Your Wallet First!</p>
        </div>
      </div>

      <div className="main-box-container">
        {data.map((item) => (
          <div className="main-box-item" key={item.id}>
            <div className="main-box-image">
              image
            </div>
            <h3>{item.title}</h3>
            <div className="main-box-tail">
              <div className="main-box-active">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#16166D" className="bi bi-suit-heart" viewBox="0 0 16 16">
                  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                </svg>
                <div className="main-box-bet">
                  Go Bet
                </div>
              </div>
              <div className="main-box-volume">
                <p>volume</p>
                {item.volume}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
