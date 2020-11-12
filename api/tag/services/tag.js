"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  async find(params, populate) {
    // get array of tags
    let tags = await strapi.query("tag").find(params, populate);

    // map through the array to get access to each array of blogs
    let newTags = await Promise.all(
      tags.map(async (tag) => {
        let blogs = tag.blogs;

        // map through blogs
        let newBlogs = await Promise.all(
          blogs.map(async (blog) => {
            // get the author id, which is the author field
            let authorId = blog.author;

            // get the author id, which is the category field
            let categoryId = blog.category;

            // get the author of the blog
            let author = await strapi
              .query("author")
              .findOne({ id: authorId }, populate);
            // get the category of the blog
            let category = await strapi
              .query("category")
              .findOne({ id: categoryId }, populate);

            let updatedBlog = {
              ...blog,
              author,
              category,
            };
            return updatedBlog;
          })
        );
        let updatedTag = {
          ...tag,
          blogs: newBlogs,
        };
        return updatedTag;
      })
    );
    return newTags;
  },
};
