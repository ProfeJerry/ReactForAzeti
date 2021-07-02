export const config = {

    redirectUri: 'https://localhost:3000/'

};

//dev
const host = 'https://hacker-news.firebaseio.com/v0';

export const EndPoint = {
    TopStories: host + '/topstories.json',
    NewStories: host + '/newstories.json',
    BestStories: host + '/beststories.json',
    GetItem: host + '/item'

};