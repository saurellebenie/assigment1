var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    
     
     function librarysort(a,b){
        let x=a.title;
        let y=b.title;
       if (x < y)
        { return -1;}
       if (x > y)
        { return 1;}
       return 0;
     }
     
     console.log(library.sort(librarysort));
     
     
       
     
    