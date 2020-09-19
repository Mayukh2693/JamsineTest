## Install dependencies by running

`npm install`

- Now you can write the tests to test the functions `countDocumentsByQuery` and `insertIntoDb` and push it to the same repository.
- Also you need to write tests which will let the developer know where the gaps are in terms of error handling.

## To run tests

`jasmine`

## Test Cases

`Assumption: Initially the DB is empty`

- TC1- Verifies that empty DB returns null count
- TC2- Verifies non-null value returned when documents are added to DB
- TC3- Verify the search result based on query
- TC4- Verify total number of documents present in DB
- TC5- Verify collections returned based on query
- TC6- Verify no results are returned for invalid search
