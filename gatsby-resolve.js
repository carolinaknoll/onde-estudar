const path = require('path')

module.exports = {
  resolve: {
    modules: [path.join(__dirname), path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.css'],
    alias: {
      _atoms: path.resolve(__dirname, 'src', 'components', 'atoms'),
      _molecules: path.resolve(__dirname, 'src', 'components', 'molecules'),
      _components: path.resolve(__dirname, 'src', 'components'),
      _config: path.resolve(__dirname, 'src', 'config'),
      _images: path.resolve(__dirname, 'src', 'images'),
      _templates: path.resolve(__dirname, 'src', 'components', 'templates'),
      _pages: path.resolve(__dirname, 'src', 'pages'),
      _styles: path.resolve(__dirname, 'src', 'styles'),
      _utils: path.resolve(__dirname, 'src', 'utils'),
      _data: path.resolve(__dirname, 'src', 'data'),
    },
  },
}
