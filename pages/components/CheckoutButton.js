import Link from 'next/link'
import styles from '../../public/styles/components/CheckoutButton.module.css'


export default function RefCodeButton() {
    return (
        <div>
            <Link href="/checkout">
                <div>
                    <h5>
                        <div className={`d-flex justify-content-center ${styles.checkoutButtonPadding} `}>
                            <button className="btn-primary btn-lg btn-block">Get warm Cookies now&#128666;</button>
                        </div>
                    </h5>
                    
                </div>
            </Link>
        </div>
    )
}