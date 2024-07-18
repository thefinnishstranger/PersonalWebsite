const ContactPage: React.FC = () => {
    const submit = () => {
        console.log('hello');
    }
    return (
        <form onSubmit={submit}>
            <div>
                <p>Your name</p>
                <input placeholder="First name" required/>
                <input placeholder="Last name" required/>
            </div>
            <div>
                <p>Your email</p>
                <input placeholder="email" type="email" required/>
            </div>
            <div>
                <p>Your message</p>
                <input placeholder="message" required/>
            </div>
            <button type="submit">Contact Me</button>
        </form>
    )
}

export default ContactPage