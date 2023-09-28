
# React Form Handling Challenge

Please watch the [video](https://www.youtube.com/watch?v=tIdNeoHniEY) before attempting this challenge. Now it's time to put your skills to the test with this form handling challenge.

## Challenge Instructions

Your task is to create a form with basic validation that displays red text below the input field if the user has not entered any value. 

The video shows many different ways you can handle forms in React . Pick ***one*** and give it a go!

***Try to attempt it yourself*** by only using the video as a guide but if you get stuck, use these basic instructions below to help you. 


1. Create a React functional component to represent the form.

2. Inside the component, initialize a state variable using `useState` to track the value entered by the user.
xs

3. Render a Form and add an input field and label within the form, Add as many as you see fit. Bind the value of the input field to the state variable you just created using the `value` attribute. Also, attach an `onChange` event handler to capture user input.

4. Create a function called `handleChange`. Inside handleChange call `setInput` and pass it the `event.target.value`. If you have multiple inputs make sure you keep the other tracked inputs and dont override it. Use the video to figure out how to handle this!

5. Create a button within the form and pass a function called `handleSubmit` to the onClick or onSubmit event handler. You can define the `handleSubmit` function to perform any desired actions when the button is clicked.

5. In the `handleSubmit` event handler, prevent the default form submission behavior using `event.preventDefault()`.

6. Perform the following validation within the `handleSubmit` event handler:
   - Check if the input value is empty. If so, set a state variable to indicate that an error occurred.
   - If the input value is not empty, display a success message or perform any additional actions you desire.
   - `console.log()` the final submission object.

7. Display the error message below the input field when the user has not entered anything. Use red text or any other visual indication to highlight the error.

9. Style the form and input field using CSS to enhance the visual appearance. Feel free to be creative and apply your own styling preferences.

10. Test your form by entering values, submitting the form, and observing the error message behavior and the console logs.

## Submission

Once you have completed the challenge, commit your code and submit the link to your repository or share it with your instructor for review.

## Tips

- Use the `useState` hook to manage the form state and keep track of user input.

- Utilize the `onChange` event handler to capture user input and update the state accordingly.

- Implement basic form validation by checking for empty input in the `onSubmit` event handler.

- Display the error message below the input field using CSS to highlight the validation error.

- Apply CSS styles to make your form visually appealing and user-friendly.

- Test your form thoroughly to ensure it behaves as expected in different scenarios.

Good luck with the challenge! If you have any questions or need assistance, don't hesitate to reach out to your instructor or fellow learners.