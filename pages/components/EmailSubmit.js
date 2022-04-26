export default function RefCodeButton() {
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