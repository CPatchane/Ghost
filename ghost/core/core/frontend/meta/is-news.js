function getNews(data) {
    // NOTE: should use 'post' OR 'page' once https://github.com/TryGhost/Ghost/issues/10042 is resolved
    if (!data.post) {
        return;
    }
    return data.post.news;
}

module.exports = getNews;
