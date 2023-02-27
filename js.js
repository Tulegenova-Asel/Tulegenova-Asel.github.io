		// Create an array of fictional book titles
		const books = [
			{
				title: "The Hunger Games",
				author: "Suzanne Collins",
				year: 2008,
				pages: 374
			},
			{
				title: "1984",
				author: "George Orwell",
				year: 1949,
				pages: 328
			},
			{
				title: "To Kill a Mockingbird",
				author: "Harper Lee",
				year: 1960,
				pages: 324
			},
			{
				title: "Pride and Prejudice",
				author: "Jane Austen",
				year: 1813,
				pages: 279
			},
			{
				title: "The Hobbit",
				author: "J.R.R. Tolkien",
				year: 1937,
				pages: 310
			}
		];

		// Calculate the average page count
		let totalPageCount = 0;
		for (let i = 0; i < books.length; i++) {
			totalPageCount += books[i].pages;
			// const bookListItem = document.createElement("li");
			// bookListItem.innerHTML = `<strong>${books[i].title}</strong> by ${books[i].author}, published in ${books[i].year}, ${books[i].pages} pages`;
			// document.getElementById("bookList").appendChild(bookListItem);
		}
		const averagePageCount = totalPageCount / books.length;

		// Display the results on the website
		document.getElementById("averagePageCount").innerHTML = averagePageCount.toFixed(0);


