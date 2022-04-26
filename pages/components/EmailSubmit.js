import { createClient } from '@supabase/supabase-js'
import { useForm } from "react-hook-form";

export default function EmailSubmit() {
    const { register, handleSubmit } = useForm();


    const onSubmit = async (formData) => {
        const supabaseClient = createClient(supabaseUrl, supabaseKey)

        const { data, error } = await supabaseClient
        .from('Product Test')
        .insert([
            {
                email: formData.email,
            },
        ])

        router.push(`/out-of-stock`)

    }
    return (
        
        <div className="emailPadding">
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor="email">Email</label>
                <div className="row">
                    <div className="col-md-8">
                        <input 
                            {...register("email", { required: true, maxLength: 20, // pattern: 
                                // {
                                //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                //     message: "invalid email address"
                                // } 
                            })} 
                            className="form-control col-md-9"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="col-md-3">
                        <input className="btn btn-primary" type="submit" value="Your Cookie Updates"/>
                    </div>
                </div>
            </form>
        </div>
    )
}