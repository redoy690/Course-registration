<!--

Three project features :

1. In this project nine course are offered for a user. Each course have Picture, Title, Description, Price, Credit and a select button. After see this user can easily decided and compair with all packages.

2. If a user select a course. The course are selected for bookmark. In bookmark user can easily see the selected course title,  total credit hour and total remaining hour. Each user have a credit limit(20). User never cross this limit. If user already complete their credit 20 hour then it will give you a message "You have finished credit limit".

3. A user never select a course more than one time. If a user select same course two times it will give you a message "You already selected this Course".
 

-->






<!--


How can I managed state in my assignment project:

I create 4 different state in my project. I use three state in app.jsx component and another one state use in cards.jsx component. 

1. First state are use for receive data from json and set data in cards components. which is "const [cards, setCards]= useState([])".
2. Second state are use for remove duplicate data in bookmark. which is "[bookmarks, setBookmarks] =useState([])".
3. Third state are use for remaining total hour. which is "[remaining, setremaining] = useState(0)".
4. Fourth state are use for calculate total credit hour. which is "[totalCredit, setTotalCredit]= useState(0)".

-->