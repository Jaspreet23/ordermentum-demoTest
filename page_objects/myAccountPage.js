const config = require('config')
const backEndURL = config.get('backEndURL')

module.exports = {
  url: backEndURL,
  elements:{
      body:'body',
      dashboardMenu:'a[data-original-title="Dashboard"]',
      modulesMenu:'a[data-original-title="Modules"]',
      dropdownToggle:'li a[data-toggle="dropdown"]',
      signoutLink:'a[href*="/private/en/authentication/logout"]',
      blogMenu:'a[href*="/private/en/blog/index"]',
      form:'#add',
      addArticle:'a[title*="Add article"]',
      blogTitle:'#title',
      blogContentDesc:'#cke_1_contents',
      blogImageUpload:'#image',
      blogSummary:'#introduction',
      selectCategory:'#categoryId',
      inputAuthor:'#userId',
      inputTags:'#tags',
      tagsInfo:'#tags-info',
      btnSaveDraft:'button[name="saveAsDraft"]',
      btnPublish:'button[name="publish"]'
  },
  commands: [{
    selectBlog: function (client) {
      console.log('--Select Blog-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
        .waitForElementVisible('@modulesMenu', slowTimer)
        .click('@modulesMenu') 
        .click('@blogMenu') 
        .waitForElementVisible('@addArticle', slowTimer)

    },
    clickArticle: function(client){
      console.log('--Click article link-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
        .click('@addArticle')
        .waitForElementVisible('@form', slowTimer)
    },
    addArticle: function(client){
      console.log('--Enter blog article data-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
        .waitForElementVisible('@blogTitle', slowTimer)
        .setValue('@blogTitle', "jasTitle")
        .setValue('@blogContentDesc', "jas blog content desc")
        .setValue('@blogSummary', "jas blog summary")
        .waitForElementVisible('@selectCategory', slowTimer)
        .waitForElementVisible('@inputAuthor', slowTimer)
        .api.pause(20000)
        
    },
    saveDraftArticle: function(client){
       this.addArticle(client);
       return this
         // .click('@btnSaveDraft')
    },
    publishArticle:function(client){
       this.addArticle(client);
       return this
          //.click('@btnPublish')
    }
   
  }]
};