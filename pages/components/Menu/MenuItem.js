import Link from 'next/link'

export default function MenuTitle( { item } ) {
    return (
        <div>
            <Link href={`/checkout?item=${item}`}>
             <h5 className='lead'>{ item }</h5>
            </Link>
        </div>
    )
}