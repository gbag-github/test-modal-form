module.exports = {
  customSyntax: 'postcss-scss',
  extends: ['stylelint-config-xo-scss', 'stylelint-config-prettier'],
  rules: {
    'declaration-property-value-disallowed-list': {
      '/^border(?!-(width|spacing))/': ['/thin/', '/medium/', '/thick/', '0']
    },
    indentation: [2],
    'font-weight-notation': 'numeric',
    'selector-class-pattern': '^[a-z0-9]+((-|_)[a-z0-9]+)*$'
  }
};
