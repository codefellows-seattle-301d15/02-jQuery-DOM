var articles = [];

function Article (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;

};

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);
  $newArticle.find('a').attr('href', this.authorUrl).text(this.author);
  $newArticle.find('h1').text(this.title);
  $newArticle.find('.article-body').append(this.body);
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.removeClass('template');
  return $newArticle;
};

blogArticles.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

blogArticles.forEach(function(articleObj) {
  articles.push(new Article(articleObj));
});

articles.forEach(function(articleObj) {
  $('#articles').append(articleObj.toHtml());
});
