 

  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
      const title = item.querySelector(".accordion-title");
      const content = item.querySelector(".accordion-content");
  
      title.addEventListener('click', () => {
          // Close all other accordion items
          accordionItems.forEach(i => {
              if (i !== item) {
                  i.classList.remove('active');
                  i.querySelector(".accordion-content").style.display = "none";
              }
          });
  
          // Toggle the current item
          item.classList.toggle('active');
          if (item.classList.contains('active')) {
              content.style.display = "block";
 
          } else {
              content.style.display = "none";
            
             
          }
      });
  });

 

 

    
 
 
  