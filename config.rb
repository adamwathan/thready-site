helpers do

  def site_url
    "https://website.com"
  end

  def site_title
    "Website Name"
  end

  def site_description
    "Default description"
  end

  def twitter_username
    "@username"
  end

end

activate :external_pipeline,
  name: :webpack,
  command: build? ?
    "./node_modules/webpack/bin/webpack.js --bail -p" :
    "./node_modules/webpack/bin/webpack.js --watch --progress --color",
  source: ".tmp/dist",
  latency: 1

configure :development do
 config[:css_dir] = ".tmp/dist"
 config[:js_dir] = ".tmp/dist"
end

activate :livereload

activate :directory_indexes

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end



page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false