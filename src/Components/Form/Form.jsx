const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.UserName.value)
        console.log(e.target.mail.value)
    }
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <form onSubmit={handleSubmit}>
                <fieldset className="p-5 border-2 rounded-2xl" placeholder="your information">
                    <legend className="px-2">Your information</legend>

                    <label className="text-xl" >Your Name</label><br />
                    <input name="UserName" className="border text-xl rounded-lg w-[250px] p-2" type="text" placeholder="Your name" /><br /><br />
                    
                    <label className="text-xl" htmlFor="Email">Your Email</label><br />
                    <input name="mail" className="border text-xl rounded-lg w-[250px] p-2" type="email" placeholder="Your Phone" /><br /><br />
                    
                    <label className="text-xl" htmlFor="Password">Your PassWord</label><br />
                    <input className="border text-xl rounded-lg w-[250px] p-2" type="Password" placeholder="Your PassWord" /><br /><br />
                    
                    <input className="bg-secendary w-full text-white text-xl py-2 rounded-xl" type="submit" placeholder="Submit"/>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;