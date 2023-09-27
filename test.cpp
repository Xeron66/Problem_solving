#include <iostream>
#include <string>
#include <sstream>
#include <vector>
#include <set>
#include <algorithm>
#include <cctype>
using namespace std;

// Set of C keywords
const std::set<string> keywords = {
  "auto", "break", "case", "char", "const", "continue", "default", "do",
  "double", "else", "enum", "extern", "float", "for", "goto", "if", "int",
  "long", "register", "return", "short", "signed", "sizeof", "static", "struct",
  "switch", "typedef", "union", "unsigned", "void", "volatile", "while"
};

// Function to remove special characters from a string
string removeSpecialCharacters(const string& str) {
  string result;
  bool lastWasAlphanumeric = false; // Keep track of whether the last character was alphanumeric

  for (char c : str) {
    if (isalnum(c)) {
      result += c;
      lastWasAlphanumeric = true;
    } else if (c == '_' && lastWasAlphanumeric) {
      result += c; // Allow underscores in the middle of words
    } else {
      lastWasAlphanumeric = false;
    }
  }
  return result;
}

// Function to tokenize a C statement
vector<string> tokenizeCStatement(const string& statement) {
  vector<string> tokens;
  istringstream stream(statement);
  string token;

  while (stream >> token) {
    // Remove special characters from the token
    string cleanToken = removeSpecialCharacters(token);

    // Check if the token (after removing special characters) is a keyword
    if (keywords.count(cleanToken)) {
      tokens.push_back("Keyword: " + cleanToken);
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