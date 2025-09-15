'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './CryptoSlider.css';

type Crypto = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  icon: string;
};

const CryptoSlider = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano,solana,polkadot,avalanche-2,polygon'
        );
        const data = await response.json();

        const formattedData: Crypto[] = data.map((coin: any) => ({
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          price: `$${coin.current_price.toLocaleString()}`,
          change: `${coin.price_change_percentage_24h.toFixed(2)}%`,
          isPositive: coin.price_change_percentage_24h >= 0,
          icon:
            coin.symbol === 'btc'
              ? '₿'
              : coin.symbol === 'eth'
              ? 'Ξ'
              : coin.symbol === 'bnb'
              ? 'BNB'
              : coin.symbol === 'ada'
              ? '₳'
              : coin.symbol === 'sol'
              ? '◎'
              : coin.symbol === 'dot'
              ? '●'
              : coin.symbol === 'avax'
              ? '🔺'
              : coin.symbol === 'matic'
              ? '⬣'
              : '₿',
        }));

        setCryptoData(formattedData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  // Duplicate data for smooth infinite scroll
  const duplicatedData = [...cryptoData, ...cryptoData];

  return (
    <div className="crypto-slider-container">
      <div className="crypto-slider-track">
        {duplicatedData.map((crypto, index) => (
          <div key={index} className="crypto-card-mini">
            <div className="crypto-info">
              <div className="crypto-icon">{crypto.icon}</div>
              <div className="crypto-details">
                <span className="crypto-symbol">{crypto.symbol}</span>
                <span className="crypto-name">{crypto.name}</span>
              </div>
            </div>
            <div className="crypto-price-info">
              <span className="crypto-price">{crypto.price}</span>
              <div
                className={`crypto-change ${
                  crypto.isPositive ? 'positive' : 'negative'
                }`}
              >
                {crypto.isPositive ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                <span>{crypto.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoSlider;
