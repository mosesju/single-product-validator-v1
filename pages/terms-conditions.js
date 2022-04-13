import styles from '../styles/OutOfStock.module.css'
import Head from 'next/head'
import Link from 'next/link'

function OutOfStock() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>

            </Head>
            <main className={styles.main}>
                <h2>Sorry! We&apos;re out of Stock</h2>
                {/* <h2>Sorry! We're updating our content</h2> */}
                <p className="lead">restoking again in 22 day</p>
            </main>
        </div>
    );
}

export default OutOfStock;