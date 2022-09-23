const courses = [{
        prefix: 'ITIS',
        id: 5166,
        title: 'Network based app development'
    },
    {
        prefix: 'ITIS',
        id: 5180,
        title: 'Mobile application development'
    },
    {
        prefix: 'ITCS',
        id: 5156,
        title: 'Applied machine learning'
    },
    {
        prefix: 'ITCS',
        id: 5160,
        title: 'Database systems'
    }
];

//return course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

//To do: implement save(course)
function save(course){
    courses.push(course);
}

//To do: implement findByPrefix(prefix)
function findByPrefix(prefix){
    return courses.filter(x => x['prefix']===prefix);
}


//To do: implement updateById(id, course)
function updateById(id, course){
    for(let i=0;i<courses.length;i++){
        if(courses[i]['id']===id){
            courses[i] = course;
            return true
        }
    }
    return false;
}

//To do: implement removeById(id)
function removeById(id){
    for(let i=0;i<courses.length;i++){
        if(courses[i]['id']===id){
            courses.splice(i,1);
            return true
        }
    }
    return false;
}

//To do: uncommet the following testing code when you are ready to test your functions

save({ prefix: 'ITIS', id: 5250, title: 'Computer forensics' });
save({ prefix: 'ITIS', id: 6220, title: 'Data privacy' });
save({ prefix: 'ITIS', id: 6420, title: 'Usable security and privacy' });
console.log(courses);
console.log(findById(5166));
console.log(findByPrefix('ITIS'));
console.log(removeById(6000));
console.log(updateById(6000));
console.log(updateById(5166, {
    prefix: 'ITIS',
    id: 5166,
    title: 'Network-based app development'
}, ));
console.log(removeById(6420));
console.log(courses);