import { createClient } from '@supabase/supabase-js'

export default async function (req, res) {
    

    const { data, error } = await supabaseClient
    .from('Product Test')
    .insert([
        {
            item: formData.product, 
            price: formData.price,
            quantity: formData.quantity,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            notes: formData.notes,
            discountCode: formData.discountCode,
            refCode: refCode,
            item: formData.item
        },
    ])

    router.push({
        pathname: '/out-of-stock', 
        query: {
            item: formData.product,
            quantity: formData.quantity,
            refCode: refCode
        }
    })
}