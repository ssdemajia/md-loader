const path = require('path');

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    { loader: "html-loader" },
                    {
                        loader: "md-loader",
                        options: {
                            sb: 123
                        }
                    }
                ]
            }
        ]
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, '..', 'node_modules'), 
            path.resolve(__dirname, '..', '..')
        ]
    }
}