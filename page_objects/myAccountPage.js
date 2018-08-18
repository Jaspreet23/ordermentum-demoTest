//Get config files
const config = require('config')
const backEndURL = config.get('backEndURL')

module.exports = {
  url: backEndURL,
  elements:{//All the page elements on My account section
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
      btnPublish:'button[name="publish"]',
      bodyContent:'body[class*="cke_editable"]'
  },
  commands: [{
    /**
     * This function will select the 'Module'from left menu and 
     * then Go to Blogs page 
     */
    selectBlog: function (client) {
      console.log('--Select Blog-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
        .waitForElementVisible('@modulesMenu', slowTimer)
        .click('@modulesMenu') 
        .click('@blogMenu') 
        .waitForElementVisible('@addArticle', slowTimer)

    },
    /**
     * This function will the 'Ádd Article'button on the
     * Blog page
     */
    clickArticle: function(client){
      console.log('--Click article link-- ');
      const slowTimer = client.globals.waitForElementTimeout;
      return this
        .click('@addArticle')
        .waitForElementVisible('@form', slowTimer)
    },
    /**
     * This function will enter all the blog article data 
     * and click the button based on the selector passed
     */
    addArticle: function(client, selector){
      console.log('--Enter blog article data-- ');
      const slowTimer = client.globals.waitForElementTimeout;
       this
        .waitForElementVisible('@blogTitle', slowTimer)
        .setValue('@blogTitle', "jasTitle")
        .waitForElementVisible('@selectCategory', slowTimer)
        .waitForElementVisible('@inputAuthor', slowTimer)
        .waitForElementVisible('@btnPublish', slowTimer)
        .api.pause(2000)

        return client
           .frame(0, () => {
             client
              .pause(5000) 
              .setValue('body', 'JAS dummy content')
              .frame(null)
              .click(selector)
              .pause(10000) 
        })
    },
     /**
     * This function will call 'addArticle'method
     * and pass the 'Save Draft' button selector
     */
    saveDraftArticle: function(client){
       return this.addArticle(client, 'button[name="saveAsDraft"]');
    },
     /**
     * This function will call 'addArticle'method
     * and pass the 'Publish' button selector
     */
    publishArticle:function(client){
       return this
           .addArticle(client, 'button[name="publish"]')
    }
   
  }]
};