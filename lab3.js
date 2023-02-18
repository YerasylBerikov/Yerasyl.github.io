let movies = [ 
    { 
        "name": "Дэдпул 2", 
        "genre": "Фантастика", 
        "Grade": 7.4 
    }, 
    { 
        "name": "Быстрее пули", 
        "genre": "Боевик", 
        "Grade": 7.7 
    }, 
    { 
        "name": "Однажды в Голливуде", 
        "genre": "Криминал", 
        "Grade": 5.9
    } 
] 
function avg(movies){ 
    let sum = 0; 
    for (let i = 0; i < movies.length; i++) { 
        sum += movies[i]['Grade']; 
    } 
    return sum / movies.length; 
} 
 
let iron_man = { 
    "name": "Мистер и Миссис Смит", 
    "genre": "Мелодрама", 
    "Grade": 8.7 
} 
 
movies.push(iron_man) 
 
 
function write(i, movies){ 
    return movies[i]; 
} 
 
for (let i = 0; i < movies.length; i++) { 
    let obj = write(i, movies); 
    document.write("<h5>Movie: " + obj["name"] + "</h5>"); 
    document.write("<h5>Genre: " + obj["genre"] + "</h5>"); 
    document.write("<h5>Grade: " + obj["Grade"] + ""); 
    document.writeln("") 
} 
 
 
document.write("<h5>Average Grade: " + avg(movies) + "</h5>")

