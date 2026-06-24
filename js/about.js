const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {

  header.addEventListener("click", () => {

    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }

  });

});