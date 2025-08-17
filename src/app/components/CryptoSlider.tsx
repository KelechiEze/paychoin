import { TrendingUp, TrendingDown } from 'lucide-react';
import './CryptoSlider.css';

const CryptoSlider = () => {
  const cryptoData = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '$67,234.56',
      change: '+2.45%',
      isPositive: true,
      icon: '₿'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$3,456.78',
      change: '+1.23%',
      isPositive: true,
      icon: 'Ξ'
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: '$345.67',
      change: '-0.89%',
      isPositive: false,
      icon: 'BNB'
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: '$0.456',
      change: '+3.45%',
      isPositive: true,
      icon: '₳'
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: '$123.45',
      change: '+5.67%',
      isPositive: true,
      icon: '◎'
    },
    {
      symbol: 'DOT',
      name: 'Polkadot',
      price: '$12.34',
      change: '-1.23%',
      isPositive: false,
      icon: '●'
    },
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      price: '$34.56',
      change: '+2.89%',
      isPositive: true,
      icon: '🔺'
    },
    {
      symbol: 'MATIC',
      name: 'Polygon',
      price: '$0.89',
      change: '+4.12%',
      isPositive: true,
      icon: '⬣'
    }
  ];

  // Duplicate the array for seamless infinite scroll
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
              <div className={`crypto-change ${crypto.isPositive ? 'positive' : 'negative'}`}>
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