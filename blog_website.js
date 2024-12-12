document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentSection = document.getElementById("comment-section");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const commentText = commentInput.value.trim();
        if (commentText === "") {
            alert("Please write a comment before submitting.");
            return;
        }

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = commentText;
        commentSection.appendChild(commentDiv);

        commentInput.value = "";
    });
});
