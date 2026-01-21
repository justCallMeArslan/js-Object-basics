// ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    const isAdult = people.some(function (person){ // checking if at least one element passes test 
    // provided by callback function
      const currentDate = new Date().getFullYear();
      return currentDate - person.year >= 19; // check if its true or not
      
    })
    console.log(isAdult);

    // Array.prototype.every() // is everyone 19 or older?

    const isEveryoneAdults = people.every(person => {
        const currentDate = new Date().getFullYear();
        return currentDate - person.year >= 19;
    })

    console.log(isEveryoneAdults);
    

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const ID = comments.find(comment => {
        return comment.id === 823423;
    })
    console.log(ID);
    
    // Array.prototype.findIndex()
    // Find the comment with this ID

    const indexID = comments.findIndex(comment =>{
        return comment.id === 2039842;
    })
    console.log(indexID);
    
    // delete the comment with the ID of 823423

    comments.splice(indexID, 1); // deleting comment by mutating initial array, without adding 
    // the one we want to delete
    console.log(comments);
    