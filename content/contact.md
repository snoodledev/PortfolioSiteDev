---
title: "Contact"
url: "/contact"
placeholder: "Contact me!"
summary: "contact"
---

Feel free to get in touch! Whether you have professional inquiries, questions, or just want to say hi, I'd love to hear from ya :)

<form
    class="contact-form"
    action="https://formspree.io/f/movapbzn"
    method="POST"
>
    <label class="contact-form">
        Email Address: &nbsp <input 
            type="email" name="email" class="contact-form" id="contact-form-email"
            placeholder="name@example.com">
    </label>
    <label class="contact-form">
        <br><br>
        <textarea name="message" class="contact-form" rows="5"
        placeholder="Enter your message here..."></textarea>
    </label>
    <div id="contact-button-div">
        <button type="submit" class="button" id="contact-button">Send</button>
    </div>
</form>
