import { BookModel, closeConnection } from "./database.js";


const seedDatabase = async () => {
    try {
        await BookModel.deleteMany();
        console.log('Deleted Books');

        const books = [
            {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                genre: 'Fiction',
                description: 'A classic novel about racial injustice and moral growth set in the American South.',
                read: true,
            },
            {
                title: '1984',
                author: 'George Orwell',
                genre: 'Dystopian Fiction',
                description: 'A dystopian novel that explores the dangers of totalitarianism and government control.',
                read: true,
            },
            {
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                genre: 'Classic',
                description: 'A novel depicting the decadence of the American Dream during the Roaring Twenties.',
                read: true,
            },
            {
                title: 'The Catcher in the Rye',
                author: 'J.D. Salinger',
                genre: 'Coming-of-Age Fiction',
                description: 'A novel about the struggles of a teenage boy navigating the challenges of adolescence and adulthood.',
                read: false,
            },
            {
                title: 'Harry Potter and the Sorcerer\'s Stone',
                author: 'J.K. Rowling',
                genre: 'Fantasy',
                description: 'The first book in the magical series following the adventures of a young wizard, Harry Potter.',
                read: false,
            },
            {
                title: 'The Hobbit',
                author: 'J.R.R. Tolkien',
                genre: 'Fantasy',
                description: 'A fantasy novel about the journey of Bilbo Baggins as he accompanies a group of dwarves on a quest.',
                read: false,
            },
        ];

        await BookModel.insertMany(books);
        console.log('Added Books');

    } catch (error) {
        console.error('Error during seeding:', error.message);
    } finally {
        closeConnection();
    }
};

// Connect to the database and run the seeding logic
seedDatabase()