import Document, { DocumentProps, Html, Main, NextScript } from "next/document"
import Head from "next/head"

export default class MyDocument extends Document<DocumentProps>{

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Acme&family=Noticia+Text:wght@400;700&family=Overpass:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body> 
            </Html>
            )
        }
        
    }