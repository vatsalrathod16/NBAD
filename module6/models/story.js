const {v4:uuidv4} = require('uuid');
const {DateTime} = require("luxon");
const stories = [{
    id : '1',
    title : 'A funny story',
    content : 'this is just plain text.',
    author : 'vatsal',
    createdAt : DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},{
    id : '2',
    title : 'Not a funny story',
    content : 'this is just plain text, but with some extra text',
    author : 'vatsal',
    createdAt : DateTime.local(2022,2,12,18,0).toLocaleString(DateTime.DATETIME_SHORT)
} ];


exports.find = () =>{
    return stories;
}

exports.findById = (id) =>{
    return stories.find(story =>story.id ===id)
};

exports.save = (story) =>{
    console.log(story)
    story.id = uuidv4
    story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    stories.push(story);
    console.log(stories)
};

exports.updateById = (id,newStory) => {
    let story = stories.find(story =>story.id ===id);

    if(story){
        story.title = newStory.title;
        story.content = newStory.content;
        stories[id]=story;
        return true;
    }
    else{
        return false;
    }
}

exports.deleteById = (id) =>{
    let index = stories.findIndex(story => story.id ===id);
    if(index!== -1){
        stories.splice(index,1);
        return true;
    }
    else{
        return false;
    }
}