# Chat-App
It is a fully functional chat application on localhost:3000, uses ReactJS, Express, MongoDB and Socket.io. Other than that uses APIs such as dicebear for random image generation

For using this application, first start the server. For the server you must have MongoDBCompass installed on your system and the port of MongoDB should 27017 and if the port of MongoDB is different please change it in the .env file present in the server folder
 
 Start the server using the command npm start or yarn start while in the server folder

After starting the server in a new terminal open the public folder and start it by Yarn start. Then on http://localhost:3000, a react app will be published showing the login page
Now if you have an existing user then use the ID Password to log in or create a new user using the register icon
Further on this Application uses dicebear API to generate avatars for a newly added user based on an input dialog box. This avatar is associated with the user and stored in the MongoDB database Users
Further on this also features emoji icons from React-Emoji library. The live telecast of message is done through Socket.io if both the users are online else the message is saved in the messages database in MongoDB and whenever the user logs in the messages are shown in his chat


New Developments could be:
  1. Newest chat pop up on the top with how many new messages showing
  2. Sharing of video/audio/text files in the chat
  3. Features such as audio/video call functionality
  4. Deploying the app on a server

Screen Shots

![image](https://github.com/AmolChi/Chat-App/assets/75240926/041dcc84-2cb5-4e88-a4ca-4d39667d1dca)

![image](https://github.com/AmolChi/Chat-App/assets/75240926/844059e1-6d66-4e22-ae14-64355dc1dc7f)

![image](https://github.com/AmolChi/Chat-App/assets/75240926/a84a8235-cd71-4b85-b949-b48ccc1db537)

![image](https://github.com/AmolChi/Chat-App/assets/75240926/84e5afa9-6012-40fe-8c65-967202fa798e)

![image](https://github.com/AmolChi/Chat-App/assets/75240926/d81823ed-7190-409a-9f88-e74f1823685d)

![image](https://github.com/AmolChi/Chat-App/assets/75240926/31571ed5-f2d6-48ce-ae1d-c5e4c90443dd)



