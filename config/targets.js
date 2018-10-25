let browsers = [
  '> 1%',
  'last 5 versions',
];

if (process.env.EMBER_ENV === 'test') {
  browsers = [
    '> 2%',
    'last 1 Chrome versions',
    'last 1 Firefox versions'
  ];
}

module.exports = { browsers };
