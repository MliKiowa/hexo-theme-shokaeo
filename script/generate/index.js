'use strict';
hexo.extend.generator.register('index', function(locals) {
  const config = hexo.config;
  const theme = hexo.theme.config;
  const sticky = locals.posts.find({'sticky': true}).sort(config.index_generator.order_by);
  const posts = locals.posts.find({'sticky': {$exists: false}}).sort(config.index_generator.order_by);
  const paginationDir = config.pagination_dir || 'page';
  const path = config.index_generator.path || '';
  const categories = locals.categories;
}
