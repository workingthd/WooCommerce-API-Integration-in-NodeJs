try {
    var WooCommerce = new WooCommerceAPI({
      url: `${process.env.Base_Url}`,
      consumerKey: process.env.consumerKey,
      consumerSecret: process.env.consumerSecret,
      wpAPI: true,
      version: 'wc/v3'
    })
    WooCommerce.get('customers', function (err, data, res) {
      console.log(res)
    })
  } catch (error) {
    throw error
  }
}