const meta = {
  "index": {
    "title": "Start Here",
    display: "hidden",
    "theme": {
      breadcrumb: false,
      sidebar: false,
    },
  },

  "blog": {
    type: 'page',
    theme: {
      typesetting: "article",
      timestamp: false,
         sidebar: false,
    },
  },

  "posts" : {
    "title": "Blog",
          display: "hidden",

    type: "page",
    theme: {
      typesetting: "article",
      timestamp: false,
      sidebar: false,
    },
  },

  "gallery": {
    "title": "Gallery",
    "type": "page",
    "theme": {
      "timestamp": false,
      "sidebar": false,
    },
  },

  "docs": { 
  "title": "Docs",
    type: "page",
  },

  "further-reading": { 
  "title": "Bibliography",
    type: "page",
  },

}

export default meta;