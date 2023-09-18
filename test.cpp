#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <set>
using namespace std;
// Set of C keywords
const std::set<string> keywords = {
    "auto", "break", "case", "char", "const", "continue", "default", "do",
    "double", "else", "enum", "extern", "float", "for", "goto", "if", "int",
    "long", "register", "return", "short", "signed", "sizeof", "static", "struct",
    "switch", "typedef", "union", "unsigned", "void", "volatile", "while"
};

// Function to tokenize a C statement
vector<string> tokenizeCStatement(const string& statement) {
    vector<string> tokens;
    istringstream stream(statement);
    string token;

    while (stream >> token) {
        // Check if the token is a keyword
        if (keywords.count(token)) {
            tokens.push_back("Keyword: " + token);
        }
    }

    return tokens;
}

int main() {
    string input;
    cout << "Enter a C statement: ";
    getline(cin, input);

    vector<string> tokens = tokenizeCStatement(input);

    cout << "Tokens:" << endl;
    for (const string& token : tokens) {
        cout << token << endl;
    }

    return 0;
}
