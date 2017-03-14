require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'html/proofer'
require 'rake/testtask'

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), *%w[lib]))
require 'jekyll/version'

#############################################################################
#
# Standard tasks
#
#############################################################################

Rake::TestTask.new(:test) do |test|
  test.libs << 'lib' << 'test'
  test.pattern = 'test/**/test_*.rb'
  test.verbose = true
end

task :proof do
  ENV['MAG_HOST'] = 'magnetitebook.com'
  ENV['MAG_PREFIX'] = 'v1'
  sh "bundle exec jekyll build"
  HTML::Proofer.new("./_site").run
end

task :live do
  ENV['MAG_HOST'] = 'magnetitebook.com'
  ENV['MAG_PREFIX'] = ''
  sh "bundle exec jekyll build --future"
  sh "./_deploy"
end

task :v1 do
  ENV['MAG_HOST'] = 'magnetitebook.com'
  ENV['MAG_PREFIX'] = 'v1'
  sh "bundle exec jekyll build --future"
  sh "./_deploy"
end

task :v2 do
  ENV['MAG_HOST'] = 'magnetitebook.com'
  ENV['MAG_PREFIX'] = 'v2'
  sh "bundle exec jekyll build --future --unpublished"
  sh "./_deploy"
end

task :v3 do
  ENV['MAG_HOST'] = 'magnetitebook.com'
  ENV['MAG_PREFIX'] = 'v3'
  sh "bundle exec jekyll build"
  sh "./_deploy"
end

task :servelive do
  ENV['MAG_HOST'] = 'localhost:5000'
  ENV['MAG_PREFIX'] = ''
  sh "bundle exec jekyll serve --watch -H0.0.0.0 -P5000 --future"
end

task :serve do
  ENV['MAG_HOST'] = 'localhost:5000'
  ENV['MAG_PREFIX'] = ''
  sh "bundle exec jekyll serve --watch -H0.0.0.0 -P5000 --future --unpublished"
end
