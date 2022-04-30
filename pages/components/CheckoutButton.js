import Link from 'next/link'

export default function RefCodeButton() {
    return (
        <div>
            <Link href="/checkout">
                <div>
                    <h5>
                        <div className='d-flex justify-content-center'>
                            <button className="btn-primary btn-lg btn-block">Get warm Cookies now&#128666;</button>
                        </div>
                        <div className="alert alert-warning emailPadding" role="alert">
                            We&apos;re running out of stock!
                        </div>
                    </h5>
                    
                </div>
            </Link>
        </div>
    )
}