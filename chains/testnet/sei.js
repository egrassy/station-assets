module.exports = {
  chainID: 'atlantic-2',
  lcd: 'https://sei-testnet-api.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { usei: 0.01 },
  prefix: 'sei',
  coinType: '118',
  baseAsset: 'usei',
  name: 'Sei',
  icon: process.env.CF_PAGES_URL + '/img/chains/Sei.png',
  ibc: {
    fromTerra: 'channel-100',
    toTerra: 'channel-11',
  },
  channels: {
    'pisco-1': 'channel-11',
  },
  explorer: {
    address: 'https://sei.explorers.guru/account/{}',
    tx: 'https://sei.explorers.guru/transaction/{}',
    validator: 'https://sei.explorers.guru/validator/{}',
    block: 'https://sei.explorers.guru/block/{}',
  },
  tokens: [
    {
      token: 'usei',
      symbol: 'SEI',
      name: 'Sei',
      icon: process.env.CF_PAGES_URL + '/img/coins/Sei.png',
      decimals: 6,
    },
  ],
}
