

# Header

Any article begin with a header containing the metadat of the article.

```
---
path: "/blog/test"
date: "2018-01-01"
title: "My first blog post test"
template: article
author: Loïc Lefloch
draft: false
category: testCategory
tags:
  - tag1
---
```

- path: url relative path that will be used to access the article. MUST begin with `/blog/`
- date: date of creation of the article, format: `DDDD-MM-dd`
- title: title of the article. Note: should not be more than 250 chars.
- template: Which template to use for this article. For now there is just one template: `article`
- author: name / pseudo of the author
- draft: if set to true, the article will not be displayed on production
- category: category in which the article should be present
- tags: list of tags. Used for SEO and to list articles with the same tags.
  NOTE: It should be limited to 5 tags maximum

# Images

## Free stock photos websites

- https://stocksnap.io/
- https://unsplash.com/ 