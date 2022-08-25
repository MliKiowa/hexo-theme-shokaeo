'use strict';

var pagination = require('hexo-pagination');

hexo.extend.generator.register('index', function(locals) {
  let covers = [];
  let catlist = [];
  let pages = [];
  const config = hexo.config;
  const theme = hexo.theme.config;
  const sticky = locals.posts.find({'sticky': true}).sort(config.index_generator.order_by);
  const posts = locals.posts.find({'sticky': {$exists: false}}).sort(config.index_generator.order_by);
  const paginationDir = config.pagination_dir || 'page';
  const path = config.index_generator.path || '';
  const categories = locals.categories;
  if(posts.length > 0) {
      pages = pagination(path, posts, {
      perPage: config.index_generator.per_page,
      layout: ['index', 'archive'],
      format: paginationDir + '/%d/',
      data: {
        __index: true,
        catlist: catlist,
        sticky: sticky
      }
    });
  } else {
    pages = [{
        path,
        layout: ['index', 'archive'],
        data: {
          __index: true,
          catlist: catlist,
          sticky: sticky
        }
      }];
  }
  return [...covers, ...pages]; 

});
