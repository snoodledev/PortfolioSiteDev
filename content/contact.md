---
title: "Contact"
url: "/contact"
placeholder: "Contact me!"
summary: "contact"
---

<form
    class="contact-form"
    action="https://formspree.io/f/movapbzn"
    method="POST"
>
    <label class="contact-form">
        Your email:
        <input type="email" name="email" class="contact-form">
    </label>
    <label class="contact-form">
        <br><br>Your message:
        <textarea name="message" class="contact-form" rows="5"></textarea>
    </label>
    <div id="contact-button-div">
        <button type="submit" class="button" id="contact-button">Send</button>
    </div>
</form>
