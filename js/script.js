$(document).ready(function () {
    $("#myForm").submit(function () {
      var mySearch = $("#books").val();
      if (mySearch == "") {
        alert("Please enter the book your wish to search in the field first");
      } else {
        var image = "";
        var title = "";
        var author = "";
        var publisher = "";
        var publishedDate = "";
        var description = "";
        var pageCount = "";
        var categories = "";
        var preview = "";
        var url = "";
  
        // set the API Variable
        var googleAPI =
          "https://www.googleapis.com/books/v1/volumes?q=" + mySearch;
        $.get(googleAPI, function (response) {
          console.log(response);
  
          // Loop through all the items one-by-one
          response.items.map((book) => {
  
            // set the items from the response object
            var items = book;
            image = items.volumeInfo.imageLinks.thumbnail;
            title = items.volumeInfo.title;
            author = items.volumeInfo.authors;
            publisher = items.volumeInfo.publisher;
            publishedDate = items.volumeInfo.publishedDate;
            description = items.volumeInfo.description;
            pageCount = items.volumeInfo.pageCount;
            categories = items.volumeInfo.categories;
            preview = items.volumeInfo.previewLink;
            url = items.volumeInfo.infoLink;
  
            // Set the book details in the div
            document.getElementById("result").innerHTML += `
            <div class="container-fluid text-center" id="book">
            <div>
              <img src=${image} alt="book cover "/>
            </div>
            <div>
              <h5>Book Title: </h5>${title}
            </div>
            <div>
              <h5>Author:</h5>${author}
            </div>
            <div>
              <h5>Publisher:</h5>${publisher}
            </div>
            <div>
              <h5>Originally Published On:</h5>${publishedDate}
            </div>
            <div>
              <h5>Description:</h5>${description}
            </div>
            <div id="pages">
              <h5>Number of Pages:</h5>${pageCount}
            </div>
            <div>
              <h5>Category: </h5>${categories}
            </div><br>
            <div id="preview">
              <button class="btn"><a href="${preview}">Preview</a></button>
            </div><br>
            <div id="info">
              <button class="btn"><a href="${url}">Read More</a></button>
            </div>
          </div
            `;
          })
  
        });
      }
      return false;
    });
  });
  