export default function Contact() {
    return(
        <div className="h-[1000px] bg-blue-500  contact-container">
            <h3 className="text-6xl" id="contact"> Contact Form</h3>
            <form className="flex flex-col items-center justify-center h-full">
                <label className="text-white" for="name">Name:</label>
                <input className="text-white text-xl bg-blue-900 rounded-lg p-2" type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}