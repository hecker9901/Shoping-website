#include <iostream>
#include <vector>

class Book {
public:
    Book(const std::string& title, bool available = true) : title(title), isAvailable(available) {}

    void checkout() {
        if (isAvailable) {
            isAvailable = false;
            std::cout << title << " has been checked out.\n";
        } else {
            std::cout << title << " is not available for checkout.\n";
        }
    }

    void returnBook() {
        if (!isAvailable) {
            isAvailable = true;
            std::cout << title << " has been returned.\n";
        } else {
            std::cout << title << " is already available.\n";
        }
    }

    void displayStatus() {
        std::cout << "Book Title: " << title << "\n";
        std::cout << "Availability: " << (isAvailable ? "Available" : "Checked Out") << "\n";
    }

private:
    std::string title;
    bool isAvailable;
};

int main() {
    std::vector<Book> library;

    // Add some books to the library
    library.push_back(Book("The Great Gatsby"));
    library.push_back(Book("To Kill a Mockingbird"));
    library.push_back(Book("1984"));

    // Demonstrate book checkout and return
    library[0].checkout();
    library[1].checkout();
    library[0].returnBook();

    // Display the current status of all books
    for (const Book& book : library) {
        book.displayStatus();
    }

    return 0;
}
