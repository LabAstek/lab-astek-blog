# Article - Good practices

## Header

Any article begin with a header containing the metadat of the article.

```markdown
---
path: "/blog/test"
date: "2018-01-01"
title: "My first blog post test"
template: article
author: Loïc Lefloch
draft: false
category: testCategory
coverImage: ./cover.jpg
tags:
  - tag1
---
```

- path: url relative path that will be used to access the article. MUST begin with `/blog/`
- date: date of creation of the article, format: `DDDD-MM-dd`
- title: title of the article. Note: should not be more than 250 chars.
- description: Useful because they often dictate how your pages are shown in search results.
  For optimum effectiveness, meta descriptions should be 70-160 characters long.
  Your meta descriptions should be concise and contain your best keywords.
- template: Which template to use for this article. For now there is just one template: `article`
- author: name / pseudo of the author
- draft: if set to true, the article will not be displayed on production
- category: category in which the article should be present
- tags: list of tags. Used for SEO and to list articles with the same tags.
  NOTE: It should be limited to 5 tags maximum
- coverImage: relative path of the cover to use for this article. The picture name must begin with 'cover.'

## Content

### Title

Only use `h2` titles (`##`), since a page needs only one `h1` that will be the article title.
This is MANDATORY for SEO reasons.

## Images

### Free stock photos websites

- [https://stocksnap.io/](https://stocksnap.io/)
- [https://unsplash.com/](https://unsplash.com/)

## SEO

You can install [SEO quake](https://chrome.google.com/webstore/detail/seoquake/akdgnmcogleenhbclghghlkkdndkjdjc/related?hl=en) 
and run it from your article, in order to have some SEO tips. Most of them are already described in this document.