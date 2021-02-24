const path = require('path'); //Utilizando o Path
const { Module } = require('webpack'); 


module.exports = 
{
    entry:{
        home:'./src/home.js', //Arquivo de entrada 
    },
    output:{ //Config arquivo de saida
        filename: 'assets/js/[name].bundle.js', //nome do arquivo
        path:path.resolve(__dirname, 'dist') //nome da pasta
    },
    mode: 'production', //Este modo permite um código mais comprimido
    module:{//config de modulo de css, trazendo o style-loader e css-loader
        rules:
        [
            {
                test:/\.css$/, //Informando o final do arquivo(extensao)
                use:['style-loader', 'css-loader'] //Ferramentas a serem utilizadas

            },
            { 
                test:/\.(jpg|png|gif|svg)$/, 
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name:'assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.(scss)$/, 
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}

//O style loader e css-loader devem ser instalados através do cmd