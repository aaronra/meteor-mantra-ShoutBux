# ShoutBux

ShoutBux: A twitter like application that lets you post a “shout”(with a max character limit) to your timeline
Specs
 1. Must be written in NodeJS frameworks (expressJS, meteorJS etc).
 2. Must have its own Repository(GitHub, BitBucket etc).
 3. Must have testing.
 4. Must use Database storage(MySQL, sqLite or MongoDB etc).
 5. A README file that contains the information about the application and the steps on how to run it.
 6. Must have a high level app design structure diagram. (Important!)
Requirements
 1. The application should have a simple login feature
    -Must implement correct form handling/validation.
    -Seed the app with atleast 10 users.
 2. Authorized users can post, edit, delete a “shout” to their own timeline.
    -A “shout” should contain 32 chars max.
    -Should contain date posted ( momentjs library can be used)
    -“Shouts” should be sorted by date posted - latest first.
    -Only the owner of the “shout” can alter it.
    - Only users that follow the other can see each others timeline.
    -Include this on the seeder where in a user follows other user
 3. Timelines should update realtime.
    -Whenever User X is looking at User Y’s timeline, every update of Y’s timeline should directly reflect to User X’s view of User Y’s timeline.
 4. Use your imagination for the look and feel of the app.
 5. Candidate should demonstrate test suite implementations.

 <a name="start"></a>
 # Start Page
 You can login using these following accounts

 | username 	| password 	|
 |-------------	|:--------:	|
 | doom 	| doom 	|
 | akasha 	| akasha 	|
 | balanar 	| balanar 	|
 | spectre 	| spectre 	|
 | yurnero 	| yurnero 	|
 | Khael 	| Khael 	|
 | luna 	| luna 	|
 | leoric 	| leoric 	|
 | centaur 	| centaur 	|
 | shadowfiend 	| shadowfiend 	|

 <a name="notes"></a>
 
 **Setting Up:** How to setup and run the app
 > ```bash
 > cd app
 > npm install
 > meteor
 > ```
 
  **Testing:** How to test the app
  > ```bash
  > npm test
  > ```
 
 **NOTE:** app running on localhost:3000