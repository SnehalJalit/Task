



const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener('click', () => {
        // Close all other accordion items
        accordionItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector(".accordion-content").classList.remove('show');
                i.querySelector(".accordion-title").setAttribute('aria-expanded', 'false');
            }
        });

        // Toggle the current item
        item.classList.toggle('active');
        const isActive = item.classList.contains('active');
        content.classList.toggle('show', isActive);
        title.setAttribute('aria-expanded', isActive);
    });
});

function FAQquestions() {

    var input = document.getElementById('searchBar').value.toLowerCase();

    // Get all the parent rows
    var rows = document.querySelectorAll('.ques-item');

    // Loop through all rows
    rows.forEach(function (row) {
        // Get all accordion items inside the current row
        var faqItems = row.querySelectorAll('.accordion-item');
        var rowHasMatch = false;  // Track if this row contains any matching accordion item
        faqItems.forEach(function (item) {
            var question = item.querySelector('.accordion-title').textContent.toLowerCase();
            if (question.includes(input)) {
                item.style.display = 'block';
                rowHasMatch = true;
            } else {

                item.style.display = 'none';
            }
        });

        if (rowHasMatch) {
            row.style.display = 'block';
            // console.log('Showing row:', row);
        } else {
            row.style.display = 'none';
            // console.log('Hiding row:', row);
        }
    });
}
