

export async function submitUserData(formData) {
    try {
        const response = await fetch('api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return { success: true, message: 'Submission successful' };
        } else {
            return { success: false, message: 'Submission failed' };
        }
    } catch (error) {
        console.error('Error during submission:', error);
        return { success: false, message: `Error during submission: ${error.message}` };
    }
}
